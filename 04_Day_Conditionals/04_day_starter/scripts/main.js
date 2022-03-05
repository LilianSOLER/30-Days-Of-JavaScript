// this is your main.js script

function exemplesLesson() {
	let num = 3;
	if (num > 0) {
		console.log(`${num} is a positive number`);
	} else {
		console.log(`${num} is a negative number`);
	}
	//  3 is a positive number

	num = -3;
	if (num > 0) {
		console.log(`${num} is a positive number`);
	} else {
		console.log(`${num} is a negative number`);
	}
	//  -3 is a negative number

	let isRaining = true;
	if (isRaining) {
		console.log("You need a rain coat.");
	} else {
		console.log("No need for a rain coat.");
	}
	// You need a rain coat.

	isRaining = false;
	if (isRaining) {
		console.log("You need a rain coat.");
	} else {
		console.log("No need for a rain coat.");
	}
	// No need for a rain coat.

	let a = 0;
	if (a > 0) {
		console.log(`${a} is a positive number`);
	} else if (a < 0) {
		console.log(`${a} is a negative number`);
	} else if (a == 0) {
		console.log(`${a} is zero`);
	} else {
		console.log(`${a} is not a number`);
	}

	// if else if else
	let weather = "sunny";
	if (weather === "rainy") {
		console.log("You need a rain coat.");
	} else if (weather === "cloudy") {
		console.log("It might be cold, you need a jacket.");
	} else if (weather === "sunny") {
		console.log("Go out freely.");
	} else {
		console.log("No need for rain coat.");
	}

	let weather2 = "cloudy";
	switch (weather2) {
		case "rainy":
			console.log("You need a rain coat.");
			break;
		case "cloudy":
			console.log("It might be cold, you need a jacket.");
			break;
		case "sunny":
			console.log("Go out freely.");
			break;
		default:
			console.log(" No need for rain coat.");
	}

	// Switch More Examples
	let dayUserInput = prompt("What day is today ?");
	let day = dayUserInput.toLowerCase();

	switch (day) {
		case "monday":
			console.log("Today is Monday");
			break;
		case "tuesday":
			console.log("Today is Tuesday");
			break;
		case "wednesday":
			console.log("Today is Wednesday");
			break;
		case "thursday":
			console.log("Today is Thursday");
			break;
		case "friday":
			console.log("Today is Friday");
			break;
		case "saturday":
			console.log("Today is Saturday");
			break;
		case "sunday":
			console.log("Today is Sunday");
			break;
		default:
			console.log("It is not a week day.");
	}

	let isRaining2 = true;
	isRaining2
		? console.log("You need a rain coat.")
		: console.log("No need for a rain coat.");
}

// exemplesLesson();

function q1E1() {
	let age = prompt("Enter your age");
	if (age >= 18) {
		console.log("You are old enough to drive");
	} else {
		console.log(`You are left with ${18 - age} years to drive`);
	}
}

// q1E1();

function q2E1() {
	let yourAge = prompt("Enter your age");
	let myAge = new Date().getFullYear() - 2001;
	if (yourAge > myAge) {
		console.log(`You are ${yourAge - myAge} years older than me`);
	} else if (yourAge == myAge) {
		console.log("You have the same age as me");
	} else {
		console.log(`You are ${myAge - yourAge} years younger than me`);
	}
}

// q2E1();

function q3E1(){
  let a = parseInt(prompt("Enter a number"));
  let b = parseInt(prompt("Enter a number"));
  a < b ? console.log(`${a} is less than ${b}`) : console.log(`${a} is greater or equal than ${b}`);
}

// q3E1();

function q4E1(){
  let a = parseInt(prompt("Enter a number"));
  a % 2 == 0 ? console.log(`${a} is even`) : console.log(`${a} is odd`);
}

q4E1();
