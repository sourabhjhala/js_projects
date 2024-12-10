

let [hours, minutes, seconds] = [0, 0, 0];
const Watch = document.getElementById("stopwatch");
let timer = null;

function stopWatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    Watch.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer)

    }
    timer = setInterval(() => {
        stopWatch()
    }, 1000)

}


function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    timer = clearInterval(timer)
    let [hours, minutes, seconds] = [0, 0, 0];
    Watch.innerHTML = "00:00:00";
}