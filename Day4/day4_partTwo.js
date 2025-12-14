//Day 4 part two
const fs = require('fs');

//reads the input file synchronously
const input = fs.readFileSync('input.txt', 'utf-8');

//split passports by blank lines
const passports = input.split('\n\n');
//required fields 
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; //cid is optional

let validCount = 0;
//loop through each passport
for (const passport of passports) {
  //replace newlines with spaces and split into key pairs
  const fields = passport.replace(/\n/g, ' ').split(' ');
  const data = {};
  //store passport data in an object
  for (const field of fields) {
    const parts = field.split(':');
    data[parts[0]] = parts[1];
  }

  let isValid = true;
  //checking if all required fields exist
  for (const req of requiredFields) {
    if (!data[req]) {
      isValid = false;
      break;
    }
  }

  if (!isValid) continue;

  
  const byr = parseInt(data.byr);
  if (byr < 1920 || byr > 2002) isValid = false; //validate birth year
  const iyr = parseInt(data.iyr);
  if (iyr < 2010 || iyr > 2020) isValid = false;  //validate issue year
  const eyr = parseInt(data.eyr);
  if (eyr < 2020 || eyr > 2030) isValid = false; //validate expiration year
  //validate height
  const hgt = data.hgt;
  if (hgt.endsWith('cm')) {
    const val = parseInt(hgt);
    if (val < 150 || val > 193) isValid = false;
  } else if (hgt.endsWith('in')) {
    const val = parseInt(hgt);
    if (val < 59 || val > 76) isValid = false;
  } else {
    isValid = false;
  }

  
  if (!/^#[0-9a-f]{6}$/.test(data.hcl)) isValid = false; //validate hair color
  const validEcl = ['amb','blu','brn','gry','grn','hzl','oth'];
  if (!validEcl.includes(data.ecl)) isValid = false; //validate eye color
  if (!/^\d{9}$/.test(data.pid)) isValid = false; //validate passport id
  if (isValid) {
    validCount++;
  }
}

//output the number of valid passports
console.log('Valid passports:', validCount);


//Cites:
//String.prototype.replace()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//parseInt()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//String.prototype.endsWith()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
//Regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

//Answer to part one: 260 and part two: 153