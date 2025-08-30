productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card m-3';
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.src = producto.imageLink || 'https://via.placeholder.com/150';
    img.className = 'card-img-top';
    img.alt = producto.Nombre;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = producto.Nombre;

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `Precio: ${producto.Precio}`;

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(cardBody);

    document.getElementById('productContainer').appendChild(card);
});