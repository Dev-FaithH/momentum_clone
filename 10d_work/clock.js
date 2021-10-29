const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const date = new Date();
    const xMasDate = new Date("Dec 25,2021, 00:00:00");
    const countDDay = (xMasDate-date) / 1000;
    const secondsResult = Math.floor(countDDay % (60));
    const minutesResult = Math.floor((countDDay % (60*60)) / (60));
    const hoursResult = Math.floor((countDDay % (60*60*24)) / (60*60));
    const dayResult = Math.floor(countDDay / (60*60*24));
    clock.innerText = `${dayResult}d ${hoursResult}h ${minutesResult}m ${secondsResult}s`
}

getClock();
setInterval(getClock, 1000);