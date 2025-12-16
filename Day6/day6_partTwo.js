//Day 6 part two
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//spliting input into groups by blank lines
const groups = input.split('\n\n');

let yesCounts = 0;

//looping through each group 
for (const group of groups){
    //spliting a group into individual answers
    const people = group.split('\n').filter(line  => line.trim() !== '');
    const answerCount = {};
    //counting letters in each group
    for (const person of people){
        for(const char of person){
            answerCount[char] = (answerCount[char] || 0) + 1;
        }
    }
    //checking count of questions answered yes by everyone
    for (const count in answerCount){
        if (answerCount[count] === people.length){
            yesCounts++;
        }
    }
}

//output the total count
console.log('Sum of yes answers by everyone:', yesCounts);

//Sources:
//Array.prototype.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter   