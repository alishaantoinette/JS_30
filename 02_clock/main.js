'use strict';

const hourHand = document.querySelector('.hour-hand'); // get the element that has the 'hour-hand' class;
const minuteHand = document.querySelector('.minute-hand'); // get the element that has the 'minute-hand' class;
const secondHand = document.querySelector('.second-hand'); // get the element that has the 'second-hand' class;

const setDate = () => {
  const now = new Date(); // get the current date

  // hours
  const hour = now.getHours(); // get the hour of the current date
  const hourDegrees = ((hour / 12) * 360) + 90; // there are 12 hours on a clock so divide the hour by 12 and multiply by 360 to get the degree that the hour hand should be at. add 90 to account for the 90 degree rotation that's set on the 'hand' class in CSS  
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; // transform the element with the 'hour-hand' class by rotating it the appropriate amount of degrees

  // minutes
  const minute = now.getMinutes(); // get the minute of the current date
  const minuteDegrees = ((minute / 60) * 360) + 90; // there are 60 minutes on a clock so divide the minutes by 60 and multiply by 360 to get the degree that the minute hand should be at. add 90 to account for the 90 degree rotation that's set on the 'hand' class in CSS
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;// transform the element with the 'minute-hand' class by rotating it the appropriate amount of degrees

  // seconds
  const second = now.getSeconds(); // get the seconds of the current date
  const secondDegrees = ((second / 60) * 360) + 90; // there are 60 seconds on a clock so divide the seconds by 60 and multiply by 360 to get the degree that the second hand should be at. add 90 to account for the 90 degree rotation that's set on the 'hand' class in CSS  
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; // transform the element with the 'second-hand' class by rotating it the appropriate amount of degrees
};

setInterval(setDate, 1000); // run the setDate function every second