console.log('hellow world!');
const prompt = require('prompt-sync')();
const name = prompt('what is your name?');
const language_count = prompt('how many favorite programming languages do you have?');
languages = [];
for (let i = 0; i < language_count; i++) {
    language = prompt('');
    languages.push(language);
}
console.log(name)
console.log(languages)
let char_count = 0;
for (let i=0; i<languages.length; i++) {
    char_count += languages[i].length;
    console.log(`my favaorite programming language is ${languages[i]}`);
}
console.log(`the total number of characters in all languages is ${char_count}`);