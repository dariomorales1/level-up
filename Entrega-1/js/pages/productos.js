renderCards(productos, "productosContainer");

renderCards(productosDestacados, "destacadosContainer")

document.querySelectorAll(".dropdown-item[data-category]").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const categoria = e.currentTarget.dataset.category;
    const filtrados = productos.filter(p => p.Categoría === categoria);
    renderCards(filtrados);
  });
});



