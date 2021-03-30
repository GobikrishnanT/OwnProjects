function update() {
    let timeNow = new Date;

    let hour = timeNow.getHours();
    let myHour = document.querySelector("#hours");
    myHour.firstChild.data = hour;

    let min = timeNow.getMinutes();
    let myMin = document.querySelector("#minutes");
    myMin.firstChild.data = min;

    let sec = timeNow.getSeconds();
    let mySec = document.querySelector("#seconds");
    mySec.firstChild.data = sec;
}
let timerId = null;

function stop() {
    clearInterval(timerId);
}
function start() {
    timerId = setInterval(() => update() , 1000);
}


