const dayelem = document.getElementById('days');
const hourelem = document.getElementById('hours');
const minuteelem = document.getElementById('minutes');
const secondelem = document.getElementById('seconds');

const targetDateInput = document.getElementById('targetDateInput');


const countdown = () => {
    const targetDate = new Date(targetDateInput.value);
    const now = new Date();
    
    if (targetDate < now) {
        daysElem.innerHTML = "0";
        hoursElem.innerHTML = "0";
        minutesElem.innerHTML = "0";
        secondsElem.innerHTML = "0";
        return;
    }
    const today = new Date().getTime();
    const gap = targetDate - today;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap %  day) /hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    dayelem.innerHTML = textDay;
    hourelem.innerHTML = textHour;
    minuteelem.innerHTML = textMinute;
    secondelem.innerHTML = textSecond;
    setTimeout(countdown, 1000);
    // intervalId = setTimeout(countdown, 1000); 
}
countdown();
targetDateInput.addEventListener('change', countdown);