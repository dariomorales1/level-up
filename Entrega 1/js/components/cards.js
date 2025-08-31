

function renderCards(lista, containerId="productosContainer") {
    const contenedor = document.getElementById(containerId);

    if(!contenedor) {
        console.warn("No existe el contenedor");
        return;
    }

    contenedor.innerHTML = "";

    lista.forEach((p,index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        
            <div class="card">
                <img class="cardImg" src="${p.imgLink}"
                    class="card-img-top" alt="${p.Nombre}">
                <div class="card-body cardContainer">
                    <h5 class="card-title">${p.Nombre}</h5>
                    <p class="card-text">${p.Descripción}</p>
                    <p><strong>Precio:</strong> ${p.Precio}</p>
                    <a href="#" class="btnAgregar">Añadir al carrito</a>
                </div>
            </div>
        `;

        card.querySelector(".btnAgregar").addEventListener("click", ()=> {
            alert(`Agregado al carrito. ${p.Nombre}`);
        })

        contenedor.appendChild(card);
        
    });
}

