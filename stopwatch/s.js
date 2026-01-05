const display = document.getElementById("content");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (isRunning) return;

    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timer = setInterval(update, 10);
}

function stop() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(timer);
    timer = null;

    elapsedTime = Date.now() - startTime;
}

function reset() {
    clearInterval(timer);
    timer = null;

    isRunning = false;
    startTime = 0;
    elapsedTime = 0;

    display.textContent = "00:00:00:00";
}

function update() {
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
