/************************
* Variables and data type
*/

/*
// Declaring a variable
var firstName = 'Quang';

console.log(firstName); // Log firstName to console

var lastNAme = 'Phong';
var age = '25';

var fullAge = true; // Set variable to true
console.log(fullAge); // Log the variable, should show true

var job; // Declare a varible but do not assisgn a variable
console.log(job); // Variable should show as undefined

job = 'IT'; // Variables can later be assigned
console.log(job);

//variables cannot start with a number or keywords
var _3years = 3; // But can start with underscore or dollar symbol
var function = 23;
*/

/************************
* Variable Mutation and type coercion
*/

var firstName = 'Quang';
var age = 25;

// Type Coercion
console.log(firstName + ' ' + age); // JS converts the variables into a string automatically

var job, isMarried;
job = 'IT';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty five'; // Age was already defined so we do not need "var" keyword since we are updating it
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // Alert - pop up window when you load into the page

var lastName = prompt('What is his last name?'); // Prompt - pop up will allow you to enter a last name which stores into the variable
console.log(firstName + ' ' + lastName);











