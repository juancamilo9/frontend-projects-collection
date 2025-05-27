let numero = 0
do{
  numero = parseInt(prompt("Ingresa un número  cualquiera.", 0))
}while(numero<0)

function esPar (num){
    if(num % 2 === 0)
      return `El número ${num} es un par`
    else
      return `El número ${num} es impar`
}

let resultado  = document.getElementById('resultado')
resultado.innerHTML =`<h1>${esPar(numero)}</h1>`