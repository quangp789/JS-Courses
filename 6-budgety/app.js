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

// Budget Controller - Keeps track of all incomes, expenses, budget, and percentages
var budgetController = (function() {

	// Create function constructors for expenses and income
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	// Create an object to store all income, expenses, etc
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0,
		}
	};

	// Create a public method to add an expense or income
	return {
		addItems: function(type, des, val) {
			var newItem, ID;

			ID = data.allItems[type][data.allItems[type].length - 1].id;

			// Create an object based on the expense or income being selected
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// Add our object to our array
			data.allItems[type].push(newItem);

			// Return our new array with the object added
			return newItem;

		}
	}

})();


// UI Controllor
var UIController = (function() {

	// Create a variable to store the class strings
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}

	// Return the methods back to the public
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Will increase or decrease. Value is "inc" or "exp"
				description: document.querySelector(DOMstrings.inputDescription).value, // Gets the input value
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}

	};

})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

	// Event listener
	var setupEventListeners = function() {

		// Retrieve the DOMstring variable from UIController
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // No need parenthesis cause the .addEventListener will do that for us. Call back function

		// Add key press event listener. Keypress is when you hit any button
		document.addEventListener('keypress', function(event) {

			if (event.keyCode === 13 || event.which === 13) { // Keycode 13 is enter
				ctrlAddItem();
			}
		});

	};


	var ctrlAddItem = function() {
		// 1. Get input data. Obtain the input from the UIController
		var input = UICtrl.getInput();

		// 2. Add the item to budget controller

		// 3. Add the new item to UI

		// 4. Calculate the budget

		// 5. Display the budget

	};

	// Create an initialization function to execute the event listeners when the page loads
	return {
		init: function() {
			console.log('Application has started.');
			setupEventListeners();
		}
	};

})(budgetControllor, UIController); // This allows you to use your other modules

// init function will start when the page loads
controller.init();
