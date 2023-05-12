var timer = document.querySelector(".timer");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");


var ms=0 ; s=0; m=0;
var counter;

//Start the timer
start.addEventListener("click",function(){

    if(!counter)
    {counter = setInterval(run , 10);}

    function run(){
    if(s<10){timer.textContent = "0"+m+":0"+s+":"+ms;
    }else if(m>10){
        timer.textContent =m+":"+s+":"+ms;
    }
    else{
        timer.textContent ="0"+m+":"+s+":"+ms;
    }
    ms++;
    if(ms==100){
        ms=0;s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    }
})

//stop the timer

stop.addEventListener("click",function(){
    clearInterval(counter);
    counter = false;
})


//reset the timer
reset.addEventListener("click",function(){
    clearInterval(counter);
    counter=false;
    ms=0; s=0; m=0;
    timer.textContent = "0"+m+":0"+s+":"+ms+"0";
})
