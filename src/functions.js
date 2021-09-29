'use strict';
const PHOTO_FILE = './media/photos/';
const DEFAULT_PHOTO = 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg';

function createTemplate(products) {

   
    const STARS = '<div class="bi-star-fill"></div>';

    let precio_original = transformarMoneda(products.original_price);
    let precio_descontado = transformarMoneda(products.discount_price);

    let productDiv = document.getElementById('products');
    let productTemplate = document.createElement('div');
    productTemplate.className = 'col mb-5';

    productTemplate.innerHTML =

    `
        <div class="card h-100">
            <!-- Sale badge, sólo si está vendido-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${products.sale ? 'Sale': ''}</div>
            <!-- Product image-->
            <img class="card-img-top" src="${getImg(products.img)}" alt="Imagen de _nombre_del_producto_" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${products.name}</h5>
                    <!-- Product reviews, un div bi-star para cada estrella a pintar-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        ${STARS.repeat(products.stars)}                        
                    </div>
                    <!-- Product price-->
                    ${products.discount_price ? '<span class="text-muted text-decoration-line-through">'+precio_descontado+'</span>' : ''}
                    ${precio_original}
                    <!-- Product details -->
                    <p>
                    ${getFuel(products.fuel)} - 
                        ${products.manual_gear ? 'Manual' : 'Automático'}
                        <br>${products.km.toLocaleString('de-DE')} km
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

    //.toLocaleString().toFixed()
    const TRANSFORMAR = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
     });

    return TRANSFORMAR.format(moneda);
}

function getImg(img) {
  
    return img ? PHOTO_FILE + img : DEFAULT_PHOTO;
}

function getFuel(fuel) {

    return typesOfFuel.find((element) => element.id === fuel) ? typesOfFuel.find((element) => element.id === fuel).fuel : 'Desconocido';
}

