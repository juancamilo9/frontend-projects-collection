
    let input = document.querySelector('.main__input')
    let mainDom = document.querySelector('.layout__main')
    let iconsEyes = document.querySelector('.icons__eyes')


    input.addEventListener('focus',()=>{
        mainDom.classList.add('focus')
    })

    input.addEventListener('blur',()=>{
        mainDom.classList.remove('focus')
    })


    iconsEyes.addEventListener('click',()=>{

        if(input.type == "password" && input.value.trim() != ''){
            input.type = 'text'
            iconsEyes.classList.remove('fa-eye')
            iconsEyes.classList.add('fa-eye-slash')
        }else{
            input.type = 'password'
            iconsEyes.classList.add('fa-eye')
            iconsEyes.classList.remove('fa-eye-slash')   
        }
        
    })

    




