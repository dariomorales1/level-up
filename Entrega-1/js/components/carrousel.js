document.getElementById('carrousel').innerHTML = `
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/img/banner/banner1.jpg" class="d-block w-100" alt="Banner Ryzen">
            </div>
            <div class="carousel-item">
                <img src="assets/img/banner/banner2.jpg" class="d-block w-100" alt="Banner Aorus">
            </div>
            <div class="carousel-item">
                <img src="assets/img/banner/banner3.jpg" class="d-block w-100" alt="Banner Samsung">
            </div>
            <div class="carousel-item">
                <img src="assets/img/banner/banner4.png" class="d-block w-100" alt="Banner AMD">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`;