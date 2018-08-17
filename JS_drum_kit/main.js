'use strict';

const playSound = e => {
  console.log('event', e);

  const audio = document.querySelector(`audio[data-key='${e.keycode}']`);
  // find the first element in the page that has a data-key attribute that equals the keycode of the event(keydown) keycode. 
  console.log('audio:', audio);

  const key = document.querySelector(`.key[data-key='${e.keycode}']`);
  console.log('key:', key);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

const removeTransition = e => {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 
// have the window "listen" for any keyboard buttons that are pressed down. when that happens, run the playSound function.




// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events