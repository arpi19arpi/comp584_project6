//Day 3 - part two
const fs = require('fs');

//reads the input file synchronously 
const input = fs.readFileSync('input.txt', 'utf-8');

//split the input by newline chars
const map = input.split('\n').filter(line => line.trim() !== '');
const width = map[0].length;
//the list of slopes we need to ckeck
const slopes = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
];
let product = 1; //to store the product of tree counts for each slope
//loop through each slope
for(const slope of slopes){
    let rightStep = slope[0];
    let downStep = slope[1];
    let treeCount = 0;
    let x = 0; //horizontal position
    let y = 0; //vertical position

    //loop until we reach the bottom of it
    while (y < map.length) {
        //checking if the current position has tree
        if (map[y][x % width] === '#') {
            treeCount++;
        }
        //moveing to the next slope
        x += rightStep;
        y += downStep;
    }
    //multiply the tree count for this slope 
    product *= treeCount;
}
//output the final product
console.log('Product of trees on all slopes:', product);

//Sources: same as in part one