'use strict';

const playSound = e => {
  console.log('event', e);
  /* 
  the event being passed into this function is "KeyboardEvent"; it's an object with several properties.
  for example, when pressing the letter "a" the KeyboardEvent is {
    altKey : false
    bubbles : true
    cancelBubble : false
    cancelable : true
    charCode : 0
    code : "KeyA"
    composed : true
    ctrlKey : false
    currentTarget : null
    defaultPrevented : false
    detail : 0
    eventPhase : 0
    isComposing : false
    isTrusted : true
    key : "a"
    keyCode : 65
    location : 0
    metaKey : false
    path : (4) [body, html, document, Window]
    repeat : false
    returnValue : true
    shiftKey : false
    sourceCapabilities : InputDeviceCapabilities {firesTouchEvents: false}
    srcElement : body
    target : body
    timeStamp : 2513.3000000059837
    type : "keydown"
    view : Window {postMessage : ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    which : 65
    __proto__ : KeyboardEvent
  }
  */

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // find the first audio element on the page that has the same data-key attribute of the keycode property on the passed in KeyboardEvent object. 
  console.log('audio:', audio);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // find the first div element on the page that has the same data-key attribute of the keycode property on the passed in KeyboardEvent object. 
  console.log('key:', key);

  if (!audio) return;
  // if there is no audio element on the page that corresponds to the pressed key, exit the function without doing anything

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