window.addEventListener("load",()=>{
    let number = document.querySelector(".load__number");
    let text = document.querySelector(".load__complete");
    let btn = document.querySelector(".load__btn")
    let background = document.querySelector(".main__background");
  
    let percent = 1;
    let blur = 20;
  
    btn.addEventListener("click",(e)=>{
      
      btn.style.display = "None";
      let time = setInterval(()=>{
        percent++;
        blur -= 20/100  
        if(percent >= 100){
          clearInterval(time);
          text.style.display = "block";
          
        }else{
          number.innerHTML = percent+"%";
          background.style.filter = "blur("+blur+"px)";
        }
      }, 20)
    })
    })