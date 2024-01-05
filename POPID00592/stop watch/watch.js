const timeDisplay = document.querySelector("#timer")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const restartBtn = document.querySelector("#resettBtn")

let startTime = 0;
let paused = true;
let elapsedTime = 0;
let currentTime = 0;
let interValid;
let secs = 0;
let mins = 0;
let hrs = 0;


startBtn.addEventListener("click", () =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        interValid = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () =>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interValid);
    }
});
restartBtn.addEventListener("click", () =>{
    paused = true;
    clearInterval(interValid);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    secs = 0;
    mins = 0;
    hrs = 0;
    timeDisplay.textContent = "00:00:00"
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    };
};