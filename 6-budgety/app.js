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

	// Create a variable to store all income, expenses, etc
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
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
		// Testing method to show your array in the log
		testing: function() {
			console.log(data)
		}
	};

})();


// UI Controllor
var UIController = (function() {

	// Create a variable to store the class strings
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer:'.income__list',
		expenseContainer:'.expense__list'
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

		addListItem: function(obj, type) { // ????
			var html, newHtml, element;

			// Create HTML string with placeholder text
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="income-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expenseContainer;

				html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div </div>';
			}

			// Replace the placeholder text with some actual data. Replace method replaces our string with new input data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);

			// Insert HTML to DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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

		getDOMstrings: function() {
			return DOMstrings;
		}

	};

})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) { // ????

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

	};

	var updateBudget = function() {

		// 1. Calculate the budget

		// 2. Return the budget

		// 3. Display the budget on the UI
	}

	// Create a method to add the item
	var ctrlAddItem = function() {
		var input, newItem;

		// 1. Get input data. Obtain the input from the UIController
		input = UICtrl.getInput();

		//User must have a valid input to add an item
		if (input.description !== ""  && !isNaN(input.value) && input.value > 0) {

			// 2. Add the item to budget controller
			var newItem = budgetController.addItems(input.type, input.description, input.value);

			// 3. Add the new item to UI
			UICtrl.addListItem(newItem, input.type);

			// 4. Clear the input fields
			UICtrl.clearFields();

			// 5. Calculate and update the budget
			updateBudget();

		}


	};

	// Create an initialization function to execute the event listeners when the page loads
	return {
		init: function() {
			console.log('Application has started.');
			setupEventListeners();
		}
	};

})(budgetController, UIController); // This allows you to use your other modules

// init function will start when the page loads
controller.init();
