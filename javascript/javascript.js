const hours = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
let isRun = true;
let hourValue = 12;
let minuteValue = 0;
let secondValue = 0;
let ampmValue = "AM";

setInterval(() => {
  if (isRun) {
    secondValue++;
    if (secondValue > 59) {
      minuteValue++;
      secondValue = 0;
      if (minuteValue > 59) {
        hourValue++;
        minuteValue = 0;
        if (hourValue > 12) {
          hourValue = 1;
          ampmValue = ampmValue === "AM" ? "PM" : "AM";
        }
      }
    }
    hours.innerHTML = hourValue.toString().padStart(2, "0");
    min.innerHTML = minuteValue.toString().padStart(2, "0");
    sec.innerHTML = secondValue.toString().padStart(2, "0");
    ampm.innerHTML = ampmValue;
  }
}, 1000);
