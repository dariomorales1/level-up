(() => {
  const cont = document.getElementById("detalleProducto");

  const params = new URLSearchParams(location.search);
  const codigo = (params.get("codigo") || "").trim().toUpperCase();

  const p = window.productos.find(x =>
    String(x.Código ?? x.Codigo).toUpperCase() === codigo
  );

  if (!p) {
    cont.innerHTML = `<p>Producto no encontrado.</p>`;
    return;
  }

  // Columnas de la tabla de especificaciones

  const code = String(p.Código ?? p.Codigo).toLowerCase();

  const columnasEsp = p["Especificaciones"].map((especificacion) => `
    <tr>
      <td class="celdaTablaEsp">${especificacion}</td>
    </tr>
  `).join("");

  const columnasCom = p["Comentarios"].map((comentario) => `
    <tr>
      <td class="celdaTablaCom">Anónimo</td>
      <td class="celdaTablaCom">${comentario}</td>
    </tr>
  `).join("");


  // estrella

  function renderEstrellas(puntos) {
    const nRaw = parseFloat(puntos);
    const n = isNaN(nRaw) ? 0 : nRaw;

    // 2) Si viene en 1..10 lo pasamos a 0..5 (n/2). Si ya viene 0..5 lo usamos tal cual.
    const rating0a5 = n > 5 ? n / 2 : n;

    // 3) Clamp a [0, 5] y fuerza 0.5 steps si te interesa redondear a medias
    const r = Math.min(5, Math.max(0, Math.round(rating0a5 * 2) / 2));

    // 4) Descompone en llenas / media / vacías
    const full = Math.floor(r);
    const half = (r - full) >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    // 5) Construye HTML con Font Awesome
    return (
      '<i class="fa-solid fa-star"></i>'.repeat(full) +
      (half ? '<i class="fa-solid fa-star-half-stroke"></i>' : '') +
      '<i class="fa-regular fa-star"></i>'.repeat(empty)
    );
  }

  // Bloque de estrellas (cerrar bien el div)
  const estrellas = `
    <h6>Puntuación:</h6>
    <div id="puntuacion" class="rating">${renderEstrellas(p.Puntuacion)}</div>
  `;

  cont.innerHTML = `
    <article class="producto-detalle">
      <img class="detalle-img" src="${p.imgLink}" alt="${p.Nombre}" onerror="this.src='assets/img/placeholder.jpg'">
      <div class="detalle-body">
        <h1>${p.Nombre}</h1>
        <p class="precio"><strong>Precio:</strong> ${p.Precio}</p>
        <p class="descripcion">${p["Descripción Larga"]}</p>
        <div class="detalle-actions">
          <a id="btnAdd" class="btnAgregar">Añadir al carrito</a>
          <a href="index.html" class="btnAgregar">← Volver</a>
        </div>
      </div>
    </article>

    <!--estrellas-->

    <div id="estrellas">
      <h6 class="estrellasTitulo">Puntuación:</h6>
      <div id="puntuacion" class="rating">${renderEstrellas(p.Puntuacion)}</div>
    </div>

    <!--Tablas-->

    <article class="producto-detalle">
      <section class="seccionIzquierda">
        <table class="TablaEsp">
          <thead>
            <tr>
              <th class="tituloTablaEsp">Especificaciones</th>
            </tr>
          </thead>
          <tbody>
            ${columnasEsp}
          </tbody>
        </table>
      </section>

      <section class="seccionDerecha">
        <table class="TablaCom">
          <thead>
            <tr>
              <th class="tituloTablaCom">Usuario</th>
              <th class="tituloTablaCom">Comentario</th>
            </tr>
          </thead>
          <tbody>
            ${columnasCom}
          </tbody>
        </table>
      </section>

    </article>
  `;

  document.getElementById("btnAdd")?.addEventListener("click", () => {
    Cart.add(p,1);
    showToast(p.Nombre);
  });
})();


