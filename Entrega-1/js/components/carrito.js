const parseCLP = (valor) => {
    const limpio = String(valor ?? "0").replace(/\D/g, "");
    return parseInt(limpio, 10) || 0;
};

const CLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

const Cart = {
    state: { items: [] },
    storageKey: "cart_v1:guest",
    user: null,

    load() {
        this.user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
        this.storageKey = (typeof getCartKeyForUser === "function") ? getCartKeyForUser(this.user) : "cart_v1:guest";

        try {
            this.state = JSON.parse(localStorage.getItem(this.storageKey)) || { items: [] };
        } catch {
            this.state = { items: [] };
        }
        this.save();
    },

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
        updateCartBadge();
    },

    
    // Cambiar de usuario (login/logout) y cargar su carrito
    // - onLogin: fusiona el carrito guest con el del usuario
    switchUser(newUser) {
        const prevKey = this.storageKey;
        const prevState = this.state;

        // setea nuevo usuario
        this.user = newUser || null;
        this.storageKey = (typeof getCartKeyForUser === "function") ? getCartKeyForUser(this.user) : "cart_v1:guest";

        // carga el nuevo carrito
        let nextState;
        try {
            nextState = JSON.parse(localStorage.getItem(this.storageKey)) || { items: [] };
        } catch {
            nextState = { items: [] };
        }

        // Si venimos de guest -> fusiona carritos
        const cameFromGuest = prevKey === "cart_v1:guest" && this.user?.email;

        if (cameFromGuest && prevState?.items?.length) {
            // merge sencillo: suma cantidades por id
            const idxById = new Map(nextState.items.map(i => [i.id, i]));
            for (const it of prevState.items) {
                const found = idxById.get(it.id);
                if (found) {
                    found.qty += it.qty;
                } else {
                    nextState.items.push(it);
                }
            }
            // Limpia el carrito guest para no duplicar
            localStorage.setItem("cart_v1:guest", JSON.stringify({ items: [] }));
        }

        this.state = nextState;
        this.save();
        renderCart?.();
    },

    find(id) {
        return this.state.items.find(i => i.id === id);
    },

    add(producto, qty = 1) {
        const pid = producto.Código ?? producto.Codigo;
        const existing = this.find(pid);

        if (existing) {
        existing.qty += qty;
        } else {
        this.state.items.push({
            id: pid,
            nombre: producto.Nombre,
            precio: parseCLP(producto["Precio"]),
            img: producto.imgLink,
            qty
        });
        }
        this.save();
    },

    remove(id) {
        const item = this.find(id);
        if (item) {
            if (item.qty > 1) {
                // Si hay más de una unidad, resta 1
                item.qty -= 1;
            } else {
                // Si solo queda una, elimina el producto
                this.state.items = this.state.items.filter(i => i.id !== id);
            }
            this.save();
            renderCart();
        }
    },

    clear() {
        this.state.items = [];
        this.save();
        renderCart?.();
    },

    count() {
        return this.state.items.reduce((sum, i) => sum + i.qty, 0);
    }
};

// badge del carrito
function updateCartBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = Cart.count();
}

Cart.load();
window.Cart = Cart;

function renderCart() {
    const cartItemsCont = document.getElementById("cartItems");
    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");
    const envioEl = document.getElementById("cartEnvio");

    if (!cartItemsCont) return;

    if (Cart.state.items.length === 0) {
        cartItemsCont.innerHTML = "<p>El carrito está vacío</p>";
        if (subtotalEl) subtotalEl.textContent = CLP.format(0);
        if (envioEl) envioEl.textContent = CLP.format(3990);
        if (totalEl) totalEl.textContent = CLP.format(0);
        return;
    }

    let subtotal = 0;
    cartItemsCont.innerHTML = Cart.state.items.map(item => {
        const totalItem = item.precio * item.qty;
        subtotal += totalItem;
        return `
        <div class="cartContainer">
            <img src="${item.img}" alt="${item.nombre}">
            <div class="cartInfo">
            <strong class="itemName">${item.nombre}</strong>
            <p class="countPrice">${item.qty} x ${CLP.format(item.precio)}</p>
            </div>
            <button class="btnX" onclick="Cart.remove('${item.id}')">${`<i class="fa-solid fa-xmark"></i>`}</button>
        </div>
        `;
    }).join("");

    const envio = 3990;
    if (subtotalEl) subtotalEl.textContent = CLP.format(subtotal);
    if (envioEl) envioEl.textContent = CLP.format(envio);
    if (totalEl)  totalEl.textContent  = CLP.format(subtotal + envio);
}

// ---- Drawer (abrir/cerrar) ----
const drawer   = document.getElementById("cartDrawer");
const btnOpen  = document.getElementById("openCart");
const btnClose = document.getElementById("cerrarCarro");
const overlay  = document.getElementById("left"); 
function openDrawer() {
    drawer?.classList.add("show");
    renderCart();
    document.body.style.overflow = "hidden";
}
function closeDrawer() {
    drawer?.classList.remove("show");
    document.body.style.overflow = "";
}

btnOpen?.addEventListener("click", (e) => {
    e.preventDefault?.();
    openDrawer();
});


btnClose?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer?.classList.contains("show")) closeDrawer();
});


document.getElementById("vaciarCart")?.addEventListener("click", () => {
    Cart.clear();
});
