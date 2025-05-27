let sum = 0

// Esta función acepta muchisimos parametros
function sumNumber( ...numbers){
    
    let p = document.getElementById('numbers')
    let title = document.getElementById('result')
    for( let i = 0; i < numbers.length; i++){
        sum+=numbers[i]
    }
    title.innerText =`La suma de los números es: ${sum}`
    p.innerText = `Los números sumados son: ${numbers}` 
}


sumNumber(1,2,3,6,8,4,1,3,5)