//Day 7: part one
const fs = require('fs');
//reads the input file synchtonosuly
const input = fs.readFileSync('input.txt','utf-8');

//spliting input into lines
const rules = input.split('\n').filter(line  => line.trim() !== '');
const bagMap = {};
//building a reverse map of which bags can contain which
for(const rule of rules){
    //splitting each rule into outer bag and it's contents
    const parts= rule.split(' bags contain ');
    const outer = parts[0];
    const inner = parts[1];
    if(inner == 'no other bags.'){
        continue; //skip bags that don't have other bags
    }
    //split the contents into individual bag descriptions
    const innerBags = inner.split(', ');
    for(const bag of innerBags){
        const words = bag.split(' '); //splitting each description into words
        const color = words[1] + ' ' + words[2]; //extract the color of the inner bag
        if(!bagMap[color]){
            bagMap[color] = [];
        }
        //storing which outer bags can contain this inner bag
        bagMap[color].push(outer);
    }
}
const seen = new Set();
//doing recursive search for bags that can contain the bag we want
function search(bag){
    if(!bagMap[bag]){
        return; //if no bags can contain this bag then stop recursion
    }
    for(const outer of bagMap[bag]){
        if(!seen.has(outer)){
            seen.add(outer);
            search(outer);
        }
    }
}
search('shiny gold'); //starting search with shiny gold bag
console.log('Number of bag colors that can contain shiny gold:', seen.size); //output result

//Sources:
//Recursion: https://developer.mozilla.org/en-US/docs/Glossary/Recursion

//Answer to part one was 148