const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  
  const now = new Date();
  const nextYear = new Date(`January 1,${now.getFullYear() + 1} 00:00:00`);
  const diff = nextYear.getTime() - now.getTime();
  console.log(diff);

  const s = 1000;
  const m = s* 60;
  const h = m * 60;
  const d = h * 24;

  const num_of_days = Math.floor(diff /d);
  const num_of_hours = Math.floor(diff/h%24);
  const num_of_minutes = Math.floor(diff/ m%60);
  const num_of_seconds =Math.floor(diff/ s%60);

  daysEl.innerText = (num_of_days<10)?"0"+num_of_days:num_of_days;
  hoursEl.innerText =(num_of_hours<10)?"0"+num_of_hours:num_of_hours;
  minutesEl.innerText =(num_of_minutes<10)?"0"+num_of_minutes:num_of_minutes;
  secondsEl.innerText = (num_of_seconds<10)?"0"+num_of_seconds:num_of_seconds;



}

updateCountdown();
setInterval(updateCountdown, 1000);