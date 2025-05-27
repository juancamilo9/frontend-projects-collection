let marca = "Mercedez",
    velocidad = 180 
    stock = 2
    modelo =["2000","2023","2024"]


texto = `Vehiculo de marca ${marca}, tiene una velocidad maxima de ${velocidad} contamos con los siguientes modelos:`

modelo.forEach(modelo => {
    texto = texto + `\n -${modelo}`
});

let parrafo = document.getElementById('texto');
parrafo.innerText = texto;