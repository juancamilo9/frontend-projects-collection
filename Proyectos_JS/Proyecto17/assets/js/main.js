document.getElementById("btn_click").addEventListener('click', ()=>{
    let card = document.getElementById('layout__card')
    card.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.5)"
    
    // Header
    let header = document.getElementById('card__header')
    header.style.backgroundColor = "#1B62CA"

    // btn
    let btn = document.getElementById("btn_click")
    btn.style.background = "#FFF"
    btn.style.color = "#0D6EFD"
    
})