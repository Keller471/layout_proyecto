let body = document.getElementById("resto");



fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            body.innerHTML += 
                `
        <article class="oferta">
            <div class="img">
                <img src="img/res1.jpg">
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                <span>${e.location}</span>
                <span>${e.open} - ${e.close}</span>
                <div class="stats">
                    ${e.rating}
                </div>
            </div>
        </article>
   `


        });
    })