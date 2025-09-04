// --- utils de sesión (simples) ---

function logout() {
  // si tienes helper global:
  if (typeof setCurrentUser === "function") setCurrentUser(null);
  else localStorage.removeItem("session_user");

  if (window.Cart?.switchUser) Cart.switchUser(null);
  renderHeaderNav();
}


// --- render dinámico del header + drawer ---
function renderHeaderNav() {
  const user = getCurrentUser();
  const header = document.getElementById("headerPpal");
  if (!header) return;

  header.innerHTML = `
    <header class="headerPpal">
      <nav class="navbarPpal">
        <div class="navbarFirstContainer">
          <a class="navbar-brand logoName" href="index.html" id="logo">
            <img src="assets/icons/icono.png" alt="icono" width="60" height="auto" class="d-inline-block align-text-center" />
            Level-Up
          </a>
        </div>

        <div class="navBarButtons">
          <div class="navBarButtonsContainer">
            <a class="nav-link active btnAgregarHeader" href="index.html">Inicio</a>
            <a class="nav-link active btnAgregarHeader" href="catalogo.html">Catalogo</a>
          </div>

          <div class="navBarButtonsContainer">
            <a id="openCart" class="btnCarrito">
              <i class="fa-solid fa-cart-shopping"></i><span id="cartCount">0</span>
            </a>

            ${
              user
                ? `
                  <a class="nav-link active btnAgregarHeader" href="auth/account.html">
                    ${user.name ? `Hola, ${user.name}` : "Cuenta"}
                  </a>
                  <a id="logoutBtn" class="nav-link active btnAgregarHeader" href="#">Cerrar sesión</a>
                `
                : `
                  <a class="nav-link active btnAgregarHeader" href="auth/login.html">Ingresar</a>
                  <a class="nav-link active btnAgregarHeader" href="auth/register.html">Registrarse</a>
                `
            }
          </div>
        </div>
      </nav>
    </header>

    <!-- Drawer/Modal del carrito -->
    <div id="cartDrawer" class="cartDrawer">
      <div id="left" aria-label="Cerrar carrito (overlay)"></div>
      <div id="right">
        <div class="rightUp">
          <h2 id="carritoBtn"><i class="fa-solid fa-cart-shopping"></i> Tu Carrito</h2>
          <div id="cartItems"></div>
          <hr>
          <p><strong>Subtotal:</strong> <span id="cartSubtotal">0</span></p>
          <p><strong>Envío:</strong> <span id="cartEnvio">3.990 CLP</span></p>
          <p><strong>Total:</strong> <span id="cartTotal">0</span></p>
          <div class="btnesUp">
            <button id="vaciarCart" class="btnVaciar">Vaciar carrito</button>
            <button id="cerrarCarro" class="btnVaciar">Cerrar carrito</button>
          </div>
        </div>
        <div class="rightDown">
          <button id="comprarCarro" class="btnComprar">Pagar</button>
        </div>
      </div>
    </div>
  `;

  // --- listeners del header recién inyectado ---
  document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    logout();
  });

  // Si ya tienes lógica del carrito en carrito.js, solo dispara sus funciones si existen:
  const drawer   = document.getElementById("cartDrawer");
  const btnOpen  = document.getElementById("openCart");
  const btnClose = document.getElementById("cerrarCarro");
  const overlay  = document.getElementById("left");

  function openDrawer() {
    drawer?.classList.add("show");
    window.renderCart?.();
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer?.classList.remove("show");
    document.body.style.overflow = "";
  }

  btnOpen?.addEventListener("click", (e) => { e.preventDefault?.(); openDrawer(); });
  btnClose?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer?.classList.contains("show")) closeDrawer();
  });

  // Botones del carrito
  document.getElementById("vaciarCart")?.addEventListener("click", () => {
    if (!window.Cart) return;
    Cart.clear ? Cart.clear() : (Cart.state.items = [], Cart.save?.(), window.renderCart?.());
  });

  document.getElementById("comprarCarro")?.addEventListener("click", () => {
    // aquí podrías redirigir a checkout.html o mostrar un toast
    // showToast?.("🧾 Próximamente: Checkout");
  });

  // Actualiza el numerito si Cart existe
  if (window.updateCartBadge) updateCartBadge();
}

// Render inicial
renderHeaderNav();
