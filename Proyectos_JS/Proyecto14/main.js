const sueldos = [1220,500,400,600,900,200,3000]

let sueldo = parseInt(prompt("Por favor indique el sueldo devengado",0))
console.log(typeof sueldo)

const recorrerSueldo = (sueldo,sueldos)=>{
    let busqueda = sueldos.filter((valor) => valor >= sueldo)
    // Ordenamos los sueldos filtrados
    let ordenar = busqueda.sort((a,b)=> a-b)
    console.log(`Èxisten varios slarios mayores al tuyo, y son los siguientes: ${ordenar}`)
}

recorrerSueldo(sueldo,sueldos)