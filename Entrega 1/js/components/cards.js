function renderCards(lista, containerId="productosContainer") {
    const contenedor = document.getElementById(containerId);

    if(!contenedor) {
        console.warn("No existe el contenedor");
        return;
    }

    contenedor.innerHTML = "";

    lista.forEach((p, index) => {

        const card = document.createElement("a");
        card.href = `producto.html?codigo=${p.Código}`
        card.classList.add("card");
        card.style.textDecoration = "none";
        card.style.color = "inherit";  

        card.innerHTML = `
        
            <img class="cardImg" src="${p.imgLink}"
                class="card-img-top" alt="${p.Nombre}">
            <div class="card-body cardContainer">
                <h5 class="card-title">${p.Nombre}</h5>
                <p class="card-text">${p["Descripción Corta"]}</p>
                <p><strong>Precio:</strong> ${p.Precio}</p>
                <a href="#" class="btnAgregar">Añadir al carrito</a>
            </div>
        `;

    
        card.querySelector(".btnAgregar").addEventListener("click", (e)=> {
            alert(`Agregado al carrito. ${p.Nombre}`);
            e.preventDefault();
            e.stopPropagation();
            Cart.add(p,1)
        })


        contenedor.appendChild(card);
        
    });
}