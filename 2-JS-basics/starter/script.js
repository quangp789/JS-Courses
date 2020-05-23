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
/*

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

*/

/************************
* Function
*/

/*
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageQuang = calculateAge(1994); //1994 is the birthyear that we pass into the function when calling the function
var ageMike = calculateAge(1986);
var ageMary = calculateAge(1990);
console.log(ageQuang, ageMary, ageMike);

// Create a function that youll be passing in with the following arguments
function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year); // Call the calculateAge function by passing your birthyear. It will then store into the age variable.
	var retirement = 65 - age; // Now calculate years left before you retire at 65

	if (retirement > 0) {
	console.log(firstName + ' retires in ' + retirement + ' years. '); // Log the result into console.
	} else {
		console.log(firstName + ' is already retired.');
	}
}

yearsUntilRetirement(1994, 'Quang');
yearsUntilRetirement(1935, 'Mike');
yearsUntilRetirement(1990, 'Mary');
*/

/************************
* Function Statements and expressions
*/

/*
// Function declaration
// EX: function whatDoYouDo(job, firstName) {}


// Functions can be stored into a variable or called Function Expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code.'; // Return does not only return the value but also completes the function
		case 'driver':
			return firstName + ' drives a truck for a living.';
		case 'designer':
			return firstName + ' designs websites.';
		default:
			return firstName + ' does something else.';
	}
}

console.log(whatDoYouDo('designer', 'Quang')); // You can also directly log the function as well.
console.log(whatDoYouDo('server', 'Mark'));
console.log(whatDoYouDo('teacher', 'Mary'));

// Function Statement EX: 2+3 which will return 5
// Function Expression EX: whatDoYouDo function is an expression because it produces a result. EX: typeof 23 returns "number".
*/

/************************
* Arrays
*/

// 2 ways you can create an array. Initialize the array
var names = ['Quang', 'John', 'Mark']; // Element goes as the following: 0, 1, 2
var years = new Array(1994, 1969, 1948);

console.log(names[2]); // Calls the whole array
console.log(names.length); // Shows how many elements are in the array

// Mutate the array data
names[1] = 'Mary'; // Select the array and positon and give it a new name.
names[names.length] = 'June'; // Adds a new string to the next element postion in the array.
console.log(names);

// Different data types
var quang = ['Quang', 'Phong', '1994', 'IT', false];

quang.push('blue'); // Push method allows you to add a new element to the array as well.
quang.unshift('Mr'); // Unshift adds a new element to the beginning of the array.
console.log(quang);

quang.pop(); // Removes the last element of the array.
quang.pop();
quang.shift(); // Removes the first element of the array
console.log(quang);

console.log(quang.indexOf(1994)); // Returns the position of the element of the array. Will return -1 if element is not in the array

// We ask if designer is in the array. Which is not which will then equal to -1 which means that I am not a designer.
var isDesigner = quang.indexOf('designer') === -1 ? 'Quang is NOT a designer.' : 'Quang IS a designer';
console.log(isDesigner);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// Create a function to calculate tip
function calculateTip(bill) {

	// Create a variable that contains the percentage that will need to be tipped
	var percentage;

	if (bill < 50) {
		percentage = .2;
	} else if (200 < bill <= 50) {
		percentage = .15;
	} else {
		percentage = .1;
	}

	// Return the calculated tip
	return percentage * bill;
}

// Test the function
console.log(calculateTip(100));

// Create a variable containing the bills
var bills = [];
bills.push(124, 48, 268)

// Pass the array into the function and store it in the variable
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

// Add the calculated tip to the array and store it into a variable
var totalAmount = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])];

// Display the tips and the total amount.
console.log(tips, totalAmount);










