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
                        <a href="restaurantes.html" class="iconos">
        arrow_back
    </a>
<section class="portada">

                <img src="${e.avatar.src}" class="imagen">
</section>

</header>
<section class="informacion">
    <div><br>
        <h2>${e.name}</h2>
        <p>${e.location} </p>
    <p>${e.description}</p>
    </div>
    <div class="valor">
    ${`<span class="iconos verde f13">euro_symbol</span>`.repeat(e.price)}
    ${`<span class="iconos f13">euro_symbol</span>`.repeat(3 - e.price)}
    </div>
    <div class="calificacion">
        ${e.rating}
    </div>
    
</section>
<main class="index">
<nav class="categorias">
            <img src="${e.avatar.src}" class="imagen-resto">
            <img src="${e.avatar.src}" class="imagen-resto">
            <img src="${e.avatar.src}" class="imagen-resto">
            <img src="${e.avatar.src}" class="imagen-resto">
        </nav>

</main>
<div class="menu">
<nav class="categorias1">
            <button class="btn_categoria1">

            </button>
            <button class="btn_categoria1">

            </button>
            <button class="btn_categoria1">

            </button>
            <button class="btn_categoria1">

            </button>
            <button class="btn_categoria1">

            </button>
        </nav>
        <div class="container">
        <div class="item">
            <div>Chocolate tart</div>
            <div>$6.30</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Cheesecake</div>
            <div>$5.68</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Strawberry cake</div>
            <div>$8.49</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Strawberry cake</div>
            <div>$8.49</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Strawberry cake</div>
            <div>$8.49</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Strawberry cake</div>
            <div>$8.49</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="item">
            <div>Strawberry cake</div>
            <div>$8.49</div>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99996 10.75L10.75 5.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.75 5.99996L10.75 10.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</div>
`}
    });
    })