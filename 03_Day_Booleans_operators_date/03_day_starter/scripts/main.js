// this is your main.js script

// EX1

function typeOfArray(array){
  if(array == null){
    console.log("Array Null");  
  }
  else if(array.length == 0){
    console.log("Array Empty");
  }
  else{
    array.forEach(element => {
      console.log(`${element} is ${typeof element}`);
    });
  }
}

function q1E1(){
  let firstName, lastName, country, city, age, isMarried, year;
  firstName = prompt("Enter your first name");
  country = prompt("Enter your country");
  city = prompt("Enter your city");
  age = prompt("Enter your age");
  isMarried = confirm("Are you married?");
  year = new Date().getFullYear();

  typeOfArray([firstName, country, city, age, isMarried, year]);
  console.log(`${firstName} from ${country} in ${city} was born in ${year - age}`);
  isMarried ? console.log("You are married") : console.log("You are not married");
}

// q1E1();

console.log(`"10" == 10 is ${10 == "10"}`);
console.log(`"10" === 10 is ${10 === "10"}`);
console.log(`parseInt("9.8") == 10 is ${parseInt("9.8") == 10}`);
console.log(`parseInt("9.8") === 10 is ${parseInt("9.8") === 10}`);

function q4E1(){
  let trueStatement = [true, 1, "random string"]; //might be true but random string isn't ??
  let falseStatement = [false, 0, "", null, undefined, NaN]; //might be false but null, undefined, NaN aren't ??

  trueStatement.forEach(element => {
    console.log(`${element} is ${typeof element} is ${element == true}`);
  });

  falseStatement.forEach(element => {
    console.log(`${element} is ${typeof element} is ${!(element == false)}`);
  });
}

// q4E1();

function q5E1(){
  let condArray = [(4 > 3), (4 >= 3), (4 < 3), (4 <= 3), (4 == 4), (4 === 4), (4 != 4),
  (4 !== 4), (4 != '4'), (4 == '4'), (4 ==='4'), ("python".length != "jargon".length)];
  condArray.forEach(cond => {
    console.log(cond);
  })
}
// q5E1();

function q6E1(){
  let condArray = [(4 > 3 && 10 < 12), (4 > 3 && 10 > 12), (4 > 3 || 10 < 12),
  (4 > 3 || 10 > 12), (!(4 > 3)), (!(4 < 3)), (!(false)), (!(4 > 3 && 10 < 12)),
  (!(4 > 3 && 10 > 12)), (!(4 === '4')), (!("dragon".includes("on")) && !("pyton".includes("on")))];
  condArray.forEach(cond => {
    console.log(cond);
  })
}
// q6E1();

function q7E1(){
  date = new Date();
  console.log(`What is the year today? ${date.getFullYear()}`);
  console.log(`What is the month today as a number? ${date.getMonth() + 1}`);
  console.log(`What is the date today? ${date}`);
  console.log(`What is the day today as a number? ${date.getDate()}`);
  console.log(`What is the hours now? ${date.getHours()}`);
  console.log(`What is the minutes now? ${date.getMinutes()}`);
  console.log(`Find out the numbers of seconds elapsed from January 1, 1970 to now. ${date.getTime()}s`)
}

// q7E1();


