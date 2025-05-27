let boxDate= document.querySelector('.layout__date')
let boxTime= document.querySelector('.layout__time')

console.log(boxTime.value)
console.log(boxDate.value)

function setTime(){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute= date.getMinutes()
    let sec = date.getSeconds()

    day = day < 10 ? `0${day}` : day
    month = month < 10? `0${month}` : month
    minute = minute < 10? `0${minute}` : minute
    hour = hour < 10 ? `0${hour}` : hour
    sec = sec < 10 ? `0${sec}`:sec
    
    boxDate.innerHTML = `${day}/${month}/${year}`
    boxTime.innerHTML = `${hour}:${minute}:${sec}`

}


setTime()
setInterval(setTime, 1000);