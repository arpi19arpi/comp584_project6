// Day 5 part two
const fs = require('fs');

// Read the input file
const input = fs.readFileSync('input.txt', 'utf-8');
//filter out empty lines
const passes = input.split('\n').filter(line => line.trim() !== '');

const seatIds = [];
//looping through each boarding pass
for (const pass of passes) {
  let row = 0;
  let col = 0;

  //first 7 characters determine the row
  for (let i = 0; i < 7; i++) {
    row <<= 1; //shift bits left
    if (pass[i]=== 'B') {
      row |= 1; //set bit to 1
    }
  }

  //last 3 characters determine the column
  for (let i = 7; i < 10; i++) {
    col <<= 1; //shift bits left
    if (pass[i] === 'R') {
      col |= 1; //set bit to 1
    }
  }

  //calculate seat id 
  seatIds.push(row * 8 + col); //store seat id in array
}

seatIds.sort((a, b) => a - b); //sort seat IDs in order
//find the missing seat id
for (let i = 1; i < seatIds.length; i++) {
  if (seatIds[i] !== seatIds[i - 1] + 1) {
    console.log('My seat ID:', seatIds[i] - 1);
    break;
  }
}

//Sources:
//Array.prototype.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//Array.prototype.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push.

//Answer to part two is 597 