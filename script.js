let adjectives = ['gross', 'awesome', 'joyful', 'sympathetic', 'arrogant'];
let nouns = ['boyfriend', 'baby', 'chameleon', 'turtle', 'grandmother'];
let verbs = ['running', 'tweeting', 'spinning around', 'sobbing', 'giggling'];
let adverbs = ['willingly', 'wildly', 'constantly', 'stupidly', 'lazily']

let random = [];
let counter = 1;

while (counter < 5) {
    random.push(Math.floor(Math.random() * 5));
    counter++;
}

console.log('My ' + adjectives[random[0]] + ' ' + nouns[random[1]] + ' is ' + verbs[random[2]] + ' ' + adverbs[random[3]] + '.');