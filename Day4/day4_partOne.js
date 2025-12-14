//Day 4- part one
const fs = require('fs');

//read the  input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split passports by blank lines 
const passports = input.split('\n\n');
//list of required fields 
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; //cid is optional

let validCount = 0;

//loop through each passport
for (const passport of passports) {
  const fields = passport.replace(/\n/g, ' ').split(' '); //replaced newlines with spaces to make parsing easier
  const keys = fields.map(field => field.split(':')[0]); //extract only the field names

  let isValid = true;
  //check if all required fields are present
  for (const req of requiredFields) {
    if (!keys.includes(req)) {
      isValid = false;
      break;
    }
  }

  //count valid passports
  if (isValid) {
    validCount++;
  }
}

//output the number of valid passports
console.log('Number of valid passports:', validCount);

//Sources:
//String.prototype.replace()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//Array.prototype.map()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//Array.prototype.includes() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
