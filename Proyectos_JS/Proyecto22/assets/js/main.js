let input = document.querySelector('.main__input')
let text = document.querySelector('.main__text')

input.addEventListener('keydown',(e)=>{
    let search = input.value
    console.log(search)
    // Si el campo no está vacio
    if(search.trim() != "" && e.code == "Enter"){
        let exp = new RegExp(search,"gi")

        text.innerHTML = text.textContent.replace(exp,"<span class ='text__search'>$&</span>")
    }

})