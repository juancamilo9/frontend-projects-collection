// Array multidimencional no existe en JS para eso esta losobjetos JSON
let objeto = [
    {
        "marca":"Mercedez",
        "modelos":["Clase A","Clase B","ClaseC"]
    },
    {
        "marca":"Audi",
        "modelos":["Audi 8","Audi sportsRS","Audi Pontianc"]
    },
    {
        "marca":"Reanult",
        "modelos":["Captive","Sandero","Duster"]
    },
]

let mostrar = (datos)=>{
    
    let caja= document.getElementById('concesionario')
    datos.forEach(marca => {
        caja.innerHTML += `<h1>${marca.marca}</h1>`
        caja.innerHTML += `<ul>`
        // Mostramoslos modelos
        marca.modelos.forEach(modelo =>{
            caja.innerHTML +=`<li>${modelo}</li>` 
        })
        caja.innerHTML += `</ul>`

        
    });
}

mostrar(objeto)