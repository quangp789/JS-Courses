// Let and Const

	/*
	// ES5
	var name5 = 'Quang Phong';
	var age5 = 23;
	name5 = 'Quang Nguyen';
	console.log(name5);

	// ES6
	const name6 = 'Quang Phong'; // const used to declare a variable that cannot be changed
	let age6 = 25; // let is used if you want to change the value of the variable
	name6 = 'Quang Nguyen';
	console.log(name6);


	// ES5
	function driversLicense5(passedTest) {
		if (passedTest) {
			var firstName = 'john';
			var yearOfBirth = 1990;
		}
		console.log(firstName + ',' + 'born in ' + yearOfBirth + ', is now offically allowed to drive a car');
	}

	driversLicense5(true);

	// ES6
	function driversLicense6(passedTest) {
		// let and const are block scope (within curly brackets only!)
		let firstName;
		const yearOfBirth = 1990; // A value must be assigned when using const

		if (passedTest) {
			firstName = 'John';
			console.log(firstName + ',' + 'born in ' + yearOfBirth + ', is now offically allowed to drive a car');
		}


	}

	driversLicense6(true);



	let i = '25';

	for(let i = 0; i < 5; i++){ // This i variable in the forloop does not change due to block scope.
		console.log(i);
	}

	console.log(i);



// Block and IIFEs


	// To make an IIFE all you have to do is create a block using const and let
	{
		const a = 1;
		let b = 2;
		var c = 3;
	}

	console.log(a + b); // This will failed due to block scope with "let" and "const"
	console.log(c); // This will work cause "var is not block scope


	// ES5 IIFE
	(function() {
		var c = 3;
	})();


// Strings

	let firstName = 'Quang';
	let lastName = 'Phong';
	const yearOfBirth = '1994'; // Its const cause you cannot change the value

	function calcAge(year) {
		return 2020 - year;
	}

	// ES5
	console.log('This is ' + firstName + ' ' + lastName + '. He is born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

	// ES6 - instead of adding "+" for your string you can use backtiks "`"
	// This is what we call a template literal
	console.log(`This is ${firstName} ${lastName}. He is born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

	const n = `${firstName} ${lastName}`;
	console.log(n.startsWith('J')); // Does the string start with a J? False
	console.log(n.endsWith('ng')); // True - JS is CASE sensitive!
	console.log(n.includes('on')); // True
	console.log(`${firstName} `.repeat(5)); // Notice how there's a space after the curly bracket


// Arrow Functions

	const years = [1945, 1989, 1923, 1970, 1994];

	// ES5
	// Using the map method, it will pass every element to your function in which will return the result
	var ages5 = years.map(function(element) {
		return 2020 - element;
	});
	console.log(ages5);

	// ES6 - Arrow function (with the arrow no "function" keyword is needed)
	let ages6 = years.map(element => 2020 - element);
	console.log(ages6);

	// You're passing through each element in the years array while the index is the position of the array
	ages6 = years.map((element, index) => `Age element ${index + 1}: ${2020-element}.`);
	console.log(ages6);

	ages6 = years.map((element, index) => {
		const now = new Date().getFullYear(); // Variable now is the present year
		const age = now - element;
		return `Age element ${index + 1}: ${age}.`
	});
	console.log(ages6);

	// Maps extra practice
	let numbers = [1, 4, 9];
	let squared = numbers.map(num => Math.sqrt(num)); // num is your argument that you're passing through in the array
	console.log(squared);
	*/

// Arrow Functions part 2

	// ES5
	/*
	var box5 = {
		color: 'green',
		position: '1',
		// Method
		clickMe: function() {

			var self = this;
			document.querySelector('.green').addEventListener('click', function() { // Call back function
				var str = 'This is box number ' + self.position + ' and it is ' + self.color;
				alert(str);
			})
		}
	}
	box5.clickMe();

	// ES6
	const box6 = {
		color: 'blue',
		position: '2',
		// Method
		clickMe: function() {
			document.querySelector('.blue').addEventListener('click', () => { // Call back function
				var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
		}
	}
	box6.clickMe();


	// ES6 ex 2
	const box6 = {
		color: 'green',
		position: '1',
		clickMe: () => {
			document.querySelector('.green').addEventListener('click', () => { // Call back function
				var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
		}
	}
	box6.clickMe();
	*/

	// ES5 Function Constructor
	function Person(name) {
		this.name = name;
	}

	var friends = ['Bob', 'Jane', 'Mark'];

	// Prototype allows you to add a new propertes to the Person constructor
	Person.prototype.myFriends5 = function(friends)
	{
		var arrFriends = friends.map(function(el)
		{
			return this.name + ' is friends with ' + el;
		}.bind(this)); // This bind points for the "this" in the object constructor

		console.log(arrFriends);
	}

	new Person('John').myFriends5(friends);

	// ES6 Function Constructor
	function Person(name) {
		this.name = name;
	}

	var friends = ['Billy', 'Mary', 'Kevin'];

	Person.prototype.myFriends6 = function(friends)
	{
		var arrFriends = friends.map(el => `${this.name} is friends with ${el}.`);

		console.log(arrFriends);
	}

	new Person('Quang').myFriends6(friends);














