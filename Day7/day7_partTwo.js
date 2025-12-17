//Day 7: part two
const fs = require('fs');
//reads the input file synchronously
const input = fs.readFileSync('input.txt','utf-8');

//splitting input into lines
const rules = input.split('\n').filter(line  => line.trim() !== '');
const bagMap = {};
//building a map of each bag with a loop
for(const rule of rules){
    //splitting each rule into outer bag and it's contents
    const parts = rule.split(' bags contain ');
    const outer = parts[0];
    const inner = parts[1];
    bagMap[outer] = []; //this will later store all bags it contains
    if(inner == 'no other bags.'){
        continue; //skip bags that don't have other bags
    }
    //split the contents into individual bag descriptions
    const innerBags = inner.split(', ');
    for(const bag of innerBags){
        const words = bag.split(' '); //splitting each description into words
        const count = parseInt(words[0]); //number of bags
        const color = words[1] + ' ' + words[2]; //extract the color of the inner bag
        bagMap[outer].push({color, count}); //storing color and count in the map
    }
}

//calling recurisve function to count total bags inside the bag
function countBags(bag){
    let total = 0;
    for(const inner of bagMap[bag]){
        //adding the count of inner bags plus the bags they contain
        total+= inner.count + inner.count*countBags(inner.color);
    }
    return total; //return total count
}
//calling the recursive function
console.log('Total bags inside a shiny gols bag: ', countBags('shiny gold'));

//Sources:
//Recursion: https://developer.mozilla.org/en-US/docs/Glossary/Recursion

//Answer to part two is 24867