const drawer   = document.getElementById("cartDrawer");
const btnOpen  = document.getElementById("openCart");
const btnClose = document.getElementById("cerrarCarro");
const overlay  = document.getElementById("left");

function openDrawer(){
  drawer.classList.add("show");
  renderCart();
  document.body.style.overflow = "hidden"; // evita scroll del body
}
function closeDrawer(){
  drawer.classList.remove("show");
  document.body.style.overflow = "";       // restaura scroll
}

// abrir
btnOpen?.addEventListener("click", (e) => {
  e.preventDefault?.();
  openDrawer();
});

document.getElementById("left")?.addEventListener("click", () => {
    drawer.classList.toggle("show");
    renderCart();
})


// cerrar (botón + overlay + ESC)
btnClose?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("show")) closeDrawer();
});
