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
