// Seleccionar elementos del HTML
let crono_sec = document.getElementById("counter_sec");
let crono_min = document.getElementById("counter_min");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

// variables para contar minutos y segundos
let min = 0;
let sec = 0;
let time = null;

// Iniciar crono
let functionStart = () => {
  if (!time) {
    time = setInterval(() => {
      // contamos segundos
      sec++;
      
      // Aumentamos los minutos
      if (sec == 60) {
        min++;
        sec = 0;
      }

      // si se supero el limite de tiempo
      if (min >= 60) {
        alert(`Se ha alcanzo el limite de tiempo de 60 minutos`);
        clearInterval(time);
      }

      // mostramos en pantalla
      crono_sec.innerText = sec < 10 ? `0${sec}` : sec;
      crono_min.innerText = min < 10 ? `0${min}` : min;
    }, 1000);
  }
};

// Detener crono
let functionStop=()=>{
    if(time){
        clearInterval(time)
    }
}

// Al presionar boton iniciar
start.addEventListener("click", () => {
  functionStart();
});

// Al presionar boton parar
stop.addEventListener("click",()=>{
    functionStop()
    time = null
})
