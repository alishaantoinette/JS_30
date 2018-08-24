'use strict';

const inventors = [
  { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.born >= 1500 && inventor.born < 1600);
console.table(bornIn1500s);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('names:', inventorNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const chronologicalOrder = inventors.sort((current, next) => current.born > next.born ? 1 : -1); // 1 = leave as is. -1 = swap
console.table(chronologicalOrder);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.born), 0); // must pass in 0 as the initial value or else total will start off being "undefined"
console.log('total years:', totalYears);


// 5. Sort the inventors by years lived
const longevity = inventors.sort((current, next) => {
  const currentInventorAge = current.passed - current.born;
  const nextInventorAge = next.passed - next.born;
  return currentInventorAge > nextInventorAge ? -1 : 1;
});
console.log('longevity:', longevity);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const de = Array.from(document.querySelectorAll('.mw-category-group a')) // create an array from the node list of links that are within the element with a "mw-category-group" class
  .filter(link => link.innerText.includes('de')) // filter through that list of links returning the ones that have "de" in their inner text
  .map(street => street.innerText); // map over each link from the filter and return the street name


// ==================================================================================================================

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetically = people.sort((current, next) => {
  const currentLastName = current.split(', ')[0];
  const nextLastName = next.split(', ')[0];
  return currentLastName > nextLastName ? 1 : -1;
});
console.log('people:', alphabetically);


// ==================================================================================================================

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// 8. Reduce Exercise
// Sum up the instances of each of these
const instances = data.reduce((obj, item) => {
  !obj[item] ? obj[item] = 1 : obj[item] += 1; 
  return obj;
}, {});
console.log('instances:', instances);
