// Render inicial (ejemplo: todos los productos)
renderCards(productos, "productosContainer");

// Render inicial (destacados)
renderCards(productosDestacados, "destacadosContainer")

// Filtrado al hacer click en las categorías del nav
document.querySelectorAll(".dropdown-item[data-category]").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const categoria = e.currentTarget.dataset.category;
    const filtrados = productos.filter(p => p.Categoría === categoria);
    renderCards(filtrados);
  });
});







