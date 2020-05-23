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

/*
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
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

/*
// Declare all the variables that will be used for this challenge
var marksBMI, johnsBMI, marksMass, johnsMass, marksHeight, johnsHeight, highestBMI;

// Assign the height and mass to the variable
johnsHeight = 1.8; // Meters
johnsMass = 81; // KG

marksHeight = 1.7;
marksMass = 71;

// Calculate both BMI
johnsBMI = johnsMass / (johnsHeight * johnsHeight);
marksBMI = marksMass / (marksHeight * marksHeight);

// Display both BMIs
console.log(johnsBMI, marksBMI); // Johns BMI 25, Marks BMI 24.6

// Create a boolean to see to has the higher BMI
highestBMI = marksBMI > johnsBMI;
console.log(highestBMI);

// Print string
console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI ); // Backslash allows you to escape the quotes

*/

/************************
* If/Else Statements
*/

/*
var firstName = 'Quang';
var civilStatus = 'Single';
var isMarried = true;

// Console will say is married because isMarried is already defined true.
if (isMarried) {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + ' will hopefully be married soon.');
}


var marksBMI, johnsBMI, marksMass, johnsMass, marksHeight, johnsHeight, highestBMI;

johnsHeight = 1.8; // Meters
johnsMass = 81; // KG

marksHeight = 1.7;
marksMass = 71;

johnsBMI = johnsMass / (johnsHeight * johnsHeight);
marksBMI = marksMass / (marksHeight * marksHeight);

console.log(johnsBMI, marksBMI); // Johns BMI 25, Marks BMI 24.6

if(marksBMI > johnsBMI) {
	console.log('Mark\'s BMI is higher than John\'s.' );
} else {
	console.log('John\'s BMI is higher than Marks\'s.' );
}
*/

/************************
* Boolean Logic
*/

/*

// And (&&) both has to be True, Or (||) only one needs to be True, Not (!) inverts True/False values

var firstName = 'Quang';
var age = '25';

if (age < 13) {
	console.log(firstName + ' is a boy.');
}	else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
}	else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
}   else {
	console.log(firstName + ' is a man.');
}

*/

/************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'Quang';
var age = '16';

// Question mark represents if and colon represents else.
age >= 21 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 21 ? 'beer' : 'juice'; // The result of this operator will be assigned to drink
console.log(drink);

// What you would write w/o ternary operator
if (age >= 21) {
	console.log(firstName + ' drinks beer')
} else {
	console.log(firstName + ' drinks juice')
}


// Switch Statements
var job = 'teacher';
switch (job) {
	case 'teacher':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber for a living');
		break;
	case 'designer':
		console.log(firstName + ' designs websites for a living');
		break;
	default:
		console.log(firstName + ' does something else for a living');
}


// Sets the boolean to true b/c we want to compare the expressions below.
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}
*/

/************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN (not a number)
// truthy value: Not falsy values

/*
var height;

height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable has not defined');
}

// Equality Operators
// '==' converts the string 23 into a number
if (height == '23') {
	console.log(' The == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// Declare the variables
var johnsAverage, mikesAverage, marysAverage;

// Calculate the average
johnsAverage = (134 + 120 + 103) / 3; //104
mikesAverage = (116 + 95 + 123) / 3; //111
marysAverage = (97 + 134 + 105) / 3; //112

console.log(johnsAverage, mikesAverage, marysAverage);

// Display and log the score depending on who has the highest average using if-else
if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
	console.log('John\'s team is the winner with an average of ' + johnsAverage + ' points.');
} else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
	console.log('Mike\'s team is the winner with an average of ' + mikesAverage + ' points.');
} else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
	console.log('Mary\'s team is the winner with an average of ' + marysAverage + ' points.');
} else {
	console.log('There is a draw between both teams');
}
