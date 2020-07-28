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
	function driversLicense5(passedTest) { // passing in an boolean arguement
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

	// ES5 IIFE
	(function() {
		var c = 3;
	})();

	// ES6 IIFE - To make an IIFE all you have to do is create a block using const and let
	{
		const a = 1;
		let b = 2;
		var c = 3;
	}

	console.log(a + b); // This will failed due to block scope with "let" and "const"
	console.log(c); // This will work cause "var is not block scope

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
	// Using the map method, it will pass every element to your function in which will return the result in a new array
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


// Destructuring

	// ES5
	var john = ['John', 26];
	//var name = john[0];
	//var age = john[1];

	//ES6
	const [name, year] = ['John', 26];
	console.log(name);
	console.log(year);

	const obj = {
		firstName: 'Quang',
		lastName: 'Phong',
	};

	const {firstName, lastName} = obj;
	console.log(firstName, lastName);

	const {firstName: a, lastName: b} = obj; // You can assign a letter to your object
	console.log(a, b);

	// Function Destructuring
	function calcAgeRetirement(year){
		const age = new Date().getFullYear() - year; // Calculate the age
		return [age, 65 - age]; // Return your age and years left before retirement
	}

	const [age2, retirement] = calcAgeRetirement(1994);
	console.log(age2, retirement);


	// Arrays
	const boxes = document.querySelectorAll('.box') // Select all the CSS with a class of box

	// ES5

	var boxesArr5 = Array.prototype.slice.call(boxes);
	boxesArr5.forEach(function(cur) {
		cur.style.backgroundColor = 'dodgerblue';
	});


	// ES6
	const boxesArr6 = Array.from(boxes);
	Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'red');

	// ES5 For Loop

	for(var i = 0; i <boxesArr5.length; i++) {

		// If this element has the class name of "box blue"
		if(boxesArr5[i].className === 'box blue') {
			continue; // skip this class name and move on to the next element in the array
		}

		boxesArr5[i].textContent = 'I changed to blue!';

	}


	// ES6 For Loop
	// We can define our current element of the array
	for (const cur of boxesArr6) {
		if(cur.className.includes('blue')) {
			break;
		}
		cur.textContent = 'I changed to blue!';
	}

	// ES5
	var ages = [12, 13, 17, 19, 9, 26];

	// Return a new array of all the elements that are greater than 18
	var fullAge = ages.map(function(cur) {
		return cur >= 18;
	});

	console.log(fullAge);

	console.log(fullAge.indexOf(true));
	console.log(ages[fullAge.indexOf(true)]);

	// ES6
	console.log(ages.findIndex(cur => cur >= 18)); // Returns the first position(index) that is true
	console.log(ages.find(cur => cur >= 18)); // Returns the first element that is true


// Spread Operator

	function addFourAges (a, b, c, d) {
		return a + b + c + d;
	}

	var sum1 = addFourAges(12, 14, 22, 12);
	console.log(sum1);

	// ES5
	var ages = [12, 14, 22, 12];
	var sum2 = addFourAges.apply(null, ages); // Call your function and use the apply method on ages variable. Null is the position of the array

	console.log(sum2);

	// ES6
	const sum3 = addFourAges(...ages); // "..." adds all the element in the array.
	console.log(sum3);

	// Joining family names
	const familySmith = ['John', 'Jane', 'Mark'];
	const familyMiller = ['Mary', 'Bob', 'Ann'];

	const joinFamily = [...familySmith, ...familyMiller];
	console.log(joinFamily);

	const h = document.querySelector('h1'); // No # or . needed cause its an element and not an ID or class
	const boxes = document.querySelectorAll('.box');

	const all = [h, ...boxes]; // Combine both h and boxes into 1 array
	Array.from(all).forEach(cur => cur.style.color = 'purple'); // For each element in the "all" array you want to change the styling to 														 // purple

// Rest Parameters

	function isFullAge5() {
		//console.log(arguments);
		var argsArr = Array.prototype.slice.call(arguments); // Change your argument property to an array

		argsArr.forEach(function(cur) {

			var presentYear = new Date().getFullYear(); // Obtain the full year and store into a variable

			console.log((presentYear - cur) >= 18); // Log the year to console with calculations
		})

	}

	isFullAge5(1990, 1999, 1965, 2016, 1987);


	// ES6
	function isFullAge6(...years) {

		var presentYear = new Date().getFullYear();

		years.forEach(cur => console.log((presentYear - cur) >= 18)); //For each element you pass, you want the boolean result of anything greater than 18
	}

	isFullAge6(1990, 1999, 1965, 2016, 1987);


	// Rest perameter continue..
	function isFullAge5(limit) {

		var argsArr = Array.prototype.slice.call(arguments, 1); // Starts at position 1. Function will skip element 0.

		argsArr.forEach(function(cur) {

			var presentYear = new Date().getFullYear();

			console.log((presentYear - cur) >= limit);
		})

	}

	isFullAge5(21, 1990, 1999, 1965, 2016, 1987);


	// ES6
	function isFullAge6(limit, ...years) { // You can pass as much years as you want

		var presentYear = new Date().getFullYear();

		years.forEach(cur => console.log((presentYear - cur) >= limit)); // Refers to position 0 in the arguments passed
	}

	isFullAge6(16, 1990, 1999, 1965, 2016, 1987);


// Default Parameters

	function phongPerson(firstName, yearOfBirth, lastName,  nationality) {

		lastName === undefined ? lastName = 'Phong' : lastName; // If lastname is undefined then its = to Phong else its lastName
		nationality === undefined ? nationality = 'American' :lastName;


		this.firstName = firstName;
		this.lastName = lastName;
		this.yearOfBirth = yearOfBirth;
		this.nationality = nationality;
	}


	//ES6
	// Default parameters can be defined within the argument
	function phongPerson(firstName, yearOfBirth, lastName = 'Phong', nationality = 'American') {
		this.firstName = firstName;
		this.lastName = lastName;
		this.yearOfBirth = yearOfBirth;
		this.nationality = nationality;
	}

	var quang = new phongPerson('Quang', 1990); //JS will assigned undefined to the other parameters

	var jane = new phongPerson('Jane', 1994, 'Smith', 'Spanish');


// Maps

	const question = new Map();
	question.set('question', 'What is the official name of the latest major JS version?'); // Key-Value pair of your new map

	// Answer Choices
	question.set(1, 'ES5');
	question.set(2, 'ES6');
	question.set(3, 'ES2015');
	question.set(4, 'ES7');

	// Add correct answer
	question.set('correct', 3);
	question.set(true, 'Correct Answer!');
	question.set(false, 'Wrong Answer! Please try again.');

	// Retrieve data from this map
	// console.log(question.size); // Size will check the length of your map

	if(question.has(4)) {
		// question.delete(4); // This will remove your key number 4(4th choice)
		console.log('Answer 4 is here')
	};

	// question.clear(); // Deletes all your map objects

	// Loops can also work on maps
	question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));



	// Stores the key and value pair into seperate values. Print the value if the key is a number
	console.log(question.get('question')); // This will get the question of the object

	for (let [key, value] of question.entries()) {
		if (typeof(key) === 'number') {
			console.log(`Answer ${key}: ${value}`);
		}
	}

	const ans = parseInt(prompt('Write the correct answer')); // Change the input from string to a int

	console.log(question.get(ans === question.get('correct'))); // If the input is the same as the answer then the expression will be true
	*/

// Classes

	//ES5
	// create a function constructor
	var Person5 = function(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	// create a calculateAge mathod
	Person5.prototype.calculateAge = function() {
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}

	// display your persons age
	var quang5 = new Person5 ('Quang', 1994, 'IT');


	//ES6
	class Person6 {
		constructor (name, yearOfBirth, job) {
			this.name = name;
			this.yearOfBirth = yearOfBirth;
			this.job = job;
		}

		// Functions can directly add to the class
		calculateAge() {
			var age = new Date().getFullYear() - this.yearOfBirth;
			console.log(age);
		}

		// Static classes
		static greeting() {
			console.log('Hey there!');
		}
	}

	const quang6 = new Person6('Quang', 1994, 'IT');

	Person6.greeting();

	quang6.calculateAge();










