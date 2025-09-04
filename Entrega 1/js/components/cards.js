function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg + " ha sido ingresado al carrito";
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function renderCards(lista, containerId="productosContainer") {
    const contenedor = document.getElementById(containerId);

    if(!contenedor) {
        console.warn("No existe el contenedor");
        return;
    }

    contenedor.innerHTML = "";

    lista.forEach((p, index) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.textDecoration = "none";
        card.style.color = "inherit";  

        card.innerHTML = `
            <div class="linkCard">
                <img class="cardImg" src="${p.imgLink}"
                    class="card-img-top" alt="${p.Nombre}">
                <div class="card-body cardContainer">
                    <h5 class="card-title">${p.Nombre}</h5>
                    <p class="card-text">${p["Descripción Corta"]}</p>
                    <p class="recio"><strong>Precio:</strong> ${p.Precio}</p>
                </div>
            </div>
            <div class="cardFooter">
                <a href="#" class="btnAgregar">Añadir al carrito</a>
            </div>
        `;

        card.querySelectorAll(".linkCard").forEach(e => {
            e.addEventListener("click", () => {
            window.location.href = `producto.html?codigo=${p.Código}`;
            });
        });
    
        card.querySelector(".btnAgregar").addEventListener("click", (e)=> {
            e.preventDefault();
            e.stopPropagation();
            Cart.add(p,1);
            showToast(p.Nombre)
        })


        contenedor.appendChild(card);
        
    });
}