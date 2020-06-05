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





