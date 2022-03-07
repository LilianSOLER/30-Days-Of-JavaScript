// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function exemples() {
	for (let i = 0; i <= 5; i++) {
		console.log(i);
	}

	// 0 1 2 3 4 5

	for (let i = 0; i <= 5; i++) {
		console.log(`${i} * ${i} = ${i * i}`);
	}

	const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
	const newArr = [];
	console.log(countries);
	for (let i = 0; i < countries.length; i++) {
		newArr.push(countries[i].toUpperCase());
	}
	console.log(newArr);
	// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

	const numbers = [1, 2, 3, 4, 5];
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i]; // can be shorten, sum += numbers[i]
	}

	console.log(sum); // 15

	const newArrNumber = [];
	sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		newArrNumber.push(numbers[i] ** 2);
	}

	console.log(newArrNumber); // [1, 4, 9, 16, 25]

	let i = 0;
	while (i <= 5) {
		console.log(i);
		i++;
	}

	// 0 1 2 3 4 5

	i = 0;
	do {
		console.log(i);
		i++;
	} while (i <= 5);

	// 0 1 2 3 4 5

	for (let i = 0; i <= 5; i++) {
		if (i == 3) {
			break;
		}
		console.log(i);
	}

	// 0 1 2

	for (let i = 0; i <= 5; i++) {
		if (i == 3) {
			continue;
		}
		console.log(i);
	}

	// 0 1 2 4 5
}

// exemples();

function q1_3E1() {
	let i = 0;
	console.log("For Loop");
	for (i; i <= 10; i++) {
		console.log(i);
	}
	console.log("While Loop");
	i = 0;
	while (i <= 10) {
		console.log(i);
		i++;
	}
	console.log("Do While Loop");
	i = 0;
	do {
		console.log(i);
		i++;
	} while (i <= 10);

	console.log("For Loop");
	for (i = 10; i >= 0; i--) {
		console.log(i);
	}
	console.log("While Loop");
	i = 10;
	while (i >= 0) {
		console.log(i);
		i--;
	}
	console.log("Do While Loop");
	i = 10;
	do {
		console.log(i);
		i--;
	} while (i >= 0);

	console.log("For Loop");
	let n = 10;
	for (i = 0; i <= n; i++) {
		console.log(i);
	}
}

// q1_3E1();

function q4_6E1() {
	let char = "#";
	console.log(`${char} Pattern`);
	for (let i = 0; i <= 10; i++) {
		console.log(char.repeat(i));
	}

	console.log("Perfect Square Table");
	for (let i = 1; i <= 10; i++) {
		console.log(`${i} * ${i} = ${i * i}`);
	}

	console.log("Power Table");
	console.log("i | i^2 | i^3");
	for (let i = 1; i <= 10; i++) {
		console.log(`${i} | ${i ** 2} | ${i ** 3}`);
	}
}

// q4_6E1();

function q7_12E1() {
	let evenNumbers = [];
	let oddNumbers = [];
	for (let i = 0; i <= 100; i++) {
		i % 2 === 0 ? evenNumbers.push(i) : oddNumbers.push(i);
	}
	console.log(evenNumbers);
	console.log(oddNumbers);

	let primeNumbers = [];
	for (let i = 2; i <= 100; i++) {
		let isPrime = true;
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			primeNumbers.push(i);
		}
	}
	console.log(primeNumbers);

	let sumEven = 0;
	let sumOdd = 0;
	evenNumbers.forEach((number) => {
		sumEven += number;
	});
	oddNumbers.forEach((number) => {
		sumOdd += number;
	});
	console.log(`Sum of even numbers: ${sumEven}`);
	console.log(`Sum of odd numbers: ${sumOdd}`);
	console.log(`Sum of all numbers: ${sumEven + sumOdd}`);
	console.log([sumEven, sumOdd]);
}

// q7_12E1();

function q13_15E1() {
	randomNumbers = [];
	for (let i = 0; i < 5; i++) {
		randomNumber = Math.floor(Math.random() * 100);
		while (randomNumbers.includes(randomNumber) == true) {
			randomNumber = Math.floor(Math.random() * 100);
		}
		randomNumbers.push(randomNumber);
	}
	console.log(randomNumbers);

	randomCharacters = [];
	let unicodeRange = 917631;
	for (let i = 0; i < 5; i++) {
		randomCharacter = String.fromCharCode(
			Math.floor(Math.random() * unicodeRange)
		);
		while (randomCharacters.includes(randomCharacter) == true) {
			randomCharacter = String.fromCharCode(
				Math.floor(Math.random() * unicodeRange)
			);
		}
		randomCharacters.push(randomCharacter);
	}
	console.log(randomCharacters);
}

// q13_15E1();

function q1_2E2() {
	randomCharacters = [];
	let unicodeRange = 917631;
	let n = 5;
	for (let i = 0; i < n; i++) {
		randomCharacter = String.fromCharCode(
			Math.floor(Math.random() * unicodeRange)
		);
		while (randomCharacters.includes(randomCharacter) == true) {
			randomCharacter = String.fromCharCode(
				Math.floor(Math.random() * unicodeRange)
			);
		}
		randomCharacters.push(randomCharacter);
	}
	console.log(randomCharacters);

	let randomNumber = 0;
	let beggingLetters = 97;
	let endLetters = 122;
	let rangeLetters = endLetters - beggingLetters;
	let randomHex = ["#"];
	for (let i = 0; i < n; i++) {
		randomNumber = Math.floor(Math.random() * 100);
		while (randomHex.includes(randomNumber) == true) {
			randomNumber = Math.floor(Math.random() * 100);
		}

		randomCharacter = String.fromCharCode(
			Math.floor(Math.random() * rangeLetters + beggingLetters)
		);
		while (randomHex.includes(randomCharacter) == true) {
			randomCharacter = String.fromCharCode(
				Math.floor(Math.random() * rangeLetters + beggingLetters)
			);
		}

		let randomChoiceArray = [randomNumber, randomCharacter];
		let randomChoice = Math.floor(Math.random() * 2);
		randomHex.push(randomChoiceArray[randomChoice]);
	}
	console.log(randomHex.join(""));
}

// q1_2E2();

function createSquaresOfCirclesDivs(n) {
	let table = document.createElement("table");
	// Adding the entire table to the body tag
	document.querySelector("body").appendChild(table);

  // Creating the rows
  for (let i = 0; i < n; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);

    // Creating the columns
    for (let j = 0; j < n; j++) {
      let column = document.createElement("td");
      row.appendChild(column);

      // Creating the circles
      let circle = document.createElement("div");
      circle.className = "circle";
      column.appendChild(circle);
    }
  }
}

function q3E2() {
	let randomRGB = [];
	let randomNumber = 0;
	for (let i = 0; i < 3; i++) {
		randomNumber = Math.floor(Math.random() * 256);
		randomRGB.push(randomNumber);
	}
	console.log(`rgb(${randomRGB.join(", ")})`);
	let cerlces = document.querySelectorAll(".circle");
  console.log(cerlces);
	cerlces.forEach((cercle) => {
    cercle.style = "height: 100px; width: 100px;border: 5px solid rgba(0, 0, 0, 1);border-radius: 50%;";
		cercle.style.backgroundColor = `rgb(${randomRGB.join(", ")})`;
	});
}

window.onload = createSquaresOfCirclesDivs(10);
setInterval(q3E2, 50);
q3E2();
