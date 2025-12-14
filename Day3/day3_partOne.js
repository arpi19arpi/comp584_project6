//Day 3 - part one
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split the input by newline chars
const map = input.split('\n').filter(line => line.trim() !== '');
let treeCount = 0;
let x = 0; //horizontal position
let y = 0; //vertical position
const rightStep = 3;
const downStep = 1;
const width = map[0].length;

//loop until we reach the bottom of the map
while (y < map.length) {
    //check if the current position has a tree
    if (map[y][x % width] === '#') {
        treeCount++;
    }
    //move to the next position
    x += rightStep;
    y += downStep;
}

//output the total tree count
console.log('Total trees found:', treeCount);

//Sources:
//Spring.prototype.split()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.prototype.trim() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
//Remainder operator(%)- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder  