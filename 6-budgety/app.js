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

// Budget Controller
var budgetControllor = (function() {


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
				type: document.querySelector(DOMstrings.inputType).value, // Will increase or decrease. Value is already determind in HTML
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

	// Retrieve the DOMstring variable from UIController
	var DOM = UICtrl.getDOMstrings();

	var ctrlAddItem = function() {
		// 1. Get input data. Obtain the input from the UIController
		var input = UICtrl.getInput();
		console.log(input);

		// 2. Add the item to budget controller

		// 3. Add the new item to UI

		// 4. Calculate the budget

		// 5. Display the budget

	}

	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // No need parenthesis cause the .addEventListener will do that for us. Call back function

	// Add key press event listener. Keypress is when you hit any button
	document.addEventListener('keypress', function(event) {

		if (event.keyCode === 13 || event.which === 13) { // Keycode 13 is enter
			ctrlAddItem();
		}

	});

})(budgetControllor, UIController); // This allows you to use your other modules
