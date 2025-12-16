//Day 6 part one
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split input into groups by blank lines
const groups = input.split('\n\n');

let totalYesCount = 0;

//looping through each group
for (const group of groups) {
  const answers = group.replace(/\n/g, ''); //remove newlines so all answers are in one string
  const yesSet = new Set();
  for (const char of answers) {
    yesSet.add(char); //adding each answer to the set
  }
  totalYesCount += yesSet.size; //adding the number of unique yes answers to the total
}
//the total count
console.log('Sum of yes answers:', totalYesCount);

//Sources:
//Set.prototype.add(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add 