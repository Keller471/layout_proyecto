let body = document.getElementById("resto");



fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            body.innerHTML += 
                `
        <a id="${e.name}" class="rest">
        <article class="oferta">
            <div class="img">
                <img src="img/res1.jpg">
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                <span>${e.location}</span>
                <span>${e.open} - ${e.close}</span>
                    ${e.rating}
            </div>
        </article>
        </a>
   `


        });
    })