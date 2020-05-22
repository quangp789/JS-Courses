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

/*
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
*/

/************************
* Basic Operators
*/

/*
var thisYear, yearQuang, yearMark, ageQuang, ageMark; // You can declare multiple variables on one line
thisYear = 2020;
ageQuang = 25;
ageMark = 33;

//Math Operators
yearQuang = thisYear - 25; // Calculate the year John was born
yearMark = thisYear - 33;

console.log(yearQuang); // Display the year Quang was born

console.log(thisYear + 2);
console.log(thisYear * 2);
console.log(thisYear / 10);

// Logical Operators
var quangOlder = ageQuang > ageMark;
console.log(quangOlder); // Log the varible to see if Quang is older than Mark

// Typeof Operators
console.log(typeof quangOlder); // Typeof - tells us the type of the input variable
console.log(typeof ageQuang); // Displays a number
console.log(typeof 'This is a string') // Displays a string
var x;
console.log(typeof x); // Displays undefined b/c nothing was assign to the variable
*/

/************************
* Basic Precedence
*/

var thisYear, yearQuang, legalAge

thisYear = 2020;
yearQuang = 1994;
legalAge = 21;


// Multiple operators
var isFullAge = thisYear - yearQuang >= legalAge; // Asking if Quang is older than the legal age. '-' takes a higher precedence than '>='
console.log(isFullAge); // Log the console. Displays true.

// Grouping
var ageQuang = thisYear - yearQuang;
var ageMark = 33;
var averageAge  = (ageQuang + ageMark) / 2; //Due to PEMDAS the 2 ages musted by grouped first in order to calculate the average age.
console.log(averageAge);

// Multiple Assignments
var x, y;
x =  y = (3 + 5) * 4 - 6; // 8 * 4 - 6 = 32 - 6 = 26 // Assignment operator works from right to left. Which is why x and y equal to 26
console.log(x, y); // You can log multiple variables

// Additional Operators
x *= 2; // means the exact same thing as x = x * 2
console.log(x);
x += 10;
console.log(x);
x++; // This operator adds one unit to the variable
console.log(x);
x--;
console.log(x);





