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

// console.log(`"10" == 10 is ${10 == "10"}`);
// console.log(`"10" === 10 is ${10 === "10"}`);
// console.log(`parseInt("9.8") == 10 is ${parseInt("9.8") == 10}`);
// console.log(`parseInt("9.8") === 10 is ${parseInt("9.8") === 10}`);

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

// EX2

function q1E2(){
  let base = prompt('Base ?');
  let height = prompt("Height ?");
  let area = base * height / 2;
  console.log(`Area : ${area}`);
}

// q1E2();

function q2E2(){
  let perimeter = 0;
  while(confirm("Do you want to add a side ?")){
    perimeter += parseInt(prompt("Enter his lenght"));
  }
  console.log(`Perimeter : ${perimeter}`);  
}

// q2E2();

function q3E2(){
  console.log("Calcul of area and perimeter of a triangle :");
  let perimeter, area;
  let length = parseInt(prompt("Enter his lenght"));
  let width = parseInt(prompt("Enter his width"));
  perimeter = 2 * (length + width);
  area = length * width;
  let endSentence = `${length} by ${width} has an area of ${area} and a perimeter of ${perimeter}`;
  (length != width) ? console.log("Triangle" + endSentence) : console.log("Square " + endSentence);
}

// q3E2();

function q4E2(){
  console.log("Calcul of area and perimeter of a circle :");
  const pi = 3.14;
  let perimeter, area;
  let radius = parseInt(prompt("Enter his radius"));
  perimeter = Math.round(2 * pi * radius, 2);
  area = pi * (radius ** 2);
  console.log(`Circle Radius ${radius} => Area ${area} && Perimeter ${perimeter}`);
}

// q4E2();

function poly(arrayCoeff, x){
  let res = 0;
  arrayCoeff.forEach((element, index) => {
    res += x * (element ** index);
  });
  return res;
}
function y(x){
  return poly([-2, 2], x);
}

function slope(points){
  return (points["y"][1] - points["y"][0]) / (points["x"][1] - points["x"][0]);
}

function q5E2(){
  let xs = [0, 3];
  let ys = [];
  xs.forEach(x => ys.push(y(x)));
  let points = {"x": xs, "y": ys};
  console.log(`Slope of 2*x - 2 is ${slope(points)}`);
}

// q5E2();

function q6E2(){
  let p1 = [2, 2];
  let p2 = [6, 10];
  let points = {"x": [p1[0], p2[0]],"y": [p1[1], p2[1]]};
  console.log(`Slope is ${slope(points)}`);
}

// q6E2();

function q8E2(){
  let coeffPoly = [9, 6, 1];
  for(i = 0; i < 10; i++){
    let value = poly(coeffPoly, i);
    console.log(`${i} : ${value}`);
  } 
}

// q8E2();

function q9E2(){
  let hours = prompt("Hours of work");
  let rate = prompt("Rate per hour");
  let pay = hours * rate;
  console.log(`You will receive ${pay}€`);
}

// q9E2();

function q10E2(){
  let nameLength = prompt("Enter your name").length;
  (nameLength <= 7) ? console.log("Your name is short") : console.log("Your name is long");
}

// q10E2();

function q11E2(){
  let firstName = prompt("Enter your firstname").length;
  let lastname = prompt("Enter your lastname").length;
  (firstName > lastname) ? console.log("Your firstname is longer") : console.log("Your lastname is longer");
}

// q11E2();

function q12E2(){
  let myAge = 20;
  let yourAge = parseInt(prompt("Enter your age"));
  (yourAge > myAge) ? console.log("You are older than me") : console.log("You are younger than me");
}

// q12E2();

function q13E2(){
  let yourBirthday = parseInt(prompt("Enter your birthday"));
  let yourAge = new Date().getFullYear() - yourBirthday;
  console.log(`You are ${yourAge} years old`);
  (yourAge > 18) ? console.log("You are an adult") : console.log(`You are a child,you will be an adult in ${18 - yourAge} years`);
}

// q13E2();

function q14E2(){
  let years = parseInt(prompt("Enter number of years you live:"));
  let secondsInYear = 60 * 60 * 24 * 365;
  console.log(`You lived ${years * secondsInYear} years`);
}

// q14E2();

function q15E2(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
  console.log(`${month}-${day}-${year} ${hours}:${minutes}`);
  console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
}

q15E2();