let deadLine = new Date("oct 23, 2022 23:59:59").getTime();

const countDown = setInterval(function() {

let now= new Date().getTime();
let time = deadLine - now;
let days = Math.floor(time / (1000 * 60 * 60 *24));
let hours = Math.floor((time% (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
let minutes = Math.floor((time%(1000*60*60)) / (1000 * 60));
let seconds = Math.floor((time%(1000*60))/1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;

if (now < 0){
    clearInterval(x);
    document.getElementById("timer-content").innerHTML = "EXPIRED";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
}
},1000);