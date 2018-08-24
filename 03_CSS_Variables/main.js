'use strict';

const inputs = document.querySelectorAll('input'); // returns a node list of all the input elements on the page
// console.log('inputs:', inputs);

// const handleChange = () => {
//   const suffix = this.dataset.sizing || '';
//   console.log('suffix:', suffix);
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// };

function handleChange() {
  const suffix = this.dataset.sizing || ''; // this.dataset will return an object of all the "data-" attributes of the particular element that was triggered by the event listener. we are then asking specifically for the value of the "sizing" property. if there is no "sizing" property, use an empty string.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // select the "style" element on the document and update the selected CSS property using the (propertyName, value) syntax.  the property name is going to be a variable, as indicated by the double hyphens. this.name = the value of the "name" attribute on the selected element. this.value = the value of the "value" attribute on the selected element. For elements that have a "data-sizing" attribute, the suffix of "px" will be added to the end.
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange(input)));