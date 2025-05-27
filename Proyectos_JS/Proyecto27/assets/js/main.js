let articleLeft = document.querySelector(".main__article--left");
let articleRight = document.querySelector(".main__article--right");

articleLeft.addEventListener("mouseenter",()=>{
  articleLeft.classList.add("active")
  articleRight.classList.add("inactive")
})

articleLeft.addEventListener("mouseleave",()=>{
    articleLeft.classList.remove("active")
    articleRight.classList.remove("inactive")
})

articleRight.addEventListener("mouseenter",()=>{
    articleLeft.classList.add("inactive")
    articleRight.classList.add("active")
  })
  
  articleRight.addEventListener("mouseleave",()=>{
      articleLeft.classList.remove("inactive")
      articleRight.classList.remove("active")
  })


