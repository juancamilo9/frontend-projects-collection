let data = document.querySelector('#data')
data.innerHTML += `<h2>Anchura: ${window.innerWidth}</h2>`
data.innerHTML += `<h2> Altura: ${window.innerWidth}</h2>` 
data.innerHTML += `<h2>URL: ${window.location.href}</h2>`

// Abrir una url desde javascript

window.open("https://victorroblesweb.es/ruta", "blank")