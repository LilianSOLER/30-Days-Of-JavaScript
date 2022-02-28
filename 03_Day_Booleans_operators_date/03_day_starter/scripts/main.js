// this is your main.js script

//EX1

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

//q1E1();

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

q4E1();



