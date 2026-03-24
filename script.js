import { Temporal } from 'https://cdn.jsdelivr.net/npm/@js-temporal/polyfill/+esm';

const today = Temporal.Now.plainDateISO();
const start = Temporal.PlainDate.from('2026-03-23');

const days = Temporal.PlainDate.from(start).until(
  Temporal.PlainDate.from(today),
  {
    largestUnit: 'days',
  },
).days;

let num = 0;
const img = document.querySelector('.img-container .car-img');

if (days % 2 == 0) {
  img.src = 'Assets/RenoMojGotov.png';
} else img.src = 'Assets/FireCarThreGotovo.png';

setInterval(() => {
  if (days % 2 == 0) {
    if (num % 2 == 0) {
      img.src = 'Assets/RenoMojGotov.png';
    } else img.src = 'Assets/RenaultTatinGotov.png';
  } else {
    if (num % 2 == 0) {
      img.src = 'Assets/FireCarTwoGotov.png';
    } else {
      img.src = 'Assets/FireCarThreGotovo.png';
    }
  }
  num++;
}, 2000);
