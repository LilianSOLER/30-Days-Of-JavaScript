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

let string3 =  ' 30 Days Of JavaScript   ';
let string3Trimed = string3.trim();
let string3Array = string3Trimed.split(' ');
let startString3 = string3Array[0];
let endString3 = string3Array[string3Array.length-1];
let aString3 = string3Trimed.match(/a/g);
console.log(`-${string3}-\nbecome\n-${string3Trimed}-`);
console.log(`${string3Trimed} start with ${startString3} is ${string3Trimed.startsWith(startString3)} and finish by ${endString3} is ${string3Trimed.endsWith(endString3)}`);
console.log(aString3);

let firstPartString3 = string3Trimed.substring(0, 7);
let secondPartString3 = string3Trimed.substring(7);
console.log(`${firstPartString3} + ${secondPartString3} = ${firstPartString3.concat(secondPartString3)}`);

console.log(string3Trimed.repeat(2));


//EX2

console.log(`The quote` + `%c'There is no exercise better for the heart than reaching down and lifting people up.'` + `%cby John Holmes teaches us to ` + `%chelp` + `%cone another.`,
"color : lightblue", "", "color : lightblue", "");

console.log(`%c"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`,
"color : lightblue");

let var1 = '10';
let var1Copy = 10;
let var2 = parseFloat('9.8');
console.log(`${var1} == ${var1Copy} => ${var1 == var1Copy}`);
console.log(`${var1} === ${var1Copy} => ${var1 === var1Copy}`);
var1 = parseInt(var1);
console.log("Parsing of string '10' in int");
console.log(`${var1} == ${var1Copy} => ${var1 == var1Copy}`);
console.log(`${var1} === ${var1Copy} => ${var1 === var1Copy}`);
console.log(`${var1} == ${var2} => ${var1 == var2}`);
var1 = parseFloat(var1);
var2 = Math.round(var2);
console.log("Parsing of 10 in float and rounding of 9.8");
console.log(`${var1} == ${var2} => ${var1 == var2}`);

console.log(` "on" is in "python" and "jargon" : ${"python".includes("on") === "jargon".includes("on")}`);

let string4 = "I hope this course is not full of jargon."
let searchString2 = "jargon";
console.log(`"${searchString2}" is in "${string4}" : ${string4.includes(searchString2)}`);

let random = Math.random();
console.log(`Random number between 0 and 100 (included) : ${Math.floor(random*101)}`);
console.log(`Random number between 0 and 255 (included) : ${Math.floor(random*256)}`);
console.log(`Random number between 50 and 100 (included) : ${Math.floor(random*51) + 50}`);

let string5 = "Javascript";
let randomLetter = string5[Math.floor(random*(string5.length))];
console.log(`Random letter of ${string5} : ${randomLetter}`);

for(let i = 1; i <= 5; i++){
  console.log(i, 1, i , Math.pow(i, 2) , Math.pow(i, 3));
}

let searchString3 = "because because because";
console.log(string2.substr(string2.indexOf("because"), searchString3.length));

//EX3
let string6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCounter = string6.match(/love/g).length;
console.log(`There are ${loveCounter} "love" in ${string6}`);

let becauseCounter = string2.match(/because/g).length;
console.log(`There are ${becauseCounter} "because" in ${string2}`);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing;\
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.\
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let shitLetter = "&#@$%&;";
let cleanSentence = sentence;
shitLetter = shitLetter.split("");
shitLetter.forEach(letter => cleanSentence = cleanSentence.replaceAll(letter, ""));
console.log(cleanSentence);

let string7 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let array7 = string7.split(" ");
let incomes = [];
array7.forEach(word => {
  if(Number.isInteger(parseInt(word))){
    incomes.push(parseInt(word));
  }
});

let totalIncome = 0;
incomes.forEach((income, index) =>{
  if(index % 2 == 0){
    console.log(`Total income : ${totalIncome} + ${income} = ${totalIncome + income} `);
    totalIncome += income;
  }else{
    console.log(`Total income : ${totalIncome} + 12 * ${income} = ${totalIncome + 12* income} `);
    totalIncome += income * 12;
  }
})

console.log(`Total income : ${totalIncome}`);