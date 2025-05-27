// Elementos del DOM
let inventarioDom = document.querySelector('.main__inventario')
let cajas = document.querySelectorAll('.inventario__caja')
let estanteriaDom = document.querySelectorAll('.almacen__estanteria')

// identificador personalizado para cada elemento movible cajasca
cajas.forEach((caja,i)=>{
    caja.setAttribute('id','caja'+i)
     
    // Cada elemento se puede mover
    caja.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('id', e.target.id)
    })
})

// Establecercada estanteria como un lugar para soltar una caja
estanteriaDom.forEach((estanteria,i)=>{
    estanteria.addEventListener('dragover',function(e){
        e.preventDefault()
    })

    estanteria.addEventListener('drop',function(e){
        e.preventDefault()
        let cajaId = e.dataTransfer.getData('id')
        
        if(cajaId && cajaId !==""){
            let caja = document.querySelector('#'+cajaId)
            if(this.lastChild == null){
                e.target.appendChild(caja)
                this.style.boxShadow = "none"
            }else{
                alert('Esta estanteria está ocupada')
            }

            estanteriaDom.forEach(estanteria =>{
                if(this.lastChild == null){
                    estanteria.style.boxShadow = "0px 0px 8px gray inset"
                }
            })

            console.log(inventarioDom.innerHTML.trim())

            if(inventarioDom.innerHTML.trim() == ""){
                alert('Todas las cajas fueron guardadas')
            }
            
        }
    })
})
