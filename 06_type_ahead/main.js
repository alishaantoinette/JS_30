'use strict';

// =============== GET DATA FROM THE ENDPOINT ===============
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cityData = [];

fetch(endpoint)
  .then(res => {
    if(!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then(data => cityData.push(...data));


// =============== HANDLE THE DATA ===============
const findMatchingCitiesAndStates = (charactersThatWereTyped, cityData) =>
  cityData.filter(cityStat => {
    const regexp = new RegExp(charactersThatWereTyped, 'gi');
    return cityStat.city.match(regexp) || cityStat.state.match(regexp);
  });

const showMatchingCitiesAndStates = () => {
  const matchesArray = findMatchingCitiesAndStates(event.target.value, cityData); 
  const matchesListItems = matchesArray.map( match => `
    <li>
      <span class='location'>${match.city}, ${match.state}</span>
      <span class='population'>${match.population}</span>
    </li>
    `).join('');
  matchingCitiesAndStates.innerHTML = matchesListItems;
};


// =============== DOCUMENT SELECTORS ===============
const charactersBeingTyped = document.querySelector('.search'); 
const matchingCitiesAndStates = document.querySelector('.suggestions'); 

charactersBeingTyped.addEventListener('keyup', showMatchingCitiesAndStates); 