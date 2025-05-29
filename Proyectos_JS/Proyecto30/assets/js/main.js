window.addEventListener('DOMContentLoaded', () => {
    const follows = document.querySelectorAll('.follow__number');
    let count = 0;

    follows.forEach(follow => {
        const target = parseInt(follow.getAttribute('data-target'));
       
        
        let interval = setInterval(()=>{
            let actual = parseInt(follow.innerHTML);
            count = target/300;

            if(actual >= target){
                follow.innerHTML = actual;
                clearInterval(interval)
            }else{
                follow.innerHTML = Math.ceil(count+actual)
            }
        },10)

        
        
        


    })
})