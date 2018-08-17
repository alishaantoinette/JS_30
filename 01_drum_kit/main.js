'use strict';

const playSound = e => {
  // console.log('PS event', e);
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
  // console.log('audio:', audio);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // find the first div element on the page that has the same data-key attribute of the keycode property on the passed in KeyboardEvent object. 
  // console.log('key:', key);

  if (!audio) return;
  // if there is no audio element on the page that corresponds to the pressed key, exit the function without doing anything

  audio.currentTime = 0;
  // rewind the audio clip each time the audio variable is defined; i.e., each time a letter with an audio element is pressed down

  audio.play();
  // if there is a corresponding audio element, play it

  key.classList.add('playing');
  // add the class of "playing" to the element defined as the key variable above
};

const removeTransition = e => {
  // console.log('RT event:', e);
  /* 
  The event being passed in is a TransitionEvent. Due to the CSS styling, there are 6 transition events (property changes) happening for each key press: box shadow (1), transition (1) and border color (4; one for each border) are the 6 transitions taking place. An example of the TransitionEvent is: 
    {
      bubbles : true
      cancelBubble : false
      cancelable : true
      composed : false
      currentTarget : null
      defaultPrevented : false
      elapsedTime : 0.07
      eventPhase : 0
      isTrusted : true
      path : (6) [div.key.playing, div.keys, body, html, document, Window]
      propertyName : "border-left-color"
      pseudoElement : ""
      returnValue : true
      srcElement : div.key.playing
      target : div.key.playing
      timeStamp : 2589.399999997113
      type : "transitionend"
      __proto__ : TransitionEvent
    }
  */

  if(e.propertyName !== 'transform') return;
  // ignore all property names that aren't "transform"

  e.target.classList.remove('playing');
  // remove the class of "playing" from the remaining TransitionEvent (the one wiht the property name of transform)
};


const keys = document.querySelectorAll('.key');
// create a node list that contains each element on the page with the class of "key"
// console.log('keys:', keys);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// iterate over the node list and for each div element with the class of "key" add the "transitionend" event listener. 
// the TE event listener listens for when a CSS transition has ended
// once that takes place, run the removeTransition function

window.addEventListener('keydown', playSound); 
// have the window "listen" for any keyboard buttons that are pressed down. when that happens, run the playSound function.




/* 
Resources:
 - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 - https://developer.mozilla.org/en-US/docs/Web/Events
 - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
*/