let body = document.getElementById("body");

fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                body.innerHTML += 
                    ` <header class="restaurante">
                        <a href="index.html" class="iconos">
        arrow_back
    </a>
<section class="portada">

                <img src="${e.avatar.src}" class="imagen">
</section>
<section class="informacion">
    <div><br>
        <h2>${e.name}</h2>
        <p>${e.location} </p>
    </div>
    <div class="valor">
    ${`<span class="iconos verde f13">euro_symbol</span>`.repeat(e.price)}
    ${`<span class="iconos f13">euro_symbol</span>`.repeat(3 - e.price)}
    </div>
    <div class="calificacion">
        ${e.rating}
    </div>
</section>
</header>
<main class="index">
<section class="datos">
    <div class="icon">
        <span class="iconos f25 ">
            alarm_on
        </span>
        <p>
        ${e.open} - ${e.close}
        </p>
    </div>
    <div class="icon">
        <span class="iconos f25 ">
            pin_drop
        </span>
        <p>
        ${e.distance}
        </p>
    </div>
    <div class="icon">
        <span class="iconos f25 ">
            delivery_dining
        </span>
        <p>
            DELIVERY
        </p>
    </div>
</section>
<div class="descripcion-restaurante">
    <p>${e.description}</p>
</div>
</main>
`}
    });
    })