'use strict';

const inputs = document.querySelectorAll('input'); // returns a node list of all the input elements on the page

const handleChange = e => { // since this function is called when a "change" or "mousemove" event occurs, the function will receive the single "event" object that called it
  const suffix = e.target.dataset.sizing || ''; // e.target.dataset will return an object of all the "data-" attributes of the particular element that was triggered by the event listener. we are then asking specifically for the value of the "sizing" property. if there is no "sizing" property, use an empty string.
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix); // select the "style" element on the document and update the selected CSS property using the (propertyName, value) syntax.  the property name is going to be a variable, as indicated by the double hyphens. e.target.name = the value of the "name" attribute on the selected element. e.target.value = the value of the "value" attribute on the selected element. For elements that have a "data-sizing" attribute, the suffix of "px" will be added to the end.
};

inputs.forEach(input => input.addEventListener('change', handleChange)); // add a "change" event listener to each input. when a change occurs, run the "handleChange" function
inputs.forEach(input => input.addEventListener('mousemove', handleChange)); // add a "mousemove" event listener to each input. when a mouse move occurs, run the "handleChange" function
// if the handleChange event is called with parens in the above code it will simply run the function when the page loads, not when the events happen