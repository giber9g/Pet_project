const Sec = document.getElementById("sec")

let startTime, updatedTime, difference;
let tInterval;
let running = false;
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}
function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }

}
function resetTimer() {
    if (!running) {
        clearInterval(tInterval);
        running = false;
        resetTimer = Sec.innerHTML = "00:00:00";
    }
}
getShowTime = () => {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10); // Get only two digits of milliseconds

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    Sec.innerHTML = minutes + ":" + seconds + ":" + milliseconds
}