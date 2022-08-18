let adjectives = ['gross', 'awesome', 'joyful', 'sympathetic', 'arrogant'];
let nouns = ['boyfriend', 'baby', 'chameleon', 'turtle', 'grandmother'];
let verbs = ['running', 'playing', 'spinning around', 'sobbing', 'giggling'];
let adverbs = ['willingly', 'wildly', 'constantly', 'stupidly', 'lazily']
let random = [];

const madLibGenerator = (adjective, noun, verb, adverb) =>
    'My ' + adjective + ' ' + noun + ' is ' + verb + ' ' + adverb + '.';

let buttonElement = document.getElementById('button');
function runMadLib() {
    random = [];
    let counter = 1;
    while (counter < 5) {
        random.push(Math.floor(Math.random() * 5));
        counter++;
    }
    document.querySelector('p').innerHTML =
        madLibGenerator(adjectives[random[0]], nouns[random[1]], verbs[random[2]], adverbs[random[3]]);
}
buttonElement.onclick = runMadLib;