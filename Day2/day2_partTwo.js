//Day 2 - part two

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
    const positions = policyParts[0];
    const letter = policyParts[1];
    //splitting the positions into pos1 and pos2
    const positionParts = positions.split('-');
    const pos1 = parseInt(positionParts[0]) - 1; //convert to zero-based index
    const pos2 = parseInt(positionParts[1]) - 1; //convert to zero-based index

    //checking if the letter is at exactly one of the specified positions
    const firstMatch = password[pos1] === letter;
    const secondMatch = password[pos2] === letter;
    
    if((firstMatch || secondMatch) && firstMatch !== secondMatch){
        validCount++;
    }
}
//output the valid password count
console.log('Valid passwords count:', validCount);

//Sources: 
//String.prototype.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.prototype.trim()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
//parseInt()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
