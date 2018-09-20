'use strict';

const makeGold = () => {
  const title = document.querySelector('h1');
  title.style.color = '#deaf17';
  title.classList = 'extra';
};

// Regular
console.log('well I guess Im trying to be');

// Interpolated
console.log('%s about it', 'nonchalant');

// Styled
console.log('%c and Im going to extremes', 'font-style: italic; font-weight:bold');

// warning!
console.warn('to prove Im fine without you');

// Error :|
console.error('but in reality Im slowly losing my mind');

// Info
console.log('underneath the disguise of a smile');

// Testing
console.assert('us' === 'love', 'gradually Im dying inside');

// clearing
// console.clear(); // commented out as to not interrupt the song lyrics! :)

// Viewing DOM Elements
const para = document.querySelector('p');
console.log(para);
console.dir(para);

// Grouping together
const lyrics = [{ who: 'friends', what:'ask me how I feel'}, {who: 'I', what: 'lie convincingly'}];
lyrics.forEach(x => {
  console.groupCollapsed(`${x.who} ${x.what}`);
  console.log(':(');
  console.groupEnd(`${x.who} ${x.what}`);
});

// counting
console.count('cause');
console.count('I');
console.count('dont');
console.count('want');
console.count('to');
console.count('reveal');

// timing
console.time('the fact that Im suffering');
fetch('https://api.github.com/users/alishaantoinette')
  .then(res => res.json())
  .then(data => {
    console.timeEnd('the fact that Im suffering');
    console.log(data.hireable);
  });