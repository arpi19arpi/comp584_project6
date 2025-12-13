//Day 1 - part two
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split the input by newline characters
const numbers = input.split('\n').map(Number); //convert each line to a number

//outer loop picks the first number
for (let i = 0; i < numbers.length; i++) {
  const first = numbers[i];

  const seen = new Set();

  //inner loop picks the second number
  for (let j = i + 1; j < numbers.length; j++) {
    const second = numbers[j];
    const needed = 2020 - first - second;

    //if the third number needed to reach 2020
    // has already been seen, we found the correct numbers
    if (seen.has(needed)) {
      console.log('First number:', first);
      console.log('Second number:', second);
      console.log('Third number:', needed);
      console.log('Product:', first * second * needed);
      return;
    }

    //store the current number for future checks
    seen.add(second);
  }
}

//Sources:
//Set - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//Array.prototype.map() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//String.prototype.split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//fs.readFileSync() - https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
