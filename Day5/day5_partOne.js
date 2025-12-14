//Day 5 part one
const fs = require('fs');

// Read the input file
const input = fs.readFileSync('input.txt', 'utf-8');
//filter out empty lines
const passes = input.split('\n').filter(line => line.trim() !== '');

let highestSeatId = 0;
//loop through each boarding pass 
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
  const seatId = row * 8 + col;
  //update highest seat id if current is bigger
  if (seatId > highestSeatId) {
    highestSeatId = seatId;
  }
}

//output the highest seat Id
console.log('Highest seat ID:', highestSeatId);

//Cites:
//Bitwise left shift- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift
//Bitwise OR  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR 

//Answer to part one: 801