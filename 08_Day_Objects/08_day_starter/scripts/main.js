const someExamples = () => {
	const person = {
		firstName: "Asabeneh",
		lastName: "Yetayeh",
		age: 250,
		country: "Finland",
		city: "Helsinki",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Node",
			"MongoDB",
			"Python",
			"D3.js",
		],
		getFullName: function () {
			return `${this.firstName} ${this.lastName}`;
		},
	};
	person.nationality = "Ethiopian";
	person.country = "Finland";
	person.title = "teacher";
	person.skills.push("Meteor");
	person.skills.push("SasS");
	person.isMarried = true;

	person.getPersonInfo = function () {
		let skillsWithoutLastSkill = this.skills
			.splice(0, this.skills.length - 1)
			.join(", ");
		let lastSkill = this.skills.splice(this.skills.length - 1)[0];

		let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
		let fullName = this.getFullName();
		let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
		return statement;
	};
	console.log(person);
	console.log(person.getPersonInfo());
};

// someExamples();

const e1 = () => {
	const dog = {};
	console.log(dog);

	dog.name = "Nom";
	dog.length = "75";
	dog.color = "white";
	dog.age = "7";
	dog.bark = function () {
		console.log("wouf wouf");
	};

	let dogKeys = Object.keys(dog);
	dogKeys.forEach((key) => {
		console.log(dog[key]);
	});
	dog.bark();

	dog.breed = "race";
	dog.getDogInfo = function () {
		console.log(`${this.name}, ${this.length} cm, ${this.age} years old`);
	};
	dog.getDogInfo();
};

e1();
