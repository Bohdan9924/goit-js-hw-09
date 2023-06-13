import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate > new Date()) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(time) {
  return time.toString().padStart(2, '0');
}

const calendar = flatpickr(inputEl, options);

let counterInterval;

startBtn.addEventListener('click', () => {
  const userDate = calendar.selectedDates[0];
  const counter = userDate.getTime() - Date.now();
  const endTime = userDate.getTime();

  counterInterval = setInterval(() => {
    const nowTime = Date.now();
    const remainTime = endTime - nowTime;

    if (remainTime <= 0) {
      clearInterval(counterInterval);
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainTime);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
});


// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from "notiflix";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];

//     if (selectedDate < new Date()) {
//       Notiflix.Report.warning(
//         "Please choose a date in the future",
//         "",
//         "OK"
//       );
//     } else {
//       const startButton = document.querySelector('[data-start]');
//       startButton.disabled = false;

//       startButton.addEventListener('click', () => {
//         startButton.disabled = true;

//         const countdown = setInterval(() => {
//           const currentDate = new Date();
//           const remainingTime = selectedDate.getTime() - currentDate.getTime();

//           if (remainingTime <= 0) {
//             clearInterval(countdown);
//             updateTimerDisplay(0, 0, 0, 0);
//             Notiflix.Notify.failure('Please choose a date in the future');
//             return;
//           }

//           const { days, hours, minutes, seconds } = convertMs(remainingTime);
//           updateTimerDisplay(days, hours, minutes, seconds);
//         }, 1000);
//       });
//     }
//   },
// };

// flatpickr("#datetime-picker", options);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function updateTimerDisplay(days, hours, minutes, seconds) {
//   const daysElement = document.querySelector('[data-days]');
//   const hoursElement = document.querySelector('[data-hours]');
//   const minutesElement = document.querySelector('[data-minutes]');
//   const secondsElement = document.querySelector('[data-seconds]');

//   daysElement.textContent = addLeadingZero(days);
//   hoursElement.textContent = addLeadingZero(hours);
//   minutesElement.textContent = addLeadingZero(minutes);
//   secondsElement.textContent = addLeadingZero(seconds);
// }
