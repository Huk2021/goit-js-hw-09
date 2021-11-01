import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    spanDays: document.querySelector('[data-days]'),
    spanHours: document.querySelector('[data-hours]'),
    spanMinutes: document.querySelector('[data-minutes]'),
    spanSeconds: document.querySelector('[data-seconds]'),
}

let selectedDate = null;
let currentDate = null;

refs.startBtn.setAttribute('disabled', true);

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      currentDate = new Date();

    if (selectedDate.getTime() < currentDate.getTime()) {
        refs.startBtn.setAttribute('disabled', true);
        alert('Please choose a date in the future');
        return;
    }
      
      refs.startBtn.removeAttribute('disabled');
      
  },
});

