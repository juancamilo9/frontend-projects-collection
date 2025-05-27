let tableContainer = document.querySelector(".container");

let result = 0;

for (let i = 1; i <= 10; i++) {
  tableContainer.innerHTML += `
    <div class="container__item">
    <h2 class= "tables__title">Tabla del ${i}</h2>
    
    <ul class="tables__list" data-id=${i}>

    </ul> 
    </div>
  `;
  for (let j = 1; j <= 10; j++) {
    // Mostrar resultado
    result = i*j
    
    let list = document.querySelectorAll(".tables__list");
    list.forEach(list=>{
      let id = list.getAttribute("data-id");
      if (id == i){
        list.innerHTML += `<li class="list__item">${i} X ${j} = ${result}</li>`
      }
    })
  }
  
}


