// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Let us access the arguments object​
// function declaration

function sumAllNums() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

function examples() {
	console.log(sumAllNums(1, 2, 3, 4)); // 10
	console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
	console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

	const sumAllNums2 = (...args) => {
		let sum = 0;
		for (const element of args) {
			sum += element;
		}
		return sum;
	};

	console.log(sumAllNums2(1, 2, 3, 4)); // 10
	console.log(sumAllNums2(10, 20, 13, 40, 10)); // 93
	console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40)); // 173

	const anonymousFun = function () {
		console.log(
			"I am an anonymous function and my value is stored in anonymousFun"
		);
	};

	anonymousFun();

	// Function expression
	const square = function (n) {
		return n * n;
	};

	console.log(square(2)); // -> 4

	(function (n) {
		console.log(n * n);
	})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

	let squaredNum = (function (n) {
		return n * n;
	})(10);

	console.log(squaredNum);
}

// examples();

const fullName = function displayFullNameOfUser(user) {
	const [firstName, lastName] = user;
	return `${firstName} ${lastName}`;
};

// console.log(fullName(["Soler", "Lilian"]));

const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(fullName2("AH", "HA"));

const sum = (a, b) => a + b;

const sum2 = function addAllArgs(...arguments) {
	let sum = 0;
	for (const argument of arguments) {
		sum += argument;
	}
	return sum;
};

// console.log(sum(1, 2));
// console.log(sum2(1, 2, 3, 4, 5));

const rectangleArea = (width, height) => width * height;
const rectanglePerimeter = (width, height) => 2 * (width + height);
const rectanglePrismVolume = (width, height, depth) => width * height * depth;

// console.log(rectangleArea(2, 3));
// console.log(rectanglePerimeter(2, 3));
// console.log(rectanglePrismVolume(2, 3, 4));

const circleArea = (radius) => Math.PI * radius * radius;
const circleCircumference = (radius) => 2 * Math.PI * radius;
const circleVolume = (radius) => (4 / 3) * Math.PI * radius * radius * radius;

// console.log(circleArea(2));
// console.log(circleCircumference(2));
// console.log(circleVolume(2));

const density = (mass, volume) => mass / volume;
const mass = (density, volume) => density * volume;
const volume = (density, mass) => mass / density;

// console.log(density(10, 100));
// console.log(mass(10, 100));
// console.log(volume(10, 100));

const speed = (distance, time) => distance / time;
const distance = (speed, time) => speed * time;
const time = (speed, distance) => distance / speed;

// console.log(speed(10, 2));
// console.log(distance(10, 2));
// console.log(time(10, 2));

const weight = (mass, gravity) => mass * gravity;
const mass2 = (weight, gravity) => weight / gravity;
const gravity = (weight, mass) => weight / mass;

// console.log(weight(10, 9.81));
// console.log(mass2(10, 9.81));
// console.log(gravity(10, 9.81));

const CelsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const FahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const CelsiusToKelvin = (celsius) => celsius + 273.15;
const KelvinToCelsius = (kelvin) => kelvin - 273.15;

// console.log(CelsiusToFahrenheit(10));
// console.log(FahrenheitToCelsius(10));
// console.log(CelsiusToKelvin(10));
// console.log(KelvinToCelsius(10));

const bmi = (weight, height) => Math.round(weight / (height * height) * 100) / 100;

const bmiName = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const bmiFull = (weight, height) => {
  const bmiNum = bmi(weight, height);
  const bmiNam = bmiName(bmiNum);
  return `Your BMI is ${bmiNum} (${bmiNam})`;
};

// console.log(bmiFull(50, 1.50));
// console.log(bmiFull(60, 1.75));
// console.log(bmiFull(70, 1.70));
// console.log(bmiFull(90, 1.70));

const checkSeason = (month) => {
  if (month === 12 || month === 1 || month === 2) {
    return "Winter";
  } else if (month === 3 || month === 4 || month === 5) {
    return "Spring";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Summer";
  } else {
    return "Fall";
  }
}

// console.log(checkSeason(12));
// console.log(checkSeason(3));
// console.log(checkSeason(6));
// console.log(checkSeason(9));

const findMax = (...numbers) => Math.max(...numbers);

// console.log(findMax(1, 2, 3, 4, 5));
// console.log(findMax(10, 20, 30, 40, 50));
// console.log(findMax(100, 200, 300, 400, 500));


