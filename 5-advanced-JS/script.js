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

