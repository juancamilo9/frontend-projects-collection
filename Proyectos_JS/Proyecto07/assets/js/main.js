let anhoNacimiento = 1900
let anhoActual = new Date().getFullYear

do{
  anhoNacimiento = parseInt(prompt("¿En que año naciste?", 0))
}while (anhoNacimiento < (anhoNacimiento - 150) || anhoNacimiento>anhoActual)
  
let edad = anhoActual-anhoNacimiento

alert(`Tu edad actual es ${edad}`)