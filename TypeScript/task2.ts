import promptSync from 'prompt-sync';
const prompt = promptSync();

const sentence:string = prompt('Enter a sentence: ');
const words: string[] = sentence.split(' ');
const frequency: {[key: string]: number} = {};

for (let word of words) {
    const lowrCaseWord = word.toLowerCase();
    if (frequency[lowrCaseWord]) {
        frequency[lowrCaseWord]++;
    } else {
        frequency[lowrCaseWord] = 1;
    }
}

for(let word in frequency){
    console.log(`${word} : ${frequency[word]}`);
}