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

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5
}

exemples();
