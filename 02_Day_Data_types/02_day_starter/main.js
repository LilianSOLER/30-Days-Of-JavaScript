// this is your main.js script

//EX1

let challenge = '30 Days Of JavaScript';
console.log(`${challenge} is ${challenge.length} long`);

challengeUpper = challenge.toUpperCase();
console.log(challengeUpper);
challengeLower = challenge.toLowerCase();
console.log(challengeLower);

let challengeArray = challenge.split(" ");
let firstWord = [0];
console.log(`First Word is ${firstWord}`);

let rest = challenge.substring(3);
console.log(`The rest is ${rest}`);

let string = "Script";
let includeString = challenge.includes(string);
console.log(`This sentence include ${string} : ${includeString} `)

let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let brandsArray = brands.split(', ');
console.log(`Brands are : ${brands}\n
Brands are : ${brandsArray[0]}, ${brandsArray[1]}, ${brandsArray[2]}, etc `);

let challengePython = challenge.replace("JavaScript", "Python");
console.log(challengePython);

let letter = challenge.charAt(11);
let letterCode = challenge.charCodeAt(11);
console.log(`Unicode of ${letter} is ${letterCode}`);

let searchLetter = "a";
let firstIndexOfLetter = challenge.indexOf(searchLetter);
let lastIndexOfLetter = challenge.lastIndexOf(searchLetter);
console.log(`In "${challenge}" ${searchLetter} appear for the first time in ${firstIndexOfLetter + 1} place \
and for the last time in ${lastIndexOfLetter + 1}`)

let string2 = 'You cannot end a sentence with because because because is a conjunction';
let searchString = "because"
console.log(`In "${string2}" ${searchString} appear for the first time in ${string2.indexOf(searchString) + 1} place \
and for the last time in ${string2.lastIndexOf(searchString) + 1}`);
console.log(`Using search we find ${string2.search(searchString) +1}`);