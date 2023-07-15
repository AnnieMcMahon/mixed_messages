// Word lists
const adjectives = ['gross', 'awesome', 'joyful', 'sympathetic', 'arrogant'];
const nouns = ['boyfriend', 'baby', 'chameleon', 'turtle', 'grandmother'];
const verbs = ['running', 'playing', 'spinning around', 'sobbing', 'giggling'];
const adverbs = ['willingly', 'wildly', 'constantly', 'stupidly', 'lazily']
let random = [];

// Elements
const randomButton = document.getElementById('random');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const sentence = document.getElementById('sentence');
const adjective = document.getElementById('adjective-choice');
const noun = document.getElementById('noun-choice');
const verb = document.getElementById('verb-choice');
const adverb = document.getElementById('adverb-choice');
let adjectiveList = document.getElementById('adjectives');
let nounList = document.getElementById('nouns');
let verbList = document.getElementById('verbs');
let adverbList = document.getElementById('adverbs');

// create dropdown word choices for the user
let options = adjectives.map(word => {
  return `<option value="${word}"/>`
})
adjectiveList.innerHTML = options.join('');
options = nouns.map(word => {
  return `<option value="${word}"/>`
})
nounList.innerHTML = options.join('');
options = verbs.map(word => {
  return `<option value="${word}"/>`
})
verbList.innerHTML = options.join('');
options = adverbs.map(word => {
  return `<option value="${word}"/>`
})
adverbList.innerHTML = options.join('');

// Create event listeners for the buttons
randomButton.addEventListener('click', getRandomMadLib);
resetButton.addEventListener('click', resetAll);
submitButton.addEventListener('click', generateMadLib);

// Functions
const madLibGenerator = (adjective, noun, verb, adverb) => 
  sentence.innerHTML = 'My ' + adjective + ' ' + noun + ' is ' + verb + ' ' + adverb + '.';

function getRandomMadLib() {
  resetAll();
  for (let i = 1; i < 5; i++) {
    random.push(Math.floor(Math.random() * 5));
  };
  adjective.value = adjectives[random[0]];
  noun.value = nouns[random[1]];
  verb.value = verbs[random[2]];
  adverb.value = adverbs[random[3]];
  madLibGenerator(adjective.value, noun.value, verb.value, adverb.value);
};

function resetAll() {
  adjective.value = "";
  noun.value = "";
  verb.value = "";
  adverb.value = "";
  sentence.innerHTML = "Choose words from the list or type your own"
  random = [];
};

function generateMadLib() {
  madLibGenerator(adjective.value, noun.value, verb.value, adverb.value);
};

