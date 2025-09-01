// js/components/productoDetalle.js
(() => {
  const cont = document.getElementById("detalleProducto");

  // 1) código desde la URL (JM001, etc.)
  const params = new URLSearchParams(location.search);
  const codigo = (params.get("codigo") || "").trim().toUpperCase();

  // 2) buscar producto (acepta Código o Codigo)
  const p = window.productos.find(x =>
    String(x.Código ?? x.Codigo).toUpperCase() === codigo
  );

  // 3) render mínimo
  if (!p) {
    cont.innerHTML = `<p>Producto no encontrado.</p>`;
    return;
  }

  const code = String(p.Código ?? p.Codigo).toLowerCase();

  cont.innerHTML = `
    <article class="producto-detalle">
      <img class="detalle-img" src="${p.imgLink}" alt="${p.Nombre}" onerror="this.src='assets/img/placeholder.jpg'">
      <div class="detalle-body">
        <h1>${p.Nombre}</h1>
        <p class="precio"><strong>Precio:</strong> ${p.Precio}</p>
        <p class="descripcion">${p.Descripción}</p>
        <div class="detalle-actions">
          <a id="btnAdd" class="btnAgregar">Añadir al carrito</a>
          <a href="index.html" class="btnAgregar">← Volver</a>
        </div>
      </div>
    </article>
  `;

  // 4) acción simple
  document.getElementById("btnAdd")?.addEventListener("click", () => {
    alert(`Agregado: ${p.Nombre}`);
  });
})();
