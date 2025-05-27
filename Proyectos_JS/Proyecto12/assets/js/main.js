let animals = ["Dog","Cart","Rabbit","Horse","Cow","bee","Tigger","Lion"]

// Funciones flecha o Arrow Function
const listAnimals = (array)=>{
    let div = document.getElementById('container')
    // for(let a = 0; a < array.length; a++){
    //     let p = document.createElement('p')
    //     p.innerText = array[a]
    //     div.appendChild(p)
    // }

    array.forEach((animal) => {
        let p = document.createElement('p')
        p.innerText = animal
        div.appendChild(p)
    })  
}


listAnimals(animals)