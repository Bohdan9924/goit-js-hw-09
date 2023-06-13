const bodyEl = document.querySelector("body");
const startButtonEl = document.querySelector("#startButton");
const stopButtonEl = document.querySelector("#stopButton");

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

startButtonEl.addEventListener("click", ()=>{
    intervalId = setInterval(()=>{
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startButtonEl.disabled = true;
});

stopButtonEl.addEventListener("click", () => {
    clearInterval(intervalId);
    bodyEl.style.backgroundColor = `#FFFFFF`;
    startButtonEl.disabled = false; 
});