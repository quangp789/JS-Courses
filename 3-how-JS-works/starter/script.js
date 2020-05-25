///////////////////////////////////////
// Lecture: Hoisting

/*
// The function calculateAge is already stored in the variable object BEFORE the code is executed.
console.log(calculateAge(1994));
// This is a function declaration.
function calculateAge(year) {
	console.log (2020 - year);
}


// Hoisting this will error out since it only work with function declaration.
//retirement(1994);

// This is not a function declaration, but a function expression.
var retirement = function(year) {
	console.log(65 - (2020 - year));
}

retirement(1994);

// Variables
console.log(age); // This will show undefined. Code is scanned for variable declarations then set the variables to undefined.
var age = 23; // If this variable isnt here then the code will break.
//console.log(age); // Shows 23

function foo() {
	console.log(age); // Hoisting will also work within the function
	var age = 65;
	console.log(age);
}

foo(); // Call the function // Logs 65 because age was created within the function and we are just execution the function

console.log(age); // Logs 23 b/c var age was already defined outside of the function. Making it a global variable
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!'; // Global scope. Cannot access anything inside. Only inside-out.
first();

function first() { // First scope everything within function first function is a local scope. This scope has access to all its parent scope and all variables and functions that it defines.
    var b = 'Hi!';
    second();

    function second() { // Second scope. This function will go out to look for variable B. What we called the "scope chain"
        var c = 'Hey!';
        console.log(a + b + c); // Will print out "Hello!Hey!Hi!" due to scoping chain.
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() { // Will error out b/c this function is not within the scope of the second function.
    var d = 'John';
    console.log(a + b + c + d); // Which means it cannot access variable B + C. Can only access variable A and D
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this); Points at the window object which is the default object

/*
ageCalc(1994);

function ageCalc(year) {
	console.log(2020 - year);
	console.log(this);
}
*/

var quang = {
	name: 'Quang',
	yearOfBirth: 1994,
	ageCalc: function() {
		console.log(this); // Refers to the quang object
		console.log(2020 - this.yearOfBirth); // Calculate the age and logs it

		function innerFunction() { // Function that only points to the window object (Default object)
			console.log(this);
		}
		innerFunction();
	}
}

quang.ageCalc();

var mike = {
	name: 'Mike',
	yearOfBirth: 1990
};

// Method borrowing
mike.ageCalc = quang.ageCalc; // mike.ageCalc is treated as a variable. We want it to be the exact same method as quang.ageCalc

// Now call the function
mike.ageCalc();
