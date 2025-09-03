document.getElementById("headerPpal").innerHTML =  `
    <header class="headerPpal">
            <nav class="navbarPpal">
                <div class="navbarFirstContainer">
                    <a class="navbar-brand logoName" href="index.html" id="logo">
                        <img src="assets/icons/icono.png" alt="icono" width="60" height="auto"
                            class="d-inline-block align-text-center" />
                            Level-Up
                    </a>
                    
                </div>
                <div class="navBarButtons">
                    <div class="navBarButtonsContainer">
                        <a class="nav-link active btnAgregarHeader" aria-current="page" href="index.html">Inicio</a>
                        <a class="nav-link active btnAgregarHeader" aria-current="page" href="catalogo.html">Catalogo</a>
                    </div>
                    
                    <div class="navBarButtonsContainer">
                        <a id="openCart" class="btnCarrito">
                            <i class="fa-solid fa-cart-shopping"></i><span id="cartCount">0</span>
                        </a>
                        <a class="nav-link active btnAgregarHeader" aria-current="page" href="auth/login.html">Ingresar</a>
                        <a class="nav-link active btnAgregarHeader" href="auth/register.html">Registrarse</a>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Drawer/Modal del carrito -->
        <div id="cartDrawer" class="cartDrawer">
            <div id="left" aria-label="Cerrar carrito (overlay)">
            </div>
            <div id="right">
                <h2 id="carritoBtn"><i class="fa-solid fa-cart-shopping"></i> Tu Carrito</h2>
                <div id="cartItems"></div>
                <hr>
                <p><strong>Subtotal:</strong> <span id="cartSubtotal">0</span></p>
                <p><strong>Envío:</strong> <span id="cartEnvio">3.990 CLP</span></p>
                <p><strong>Total:</strong> <span id="cartTotal">0</span></p>
                <button id="vaciarCart" class="btnVaciar">Vaciar carrito</button>
                <button id="cerrarCarro" class="btnVaciar">Cerrar carrito</button>
            </div>
        </div>
`;

