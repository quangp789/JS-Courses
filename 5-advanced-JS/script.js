/************************
* Function Constructor
*/

/*
var quang = {
	name: 'Quang',
	yearOfBirth: '1990',
	Job: 'IT'
};


// Function constructor should always start with a capital letter
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

// This will allow all of your Persons object to use this method when making the call. This is called inheritance.
Person.prototype.calculateAge = function() {
	console.log(2016 - this.yearOfBirth);
}

// Properties can also be passed into the Person object
Person.prototype.lastName = 'Smith';

// When "new" is used, it creates a brand new empty object. Which passes the properties into the function.
var quang = new Person('Quang', 1990, 'IT')
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1950, 'Retired');


quang.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(quang.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Practice!

var Console = function(name, releaseDate, popularFranchise, price) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.popularFranchise = popularFranchise;
	this.price = price;
}

Console.prototype.consoleAge = function() {
	console.log(2020 - this.releaseDate);
}

Console.prototype.commonTheme = 'All have DLC';

var sony = new Console('Playstation 4', 2013, 'Final Fantasy', '$200');
var nintendo = new Console('Switch', 2017, 'Mario', '$300');
var microsoft = new Console('Xbox One', 2013, 'Call of Duty','$300');


sony.consoleAge();
nintendo.consoleAge();
microsoft.consoleAge();

// You can find out in the browser if the object has a specific property or not
EX: sony.hasOwnProperty('name') > true
	sony.hasOwnProperty('commonTheme') > false
	sony instanceof Console > true
*/

/************************
* Objects.create
*/

/*
var personProto = {
	calculateAge: function() {
		console.log(2020 - this.yearOfBirth);
	}
}

// You can give the inheritance to the new object by passing the variable using object.create
var quang = Object.create(personProto);
quang.name = 'Quang';
quang.yearOfBrith = 1994;
quang.job = 'IT';

var jane = Object.create(personProto,
{
	name: {value: 'Jane'},
	yearOfBrith: {value: 1969},
	job: {value: 'designer'}
});
*/

/************************
* Primitives vs Objects
*/

/*
// Primities
var a = 23;
var b = a;
a = 46;

console.log(a); // Displays 46
console.log(b); // Displays 23

// Objects
var object1 = {
	name: 'Quang',
	age: 26
};
var object2 = object1;
object1.age = 30;

console.log(object1.age); // Both displays 30 since no new object was created
console.log(object2.age); // Change was reflect on object two since object one was refering object one

// Functions
var age = 27;
var object = {
	name: 'Jonas',
	city: 'Des Moines'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco'
};

change(age, object)
console.log(age); // Age stays the same 27
console.log(object.city); // City changes to San Francisco
*/

/************************
* Passing Function as Arguments
*/

/*
var years = [1990, 1965, 2005, 1994, 2010];

function arrayCalc(arr, fn) { // Takes in the array and another function
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i])); // You loop thought the year array which is inserted into the function, that is pushed into the array.
	}
	return arrRes; // Return new array
}

// El stand for element in this case a generic one that we use.

function calculateAge(el) {
	return 2020 - el;
}

function isFullAge(el) {
	return el >= 21;
}

function maxHeartRate(el) {
	if ( el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	}
	else {
		return -1;
	}

}

var ages = arrayCalc(years, calculateAge); // Since its a call back function (A function you want to call LATER), so you do no need parentheses.
var legalAge = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(legalAge);
console.log(heartRates);
*/

/************************
* Function returning functions
*/

/*
function interviewQuestions(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please what an UX design is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');


teacherQuestion('John');
designerQuestion('Quang');

// You can also return the function and call it right away.
interviewQuestions('Chef')('Mary')
*/

/************************
* IIFE
*/

/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

// The game could also be written this way
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// You can only call an IIFE once. This is not ment to be reused since you cannot access the variable inside of the IIFE.
(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - 5);
})(5);
*/

/************************
* Closures
*/

/*
function retirement(retirementAge) {
	var a = ' years left until retirement.'
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a) ;
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1994);
retirementGermany(1994);
retirementIceland(1994);

// Pratice!
function interviewQuestions(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', can you please what an UX design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach ' + name + '?');
		} else {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

interviewQuestions('designer')('Quang');
*/

/************************
* Bind, Call, and Apply
*/

/*
var quang = {
	name: 'Quang',
	age: 25,
	job: 'Teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}

quang.presentation('formal', 'morning');

var emily = {
	name: 'Emily',
	age: 35,
	job: 'Designer'
};

// Method Borrowing: Calling a method from another object
quang.presentation.call(emily, 'friendly', 'afternoon');

// Applied Method - This wont work since our method does not expect to recieve an array.
//quang.presentation.call(emily, ['friendly', 'afternoon']);

// Bind Method
var quangFriendly = quang.presentation.bind(quang, 'friendly'); // This returns a function
quangFriendly('evening');

var emilyFormal = quang.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 2005, 1994, 2010];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i])); // You loop thought the year array which is inserted into the function, that is pushed into the array.
	}
	return arrRes; // Return new array
}

// El stand for element in this case a generic one that we use.

function calculateAge(el) {
	return 2020 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge); // First calculate the years in the array
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))

console.log(ages);
console.log(fullJapan);
*/

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Add the IIFE
(function() {
 // Build the function constructor
function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

// This will allow your questions to use this method when making the call depending on the question generated randomly
Question.prototype.displayQuestion = function() {
	console.log(this.question);

	//Display the answers
	for (var i = 0; i < this.answers.length; i++) { // Loops through all the possible answers in the array
		console.log(i + ': ' + this.answers[i]); // We want to display the element postion as well as the array
	}
}

Question.prototype.checkAnswer = function(ans) { // Passing in the answer from the user
		if (ans === this.correct) {
			console.log('Correct Answer!');
		} else {
			console.log('Wrong Answer. Try again!');
	}
}


// Create your questions
var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0); // The number at the end represents the correct answer
var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

// Store the questions in the array
var questions = [q1, q2, q3];

// Generate a random number for the questions
var randomNum = Math.floor(Math.random() * questions.length);// Generates a random WHOLE number between 0 and the total number of elements in the array

// Display the question into a console.
questions[randomNum].displayQuestion();

// Prompt a box for user to answer
var answer = parseInt(prompt('Please select the correct answer.')); // Converts an integer into a number

// Check the answer
questions[randomNum].checkAnswer(answer);
 })();

