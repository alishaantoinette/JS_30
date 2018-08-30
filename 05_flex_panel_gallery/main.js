'use strict';

const panels = document.querySelectorAll('.panel'); // create a node list of all the elements with a class of "panels"
// console.log('panels:', panels);

// const toggleOpen = e => { // pass in the event that triggered this function to be called
//   console.log('TO target:', e.target);
//   console.log('TO classlist:', e.target.classList);
//   // e.target.classList.toggle('open'); // add or remove the "open" class to/from the element that triggered this function
// };

function toggleOpen() {
  console.log('this:', this);
  this.classList.toggle('open');
}

const toggleActive = e => { // this runs twice for every panel div that's clicked because the top text and bottom text transition
  console.log('name:', e.propertyName);
  if(e.propertyName.includes('flex')) { // add or remove the "open-active" class to/from the element, with a property name that includes "flex", that triggered this function
    e.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // add an event listener to each element in the node list that will invoke the "toggleOpen" function when clicked
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));