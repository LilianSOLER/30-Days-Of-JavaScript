// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

function exemples() {
	const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
	const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
	const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
	const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
	const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
	const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

	// Print the array and its length

	console.log("Numbers:", numbers);
	console.log("Number of numbers:", numbers.length);

	console.log("Fruits:", fruits);
	console.log("Number of fruits:", fruits.length);

	console.log("Vegetables:", vegetables);
	console.log("Number of vegetables:", vegetables.length);

	console.log("Animal products:", animalProducts);
	console.log("Number of animal products:", animalProducts.length);

	console.log("Web technologies:", webTechs);
	console.log("Number of web technologies:", webTechs.length);

	console.log("Countries:", countries);
	console.log("Number of countries:", countries.length);

	const arr = [
		"Asabeneh",
		250,
		true,
		{ country: "Finland", city: "Helsinki" },
		{ skills: ["HTML", "CSS", "JS", "React", "Python"] },
	]; // arr containing different data types
	console.log(arr);

	let js = "JavaScript";
	const charsInJavaScript = js.split("");

	console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

	let companiesString =
		"Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
	const companies = companiesString.split(",");

	console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
	let txt =
		"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
	const words = txt.split(" ");

	console.log(words);
	// the text has special characters think how you can just get only the words
	// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

	const fruits2 = ["banana", "orange", "mango", "lemon"];
	let firstFruit = fruits2[0]; // we are accessing the first item using its index

	console.log(firstFruit); // banana

	secondFruit = fruits2[1];
	console.log(secondFruit); // orange

	let lastFruit = fruits2[3];
	console.log(lastFruit); // lemon
	// Last index can be calculated as follows

	let lastIndex = fruits2.length - 1;
	lastFruit = fruits2[lastIndex];

	console.log(lastFruit); // lemon

	console.log(numbers.length); // => to know the size of the array, which is 6
	console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
	console.log(numbers[0]); //  -> 0
	console.log(numbers[5]); //  -> 100

	lastIndex = numbers.length - 1;
	console.log(numbers[lastIndex]); // -> 100

	console.log(webTechs); // all the array items
	console.log(webTechs.length); // => to know the size of the array, which is 7
	console.log(webTechs[0]); //  -> HTML
	console.log(webTechs[6]); //  -> MongoDB

	lastIndex = webTechs.length - 1;
	console.log(webTechs[lastIndex]); // -> MongoDB

	numbers[0] = 10; // changing 1 at index 0 to 10
	numbers[1] = 20; // changing  2 at index 1 to 20

	console.log(numbers); // [10, 20, 3, 4, 5]

	countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
	lastIndex = countries.length - 1;
	countries[lastIndex] = "Korea"; // Replacing Kenya by Korea

	console.log(countries);

	const arrEmpty = Array(); // creates an an empty array
	console.log(arrEmpty);

	const eightEmptyValues = Array(8); // it creates eight empty values
	console.log(eightEmptyValues); // [empty x 8]

	const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
	console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

	const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
	console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

	const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
	console.log(four4values); // [4, 4, 4, 4]

	const firstList = [1, 2, 3];
	const secondList = [4, 5, 6];
	const thirdList = firstList.concat(secondList);

	console.log(thirdList); // [1, 2, 3, 4, 5, 6]

	const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

	console.log(fruitsAndVegetables);

	console.log(numbers.indexOf(5)); // -> 4
	console.log(numbers.indexOf(0)); // -> -1
	console.log(numbers.indexOf(1)); // -> 0
	console.log(numbers.indexOf(6)); // -> -1

	// let us check if a banana exist in the array
	let index = fruits.indexOf("banana"); // 0

	if (index != -1) {
		console.log("This fruit does exist in the array");
	} else {
		console.log("This fruit does not exist in the array");
	}
	// This fruit does exist in the array

	// we can use also ternary here
	index != -1
		? console.log("This fruit does exist in the array")
		: console.log("This fruit does not exist in the array");

	// let us check if a avocado exist in the array
	let indexOfAvocado = fruits.indexOf("avocado"); // -1, if the element not found index is -1
	if (indexOfAvocado != -1) {
		console.log("This fruit does exist in the array");
	} else {
		console.log("This fruit does not exist in the array");
	}
	// This fruit does not exist in the array

	console.log(numbers.lastIndexOf(2)); // 7
	console.log(numbers.lastIndexOf(0)); // -1
	console.log(numbers.lastIndexOf(1)); //  6
	console.log(numbers.lastIndexOf(4)); //  3
	console.log(numbers.lastIndexOf(6)); // -1

	console.log(numbers.includes(5)); // true
	console.log(numbers.includes(0)); // false
	console.log(numbers.includes(1)); // true
	console.log(numbers.includes(6)); // false

	console.log(webTechs.includes("Node")); // true
	console.log(webTechs.includes("C")); // false

	console.log(Array.isArray(numbers)); // true

	const number = 100;
	console.log(Array.isArray(number)); // false

	console.log(numbers.toString()); // 1,2,3,4,5

	const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
	console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

	console.log(numbers.join()); // 1,2,3,4,5

	console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
	console.log(names.join("")); //AsabenehMathiasEliasBrook
	console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
	console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
	console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

	console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
	console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"  const numbers = [1,2,3,4,5]

	console.log(numbers.slice()); // -> it copies all  item
	console.log(numbers.slice(0)); // -> it copies all  item
	console.log(numbers.slice(0, numbers.length)); // it copies all  item
	console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
}

// exemples();

function q1_4E1() {
	const emptyArray = Array();
	console.log(emptyArray);
	console.log(emptyArray.length);

	const fiveValueArray = ["1", "2", "3", "4", "5"];
	let fiveValueArrayLen = fiveValueArray.length;
	console.log(fiveValueArray);
	console.log(fiveValueArrayLen);
	console.log(fiveValueArray[0]);
	console.log(fiveValueArray[fiveValueArrayLen - 1]);
	console.log(fiveValueArray[Math.round((fiveValueArrayLen - 1) / 2)]);
}

// q1_4E1();

function q5E1() {
	const mixedDataTypes = [
		"string",
		10,
		3.14,
		true,
		undefined,
		false,
		0,
		10 == 11,
		Array(),
		Array(8).fill(1),
	];
	console.log(mixedDataTypes);
	console.log(mixedDataTypes.length);
}

// q5E1();

function q6_23E1() {
	let companies = [
		"Facebook",
		"Google",
		"Microsoft",
		"Apple",
		"IBM",
		"Oracle",
		"Amazon",
	];
	const companiesLen = companies.length;
	console.log(companies);
	console.log(
		`There are ${companiesLen} compan${companiesLen == 1 ? "y" : "ies"}`
	);

	companies.forEach((company, index) => {
		companies[index] = company.toUpperCase();
		console.log(companies[index]);
	});

	console.log(`${companies.join(", ")} are big companies`);

	let companiesSearched = ["Ovh", "Google", "GOOGLE", "Sony"];
	companiesSearched.forEach((companySearched) => {
		companies.includes(companySearched)
			? console.log(`Company ${companySearched} found`)
			: console.log(`Company ${companySearched} not found`);
	});

	let companiesWithMoreThanOneO = Array();
	let companiesWithLessThanOneO = Array();
	companies.forEach((company) => {
		companyArray = company.split("O");
		companyArray.length <= 2
			? companiesWithMoreThanOneO.push(company)
			: companiesWithLessThanOneO.push(company);
	});
	console.log(companiesWithMoreThanOneO);
	console.log(companiesWithLessThanOneO);

	const sortCompanies = companies.sort();
	console.log(sortCompanies);
	const reversedSortCompanies = sortCompanies.reverse();
	console.log(reversedSortCompanies);

	console.log(sortCompanies.slice(0, 3));
	console.log(sortCompanies.slice(companiesLen - 3));

	let middleElement = Math.round((companiesLen - 1) / 2);

	console.log(sortCompanies[middleElement]);

	sortCompanies.shift();
	console.log(sortCompanies);
	sortCompanies.splice(middleElement, middleElement + 1);
	console.log(sortCompanies);
	sortCompanies.pop();
	console.log(sortCompanies);

	console.log(`Destruction of ${sortCompanies}`);
	for (let i = 0; sortCompanies.length; i++) {
		sortCompanies.pop();
	}
	console.log(sortCompanies);
}

// q6_23E1();

function q1E2() {
	console.log(countries);
	console.log(webTechs);
}

// q1E2();

function q2E2() {
	let text =
		"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
	let words = text.split(" ");
	words.forEach((word, index) => {
		words[index] = word.replace(",", "").replace(".", "");
	});
	console.log(words);
	console.log(words.length);
}

// q2E2();

function q3E2() {
	const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
	console.log(shoppingCart);
	console.log(shoppingCart.length);

	shoppingCart.push("Cake");
	console.log(shoppingCart);
	console.log(shoppingCart.length);

	shoppingCart.unshift("Chips");
	console.log(shoppingCart);
	console.log(shoppingCart.length);

	shoppingCart.shift();
	console.log(shoppingCart);
	console.log(shoppingCart.length);

	shoppingCart.pop();
	console.log(shoppingCart);
	console.log(shoppingCart.length);
}

// q3E2();

function q4_5E2() {
	let country = "Ethiopia";
	countries.includes(country)
		? console.log(country.toUpperCase())
		: countries.push(country);
	console.log(countries);
	console.log(countries.length);

	let webTech = "Sass";
	webTechs.includes(webTech)
		? console.log(`${webTech} is a CSS preprocess`)
		: webTechs.push(webTech);
	console.log(webTechs);
	console.log(webTechs.length);
}

// q4_5E2();

function q6E2() {
	const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
	const backEnd = ["Node", "Express", "MongoDB"];

	const fullStack = frontEnd.concat(backEnd);

	console.log(fullStack);
}

// q6E2();

function q1E3(){
	const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
	const agesLen = ages.length;
	console.log(ages);
	console.log(agesLen);

	ages.sort();
	console.log(ages);
	let maxAge = ages[agesLen - 1];
	let minAge = ages[0];
	console.log(`Min : ${maxAge} \nMax : ${minAge}`);

	let averageAge = 0;
	ages.forEach((age) => {
		averageAge += age;
	});
	averageAge /= agesLen;
	console.log(`Average age : ${averageAge}`);
	console.log(`Median age : ${ages[Math.round((agesLen - 1) / 2)]}`);
	console.log(`Range : ${maxAge - minAge}`);
	console.log(`Min - Moy : ${Math.abs(Math.round((minAge - averageAge) * 100) / 100)}`);
	console.log(`Max - Moy : ${Math.round((maxAge - averageAge)* 100) / 100}`);
}

// q1E3();

function q2_3E3(){
	let countriesLen = countries.length;
	let countriesMedianIndex = Math.round((countriesLen - 1) / 2);
	let countriesMedian = countries[countriesMedianIndex];
	console.log(countries);
	console.log(countriesLen);
	console.log(countriesMedian);

	let firstTenCountries = countries.slice(0, 10);
	console.log(firstTenCountries);

	if(countriesLen % 2 === 0){
		let firstPart = countries.slice(0, countriesMedianIndex);
		let secondPart = countries.slice(countriesMedianIndex, countriesLen);
		console.log(firstPart);
		console.log(secondPart);
	} else{
		let firstPart = countries.slice(0, countriesMedianIndex + 1);
		let secondPart = countries.slice(countriesMedianIndex + 1, countriesLen);
		console.log(firstPart);
		console.log(secondPart);
	}
}

q2_3E3();

