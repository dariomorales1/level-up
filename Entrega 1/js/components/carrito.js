const STORAGE_KEY = "cart_v1";

const Cart = {
    state: { items: [] },

    load() {
        try {
        this.state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: [] };
        } catch {
        this.state = { items: [] };
        }
        this.save();
    },

    save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        updateCartBadge();
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

    count() {
        return this.state.items.reduce((sum, i) => sum + i.qty, 0);
    }
};

// actualizar el numerito del carrito
function updateCartBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) {
        badge.textContent = Cart.count();
    }
}

Cart.load();

function renderCart() {
    const cartItemsCont = document.getElementById("cartItems");
    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");

    if (!cartItemsCont) return;

    if (Cart.state.items.length === 0) {
        cartItemsCont.innerHTML = "<p>El carrito está vacío</p>";
        subtotalEl.textContent = "0 CLP";
        totalEl.textContent = "0 CLP";
        return;
    }

    let subtotal = 0;
    cartItemsCont.innerHTML = Cart.state.items.map(item => {
        const totalItem = item.precio * item.qty;
        subtotal += totalItem;
        return `
        <div>
            <img src="${item.img}" alt="${item.nombre}">
            <div>
            <strong>${item.nombre}</strong><br>
            ${item.qty} x ${item.precio.toLocaleString("es-CL")} CLP
            </div>
            <button onclick="Cart.remove('${item.id}')">❌</button>
        </div>
        `;
    }).join("");

    // Calcular totales
    const envio = 3990;
    subtotalEl.textContent = subtotal.toLocaleString("es-CL") + " CLP";
    totalEl.textContent = (subtotal + envio).toLocaleString("es-CL") + " CLP";
}

// Abrir / cerrar el drawer
const drawer = document.getElementById("cartDrawer");
document.getElementById("openCart")?.addEventListener("click", () => {
    drawer.classList.toggle("show");
    renderCart();
});

const closer = document.getElementById("cerrarCarro");
document.getElementById("cerrarCarro")?.addEventListener("click", () => {
    drawer.classList.toggle("show");
    renderCart();
})


// Vaciar carrito
document.getElementById("vaciarCart")?.addEventListener("click", () => {
    Cart.state.items = [];
    Cart.save();
    renderCart();
});

// Método extra para eliminar un producto
Cart.remove = function(id) {
    this.state.items = this.state.items.filter(i => i.id !== id);
    this.save();
    renderCart();
};