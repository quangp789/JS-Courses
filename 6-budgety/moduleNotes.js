var budgetControllor = (function() {
	var x = 23;

	function add(a) {
		return x + a;
	}

	// You can access this method since its only being contained by the variable. This method still has access to everything outside of its scope
	return {
		publicTest: function(b) {
			return add(b);
		}
	}

})();

var UIController = (function() {
	// Code
})();

var controller = (function(budgetCtrl, UICtrl) {

	var z = budgetCtrl.publicTest(5);

	return {
		anotherPublic: function() {
			console.log(z);
		}
	}

})(budgetControllor, UIController); // This allows you to use your other modules
