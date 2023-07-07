function getCharacters(done) {

    const results  = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}
    getCharacters(data => {
        data.results.forEach(personaje =>{

            const article = document.createRange().createContextualFragment(
                // html modificado, asi que por lo tanto no es el html original
                `
                <div class="contenido">

                    <div class="img-container">
                        <img class="personajes" src="${personaje.image}" alt="personaje">
                    </div> 

                    <span class="linea"></span>
                    
                    <div class="texts"> 
                        <h2>${personaje.name}</h2>
                        <span>${personaje.status}</span>
                    </div>
                </div>
            `);
            const main = document.querySelector("main");
            main.append(article);
        })
    });

    document.getElementById("nav").innerHTML=`
    <ul>
        <li>
            <a href="#">Elementos</a>
        </li>
        <li>
            <a href="#">Inicio</a>
        </li>
        <li>
            <a href="#">Maquetado</a>
        </li>
        
    </ul>`;   