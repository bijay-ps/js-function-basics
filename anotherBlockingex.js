//setInterval(function, interval)

function displayTime() {
    let currentTime = new Date();
    // console.log('currentTime: ', currentTime);
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let timeString = `${hours}:${minutes}:${seconds}`;
    console.log(timeString);
}

const timerInterval = setInterval(displayTime,3000);  

setTimeout(function() {
    clearInterval(timerInterval);
}, 6000);


function sendEmail(msg) {
    console.log(msg);
}

let undo = true;

const timer = setTimeout(() => {
    sendEmail("Hello, how are you?");    
}, 2500); // 2.5 seconds

if(undo) {
    clearTimeout(timer)
}

