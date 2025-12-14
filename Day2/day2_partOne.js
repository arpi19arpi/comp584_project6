//Day 2 - Part one
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split the input by newline characters
const lines = input.split('\n').filter(line => line.trim() !== '');
let validCount = 0;

//loop through each line of the passwords
for(const line of lines){
    //splitting the posicy and password
    const parts = line.split(':');
    const policy = parts[0].trim();
    const password = parts[1].trim();
    //splitting the policy into its components
    const policyParts = policy.split(' ');
    const range = policyParts[0];
    const letter = policyParts[1];
    //splitting the range into min and max
    const rangeParts = range.split('-');
    const min = parseInt(rangeParts[0]);
    const max = parseInt(rangeParts[1]);

    let count = 0;
    //counting the occurrences of the letter in the password
    for(const char of password){
        if(char === letter){
            count++;
        }
    }

    //checking if the count is within the min and max range
    if(count >= min && count <= max){
        validCount++;
    }
}
//output the valid password count
console.log('Valid passwords count:', validCount);

//Sources: 
//String.prototype.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.prototype.trim() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim 

