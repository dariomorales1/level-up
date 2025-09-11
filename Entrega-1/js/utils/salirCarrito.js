document.getElementById("openCart")?.addEventListener("click",e=>{e.preventDefault?.();window.openDrawer?.();});
document.getElementById("cerrarCarro")?.addEventListener("click",()=>window.closeDrawer?.());
document.getElementById("left")?.addEventListener("click",()=>window.closeDrawer?.());
document.addEventListener("keydown",e=>{
  const d=document.getElementById("cartDrawer");
  if(e.key==="Escape"&&d?.classList.contains("show")) window.closeDrawer?.();
});