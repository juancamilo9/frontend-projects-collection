let yellowStar = document.querySelector(".main__star--yellow");
let grayStar = document.querySelector(".main__star--gray");

grayStar.addEventListener("click",()=>{
    yellowStar.classList.add("visible")
    grayStar.classList.add("yellow__color")

})



yellowStar.addEventListener("click",()=>{
    yellowStar.classList.remove("visible")
    grayStar.classList.remove("yellow__color")
})