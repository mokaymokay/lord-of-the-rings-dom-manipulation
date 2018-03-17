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
  for (let i = 0; i < hobbits.length; i++) {
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

// #4
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell

const rivendell = document.getElementsByClassName('Rivendell')[0];

(function makeBuddies() {
  const asideTag = document.createElement('aside');
  const myBuddiesList = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    let myBuddies = document.createElement('li');
    myBuddiesList.appendChild(myBuddies);
    myBuddies.innerHTML = buddies[i];
    myBuddies.setAttribute('id', buddies[i].toLowerCase());
    myBuddies.setAttribute('class', 'buddy');
  }
  asideTag.appendChild(myBuddiesList);
  rivendell.appendChild(asideTag);
})();

// #5
// change the 'Strider' textnode to 'Aragorn'

(function beautifulStranger() {
  document.getElementById('strider').innerHTML = "Aragorn";
})();

// #7
// assemble the hobbits and move them to Rivendell

const myHobbits = document.getElementsByClassName('hobbit');

(function leaveTheShire() {
  let newHobbitLocation = document.createElement('ul');
  rivendell.appendChild(newHobbitLocation);
  for (let i = 0; i < myHobbits.length; i++) {
    newHobbitLocation.appendChild(myHobbits[0]);
  }
})();

// #8
// create a new div with an id of 'the-fellowship'
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party
// append the fellowship div to rivendell

const myBuddies = document.getElementsByClassName('buddy');

(function forgeTheFellowShip() {
  let fellowship = document.createElement('div');
  fellowship.setAttribute('id', 'the-fellowship');
  rivendell.appendChild(fellowship);
  for (var i = 0; i < myHobbits.length; i++) {
    fellowship.appendChild(myHobbits[0]);
    alert(`${myHobbits[0].innerText} has joined your party.`)
  }
  for (var i = 0; i < myBuddies.length; i++) {
    fellowship.appendChild(myBuddies[0]);
    alert(`${myBuddies[0].innerText} has joined your party.`)
  }
})();
