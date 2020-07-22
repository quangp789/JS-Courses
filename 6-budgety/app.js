/* To-Do
UI Module:
	Get data from users input field
	Add the new item to the UI
	Update the UI
Data Module:
	Add the new item to the data structure
	Calculate the budget
Controller Module:
	Add event handler to the button
*/

// BUDGET CONTROLLOR - Keeps track of all incomes, expenses, budget, and percentages
var budgetController = (function() {

	// Create function constructors for expenses and income
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	// Create a new method to calculate the percentage. Prototype allows you to add new method to your expense constructure
	Expense.prototype.calcPercentage = function(totalIncome) {

		if (totalIncome > 0) {
			this.percentage = Math.round((this.value / totalIncome) * 100);
		} else {
			this.percentage = - 1;
		}
	};

	// Return the calculated percentage
	Expense.prototype.getPercentage = function() {
		return this.percentage;
	}

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	// Calculate the total of your income/expense
	var calculateTotal = function(type) {
		var sum = 0;

		// Loop the array to get the sum of the current value within the array
		data.allItems[type].forEach(function(cur) {
			sum += cur.value;
		});

		data.totals[type] = sum;
	};

	// Create a variable to store the types(income, expenses, etc)
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1
	};

	// Create a public method to add an expense or income to our data variable
	return {
		addItems: function(type, des, val) {
			var newItem, ID;

			// Create a new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}


			// Create a new item based on the expense or income being selected
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// Add our object to our array
			data.allItems[type].push(newItem);

			// Return our new array with the object added
			return newItem;

		},

		// Create a method to delete an item from the structure
		deleteItem: function(type, id) {

			var ids, index;

			// Select all items in the data array and return a new array using map
			ids = data.allItems[type].map(function(current) {
				return current.id;
			});

			// Retrieve the index of the current position in the array
			index = ids.indexOf(id);

			// If the index position is in the array (array starts at 0)
			if (index !== -1) {
				// Select the postion in the array(index), then remove the desired element(1)
				data.allItems[type].splice(index, 1);
			}

		},

		// Create a method to calculate the budget
		calculateBudget: function() {

			// Calculate total income and expense
			calculateTotal('exp');
			calculateTotal('inc');

			// Calculate the budget: Income - Expenses
			data.budget = data.totals.inc - data.totals.exp;

			// Calculate the percentage of the income on how much we spent. Round to the nearest integer
			if (data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;
			}

			// Expense = 100 and income = 22, spend 50% = 100/200 = .5 * 100

		},

		// Create a method to calculate the percentage of your expenses
		calculatePercentages: function() {

			// Calculate the percentage of all your current expenses in the array
			data.allItems.exp.forEach(function(current){
				current.calcPercentage(data.totals.inc);
			});

		},

		// Create a method to get the percentage
		getPercentages: function() {

			// Return the percentage. Map returns the item and stores it back into the array
			var allPercentages = data.allItems.exp.map(function(current) {
				return current.getPercentage();
			});

			return allPercentages;
		},

		// Return the calculate variables
		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			};
		},

		// Testing method to show your array in the log
		testing: function() {
			console.log(data)
		}
	};

})();


// UI CONTROLLER
var UIController = (function() {

	// Create a variable to store the class strings
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer:'.income__list',
		expenseContainer:'.expense__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expenseLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container',
		expensesPercentageLabel: '.item__percentage',
		dateLabel: '.budget__title--month'
	};

	// Create a method to properly format the numbers
	var formatNumber = function(num, type) {

		var numSplit, int, dec, type;

		/*
		2230.1238 > + 2230.12
		*/

		// abs - Returns the absoluate value of a number
		num = Math.abs(num);
		// Convert a number into a string, rounding the number to 2 decimals
		num = num.toFixed(2);
		// Place a period between the whole number and the decimal
		numSplit = num.split('.');

		int = numSplit[0];

		// If the intege is greater than 3, add a comma.
		if (int.length > 3) {
			// substr - extracts the characters from a string. It includes the start but not the end.
			int = int.substr(0, int.length - 3) + ',' +int.substr(int.length - 3, 3); // input: 23456 output: 23,456
		}

		dec = numSplit[1];

		// If type is expense then sign should be minus else its plus > 123456.098 = + 123,456.09
		return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

	};

	//???
	var nodeListForEach = function(list, callback) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i);
		}
	};

	// Return the methods back to the public
	return {
		// Get the user input data
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Will increase or decrease. Value is "inc" or "exp"
				description: document.querySelector(DOMstrings.inputDescription).value, // Gets the input value
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value) // Convert the string into a integer using parse
			};
		},

		addListItem: function(obj, type) { // You'll need to pass argument: object (newItem) and the type (inc or exp)
			var html, newHtml, element;

			// Create HTML string with placeholder text
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;

				// Store the html div into a variable
				html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expenseContainer;

				html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div </div>';
			}

			// Replace the placeholder text with some actual data. Replace function replaces our string with new input data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

			// Insert HTML to DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},

		// Remove the list item from the UI
		deleteListItem: function(selecterID) {

			var el = document.getElementById(selecterID);
			el.parentNode.removeChild(el);
		},

		// Clear the input fields
		clearFields: function() {
			var fields, fieldsArr;

			// Select the 2 fields. This returns a list
			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			// Convert the list into an array.
			fieldsArr = Array.prototype.slice.call(fields);

			// Loops over the array and clear all the fields that are selected.
			fieldsArr.forEach(function(current, index, array) {
				current.value = "";
			});
			// Reset focus back to description
			fieldsArr[0].focus();
		},

		// Display your budget onto you webpage
		displayBudget: function(obj) {
				var type;
				// If the budget > 0 then type is inc else exp
				obj.budget > 0 ? type = 'inc' : type = 'exp';

				document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
				document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
				document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');

			// You want to make sure it displays ether an empty percentage or and actual percentage with the symbol
			if (obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},

		// Create a method to display your percentages
		displayPercentages: function(percentages) {

			// querySelectorAll - returns a node list and stores it into the variable
			var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

			// Loop each element of the node list and update the value (no calculations done here)
			fields.forEach(function(value, index) {
				if (percentages[index] > 0) {
					value.innerText = percentages[index] + '%';
				} else {
					value.innerText = '---';
				}
			});

		},

		// Create a method to display the month and year
		displayMonth: function() {

			var now, month, year;

			// Date object is used to work with date and times. Returns present date if nothing is passed
			now = new Date();

			// Store all the months into an array
			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			month = now.getMonth();

			year = now.getFullYear();
			document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

		},

		// You want to change the outline color when exp is selected
		changedType: function() {

			 var fields = document.querySelectorAll(
			 	DOMstrings.inputType + ',' +
				DOMstrings.inputDescription + ',' +
				DOMstrings.inputValue);

			//????
			nodeListForEach(fields, function(current) {
				current.classList.toggle('red-focus');
			});

			document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
		},

		getDOMstrings: function() {
			return DOMstrings;
		}

	};

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) { // Refereces budgetController and UIController since we have access to other module
	// Event listener
	var setupEventListeners = function() {

		// Retrieve the DOMstring variable from UIController (Closure)
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // No need parenthesis cause the .addEventListener will do that for us. Call back function

		// Add key press event listener. Keypress is when you hit any button
		document.addEventListener('keypress', function(event) {

			if (event.keyCode === 13 || event.which === 13) { // Keycode 13 is enter
				ctrlAddItem();
			}
		});

		// You want to run the function ctrlDeleteItem when the button is clicked
		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

		document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType)

	};

	var updateBudget = function() {

		// 1. Calculate the budget
		budgetCtrl.calculateBudget();

		// 2. Return the budget
		var budget = budgetCtrl.getBudget();

		// 3. Display the budget on the UI
		UICtrl.displayBudget(budget);
	}

	var updatePercentages = function () {

		// Calculate percentage
		budgetCtrl.calculatePercentages();

		// Read the percentage from budget controller
		var percentages = budgetCtrl.getPercentages();

		// Update the UI with the new percentages
		UICtrl.displayPercentages(percentages);

	};

	// Create a function to add the item
	var ctrlAddItem = function() {
		var input, newItem;

		// 1. Get input data. Obtain the input from the UIController
		input = UICtrl.getInput();

		// User must have a valid input to add an item
		if (input.description !== ""  && !isNaN(input.value) && input.value > 0) {

			// 2. Add the item to budget controller
			var newItem = budgetController.addItems(input.type, input.description, input.value);

			// 3. Add the new item to UI
			UICtrl.addListItem(newItem, input.type);

			// 4. Clear the input fields
			UICtrl.clearFields();

			// 5. Calculate and update the budget
			updateBudget();

			// 6. Calculate and update percentages
			updatePercentages();

		}


	};

	var ctrlDeleteItem = function(event) {

		var itemID, splitID, type, ID;

		// This stores the id of the parentNode (times 4) and stores it into a variable
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

		if (itemID) {

			// Splits the ID into 2 seperate strings in this case your type (inc or exp) and put them into an array
			splitID = itemID.split('-');
			type = splitID[0];
			ID = parseInt(splitID[1]); // Will need to parse this since its a string and not a integer

			// Delete the item from the data structure
			budgetCtrl.deleteItem(type, ID);

			// Delete the item from the user interface
			UICtrl.deleteListItem(itemID);

			// Update and show the new budget
			updateBudget();

			// Calculate and update percentages
			updatePercentages();

		}

	};

	// Create an initialization function to execute the event listeners when the page loads
	return {
		init: function() {
			console.log('Application has started.');
			UICtrl.displayMonth();
			UICtrl.displayBudget({
				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: -1
			});
			setupEventListeners();
		}
	};

})(budgetController, UIController); // This allows you to use your other modules

// init function will start when the page loads
controller.init();
