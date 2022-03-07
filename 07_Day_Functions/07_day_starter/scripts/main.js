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

const bmi = (weight, height) =>
	Math.round((weight / (height * height)) * 100) / 100;

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
};

// console.log(checkSeason(12));
// console.log(checkSeason(3));
// console.log(checkSeason(6));
// console.log(checkSeason(9));

const findMax = (...numbers) => Math.max(...numbers);

// console.log(findMax(1, 2, 3, 4, 5));
// console.log(findMax(10, 20, 30, 40, 50));
// console.log(findMax(100, 200, 300, 400, 500));

const solveLinearEquation = (a, b) => {
	const x = -b / a;
	return `The solution is ${x}`;
};

// console.log(solveLinearEquation(2, 4));
// console.log(solveLinearEquation(3, 10));
// console.log(solveLinearEquation(3, 6));

const calcDelta = (a, b, c = 0) => b ** 2 - 4 * a * c;

const solQE = function solveQuadraticEquation(a, b, c) {
	const delta = calcDelta(a, b, c);
	console.log(`Delta ${delta}`);
	if (a == 0) {
		if (b == 0) {
			if (c == 0) {
				return "Every number is a solution";
			} else {
				return "No solution";
			}
		} else {
			return solveLinearEquation(b, c);
		}
	} else {
		if (delta < 0) {
			return "No solution";
		} else {
			if (delta == 0) {
				const x = -b / (2 * a);
				return `The solution is ${x}`;
			} else {
				const x1 = (-b + Math.sqrt(delta)) / (2 * a);
				const x2 = (-b - Math.sqrt(delta)) / (2 * a);
				return `The solutions are ${x1} and ${x2}`;
			}
		}
	}
};

// console.log(solQE(1, 2, 3));
// console.log(solQE(-1, 2, 3));
// console.log(solQE(0, 2, 3));
// console.log(solQE(1, 2, 0));
// console.log(solQE(1, 0, 0));
// console.log(solQE(0, 0, 0));
// console.log(solQE(0, 0, 1));
// console.log(solQE(0, 1, 0));
// console.log(solQE(1, 0, 1));

const printArray = (...arrays) => arrays.join("\n");

// console.log(printArray(1, 2, 3, 4, 5));
// console.log(printArray(10, 20, 30, 40, 50));
// console.log(printArray(100, 200, 300, 400, 500));
const normalize = (num) => (num.length > 1 ? num : "0" + num);

const showDateTime = () => {
	const date = new Date();
	const day = normalize(date.getDate());
	const month = normalize(date.getMonth() + 1);
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
};

// showDateTime();

const swap = (a, b) => {
	const temp = a;
	a = b;
	b = temp;
	return [a, b];
};

const testSwap = (a, b) => {
	console.log(`Before swap: ${a} ${b}`);
	[a, b] = swap(a, b);
	console.log(`After swap: ${a} ${b}`);
};

// testSwap(1, 2);
// testSwap(10, 20);
// testSwap(100, 200);

const reverseArray = (arr) => {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
};

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([10, 20, 30, 40, 50]));
// console.log(reverseArray([100, 200, 300, 400, 500]));

const capitalizeArray = (arr) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].toUpperCase());
	}
	return newArr;
};

// console.log(capitalizeArray(["a", "b", "c"]));
// console.log(capitalizeArray(["a", "b", "c", "d"]));
// console.log(capitalizeArray(["aa", "bb", "cc", "dd", "ee"]));

const addItem = (arr, item) => {
	arr.push(item);
	return arr;
};

const removeItem = (arr, item) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== item) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

// console.log(addItem([1, 2, 3], 4));
// console.log(removeItem([1, 2, 3], 3));
// console.log(addItem([10, 20, 30], 40));
// console.log(removeItem([10, 20, 30], 30));
// console.log(addItem([100, 200, 300], 400));
// console.log(removeItem([100, 200, 300], 300));

const sums = function sumOfEvensAndOddAndTotal(arr) {
	let evens = 0;
	let odds = 0;
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evens += arr[i];
		} else {
			odds += arr[i];
		}
		total += arr[i];
	}
	return `Evens: ${evens}, Odds: ${odds}, Total: ${total}`;
};

// console.log(sums([1, 2, 3, 4, 5]));
// console.log(sums([10, 20, 30, 40, 50]));
// console.log(sums([100, 200, 300, 400, 500]));

const randomUserIp = () => {
	const ip = [];
	for (let i = 0; i < 4; i++) {
		ip.push(Math.floor(Math.random() * 256));
	}
	return ip.join(".");
};

const randomUserIpN = (n) => {
	for (let i = 0; i < n; i++) {
		console.log(randomUserIp());
	}
};

const randomMacAddress = () => {
	const mac = [];
	for (let i = 0; i < 6; i++) {
		mac.push(Math.floor(Math.random() * 256));
	}
	return mac.join(":");
};

const randomMacAddressN = (n) => {
	for (let i = 0; i < n; i++) {
		console.log(randomMacAddress());
	}
};

// randomUserIpN(10);
// randomMacAddressN(10);

const randomHexColor = () => {
	const hex = [];
	for (let i = 0; i < 6; i++) {
		hex.push(Math.floor(Math.random() * 16).toString(16));
	}
	return "#" + hex.join("");
};

const randomHexColorN = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(randomHexColor());
  }
};

// randomHexColorN(10);

const userIdGenerator = () => {
	let id = [];
	for (let i = 0; i < 7; i++) {
		let beggingLetters = 97;
		let endLetters = 122;
		let rangeLetters = endLetters - beggingLetters;

		let randomNum = Math.floor(Math.random() * 10);
		let randomLetter =  String.fromCharCode(Math.floor(Math.random() * rangeLetters + beggingLetters));
		let randomChar = Math.floor(Math.random() * 3);
		switch (randomChar) {
			case 0:
				id.push(randomNum);
				break;
			case 1:
				id.push(randomLetter);
				break;
			case 2:
				id.push(randomLetter.toUpperCase());
				break;
		}
	}
	return id.join("");
};

const userIdGeneratorN = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(userIdGenerator());
  }
};

// userIdGeneratorN(10);
