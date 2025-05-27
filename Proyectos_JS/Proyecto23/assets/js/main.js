
    let input = document.querySelector('.main__input')
    let mainDom = document.querySelector('.layout__main')
    let checkInput = document.querySelector('.icons__check')
    let xmarkInput = document.querySelector('.icons__xmark')

    input.addEventListener('focus',()=>{
        mainDom.classList.add('focus')
    })

    input.addEventListener('blur',()=>{
        mainDom.classList.remove('focus')
    })

    input.addEventListener('keydown',()=>{
        validate()
    })

    let validate = ()=>{
        // validar email
        let email = input.value
        // Expresion regular para email
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() != ""){
            let test = pattern.test(email)
            setClass(test)
        }
    }


    let setClass = (test)=>{
        if(test){
            checkInput.classList.add('show')
            xmarkInput.classList.remove('show')
        }else{
            checkInput.classList.remove('show')
            xmarkInput.classList.add('show')
        }
        
    }

