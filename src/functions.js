'use strict';

function createTemplate(products) {

    let productDiv = document.getElementById('products');
    let productTemplate = document.createElement('div');
    productTemplate.className = 'col mb-5';

    productTemplate.innerHTML =

    `
        <div class="card h-100">
            <!-- Sale badge, sólo si está vendido-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Imagen de _nombre_del_producto_" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${products.name}</h5>
                    <!-- Product reviews, un div bi-star para cada estrella a pintar-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">1000.00 €</span>
                    800.00 €
                    <!-- Product details -->
                    <p>
                        _tipo_de_combustible_ - 
                        _tipo_de_cambio_
                        <br>${products.km}
                    </p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Mostrar</a></div>
            </div>
        </div>
    `;


    productDiv.appendChild(productTemplate);
}

function transformarMoneda(moneda) {

    return new Intl.NumberFormat(es-ES).format(moneda);
}