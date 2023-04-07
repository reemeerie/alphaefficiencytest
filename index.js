const accordion = document.getElementsByClassName('question')
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });   
}

let hours = 16
let minutes = 29
let seconds = 27

loadSecond()

function loadSecond() {
    let txtSeconds

    if (seconds < 0) {
        seconds = 59
    }

    if (seconds < 10) {
        txtSeconds = `0${seconds}`
    } else {
        txtSeconds = seconds
    }
    document.getElementById('seconds').innerHTML = txtSeconds
    seconds --;

    loadMinutes(seconds)
}

function loadMinutes(seconds){
    let txtMinutes

    if(seconds == -1 && minutes !== 0){
        setTimeout(()=>{
            minutes--;
        }, 500)
    } else if(seconds == -1 && minutes == 0){
        setTimeout(()=>{
            minutes = 59;
        }, 500)
    }

    if(minutes < 10){
        txtMinutes = `0${minutes}`
    }else{
        txtMinutes = minutes
    }
    document.getElementById('minutes').innerHTML = txtMinutes
    loadHours(seconds, minutes)
}

function loadHours(seconds, minutes){
    let txtHours

    if(seconds == -1 && minutes == 0 && hours !== 0){
        setTimeout(()=>{
            hours--
        }, 500)
    } else if(seconds == -1 && minutes == 0 && hours == 0){
        setTimeout(()=>{
            hours = 2
        }, 500)
    }

    if(hours < 10){
        txtHours = `0${hours}`
    }else{
        txtHours = hours
    }
    document.getElementById('hours').innerHTML = txtHours
}

setInterval(loadSecond, 1000)

document.querySelector(".barsMenu").addEventListener("click", animateBars)

let bar1 = document.querySelector(".bar1")
let bar2 = document.querySelector(".bar2")
let bar3 = document.querySelector(".bar3")
let menuNav = document.querySelector(".menuNav")

function animateBars(){
    bar1.classList.toggle("activebar1")
    bar2.classList.toggle("activebar2")
    bar3.classList.toggle("activebar3")
    menuNav.classList.toggle("activemenuNav")
}