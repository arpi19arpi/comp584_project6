//Day 1 - part one
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split the input by newline characters
const numbers = input.split('\n').map(Number); //convert each line to a number 

const seen = new Set();

//loops through each number in the expense report
for (const num of numbers) {
  const needed = 2020 - num;

  //if we have already seen the number needed to reach 2020,
  // we have found the correct pair
  if (seen.has(needed)) {
    console.log('First number:', num);
    console.log('Second number:', needed);
    console.log('Product:', num * needed);
    break;
  }

  //store the current number for future checks
  seen.add(num);
}

//Sources:
//Set- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 
//Array.prototype.map() -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//String,prototype.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 