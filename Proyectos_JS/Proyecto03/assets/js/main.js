const limiteVelocidad = 60
let velocidad = 13

p = document.getElementById("texto")

if(velocidad > limiteVelocidad)
    p.innerText = "Debes bajar la velocidad"
else
    p.innerText = "Todo va bien"