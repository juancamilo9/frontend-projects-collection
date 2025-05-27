// Cuando este toda la página cargada emprzamos a actuar
window.addEventListener("DOMContentLoaded",()=>{
    // Capturamos todas la tarjetasque contienen el nombre de la clase
    let cards = document.querySelectorAll('.layout__card')
    
    cards.forEach((card)=>{
        let button = document.createElement('button')
        let text = document.createTextNode("Eliminar tarjeta")

        // Atributos al botton
        button.classList.add('content__btn')
        // Agregamosel texto
        button.appendChild(text)
        card.children[1].appendChild(button)
    })
})