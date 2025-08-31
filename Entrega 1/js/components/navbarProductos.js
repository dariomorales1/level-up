document.getElementById("navbarProductos").innerHTML =  `
    <nav class="navbar navbar-expand barProductos" data-bs-theme="dark">
        <div class="container-fluid justify-content-center">
            <ul class="navbar-nav productosUl">
                <li class="nav-item dropdown productosBtn">
                    <a class="nav-link dropdown-toggle productosBtnA" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Zona Gamer
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" data-category="Consolas" href="#">Consolas</a></li>
                        <li><a class="dropdown-item" data-category="Computadores Gamers" href="#">Computadores Gamer</a></li>
                        <li><a class="dropdown-item" data-category="Mouse" href="#">Mouse</a></li>
                        <li><a class="dropdown-item" data-category="Mousepad" href="#">MousePad</a></li>
                        <li><a class="dropdown-item" data-category="Sillas Gamers" href="#">Sillas Gamer</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown productosBtn">
                    <a class="nav-link dropdown-toggle productosBtnA" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Ropa y Personalizados
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" data-category="Poleras Personalizadas" href="#">Poleras Personalizadas</a></li>
                        <li><a class="dropdown-item" data-category="Polerones Gamers Personalizados" href="#">Polerones Gamer Personalizados</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown productosBtn">
                    <a class="nav-link dropdown-toggle productosBtnA" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Juegos y Accesorios
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" data-category="Accesorios" href="#">Accesorios</a></li>
                        <li><a class="dropdown-item" data-category="Juegos de Mesa" href="#">Juegos de Mesa</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
`;

