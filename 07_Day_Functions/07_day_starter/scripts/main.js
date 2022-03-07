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

  (function(n) {
    console.log(n * n)
  })(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10);
  
  console.log(squaredNum);
}

// examples();

