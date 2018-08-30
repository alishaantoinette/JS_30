'use strict';

const panels = document.querySelectorAll('.panel'); // create a node list of all the elements with a class of "panels"
// console.log('panels:', panels);


// A - this doesn't work.
// const toggleOpen = e => { // pass in the event that triggered this function to be called
//   // console.log('event:', e); // the MouseEvent object
//   console.log('target:', e.target); // if the 2nd "p" tag within the div is clicked, the target always refers to that tag. the first time you click the first OR thrid "p" tags within the div, the target is the div. if you try clicking any "p" tag after that, the target is always that tag. therefore, the div never shrinks because the "p" tag is having the "open" class added and removed (which there is no css set up for) instead of the div. 
//   // console.log('classlist:', e.target.classList); // the classList consists of the 2 classes on the div in the html, plus "open" and "open-active"
//   e.target.classList.toggle('open'); // add or remove the "open" class to/from the element that triggered this function
// };


//  B - this doesn't work. 
// const toggleOpen = () => {
//   console.log('this:', this); // the Window object
//   this.classList.toggle('open'); // Uncaught TypeError: Cannot read property 'toggle' of undefined at HTMLDivElement.toggleOpen
// };


// C - this works
function toggleOpen() {
  console.log('this:', this); // the entire .panel div that was clicked
  this.classList.toggle('open');
}

// D - this doesn't work, it behaves the same way as A
// function toggleOpen(e) {
//   console.log('target:', e.target);
//   e.target.classList.toggle('open');
// }


const toggleActive = e => { // this runs twice for every panel div that's clicked because the top text and bottom text transition
  console.log('name:', e.propertyName);
  if(e.propertyName.includes('flex')) { // add or remove the "open-active" class to/from the element, with a property name that includes "flex", that triggered this function
    e.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // add an event listener to each element in the node list that will invoke the "toggleOpen" function when clicked
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



// Resource: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/