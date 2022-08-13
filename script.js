let adjectives = ['gross', 'awesome', 'joyful', 'sympathetic', 'arrogant'];
let nouns = ['boyfriend', 'baby', 'chameleon', 'turtle', 'grandmother'];
let verbs = ['running', 'playing', 'spinning around', 'sobbing', 'giggling'];
let adverbs = ['willingly', 'wildly', 'constantly', 'stupidly', 'lazily']

let random = [];
let counter = 1;

while (counter < 5) {
    random.push(Math.floor(Math.random() * 5));
    counter++;
}

const madLibGenerator = (adjective, noun, verb, adverb) => 
    'My ' + adjective + ' ' + noun + ' is ' + verb + ' ' + adverb + '.';

<<<<<<< HEAD
let buttonElement = document.getElementByTagName('button');
=======
let buttonElement = document.getElementByClassName('button');
>>>>>>> b52e0a2946bb8a1bb0eac4078025e7d7689fc31b
let messageToDisplay = document.querySelector('p');
buttonElement.onclick = () =>  messageToDisplay.innerText =
       madLibGenerator(adjectives[random[0]], nouns[random[1]], verbs[random[2]], adverbs[random[3]]);
