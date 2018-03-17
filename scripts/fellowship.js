console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
const lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
const body = document.querySelector('body');

// #1
// create a section tag with an id of middle-earth
// add each land as an article tag (add them one by one in a loop)
// inside each article tag include an h1 with the name of the land
// each article should also have a class equal to its name ('The Shire' element should have a class of 'The Shire')
// append middle-earth to your document body

(function makeMiddleEarth() {
    const middleEarth = document.createElement('section');
    middleEarth.setAttribute('id', 'middle-earth');
    for (let i = 0; i < lands.length; i++) {
      let newArticle = document.createElement('article');
      middleEarth.appendChild(newArticle);
      let newHeading = document.createElement('h1');
      newArticle.appendChild(newHeading);
      newHeading.innerHTML = lands[i];
      newArticle.className = lands[i];
    }
    document.body.appendChild(middleEarth);
})();

// #2
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit

(function makeHobbits() {
  const myHobbitList = document.createElement('ul');
  for(let i = 0; i < hobbits.length; i++) {
    let myHobbits = document.createElement('li');
    myHobbitList.appendChild(myHobbits);
    myHobbits.innerHTML = hobbits[i];
    myHobbits.className = 'hobbit';
  }
  let theShire = document.getElementsByClassName('The Shire')[0];
  theShire.appendChild(myHobbitList);
})();

// #3
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add the ring as a child of Frodo

(function keepItSecretKeepItSafe() {
  const theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  const Frodo = document.getElementsByClassName('hobbit')[0];
  Frodo.appendChild(theRing);
})();
