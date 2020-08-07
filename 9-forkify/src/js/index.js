/* Controller - This is where you do most of the event handling */
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base'; // Imports the element object from base.js


/** Global State of the app
Search object - All the data about the search (search query + results)
Current recipes object
Shopping list object
Liked object
*/

/* SEARCH CONTROLLER */

const state = {};
window.state = state;

const controlSearch = async () => {
	// Read the input from the search bar
	const query = searchView.getInput();

	// Create a new search object containing the query
	if (query) {
		// New search object and add to state object
		state.search = new Search(query);

		// Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			// Perform the search for recipes. Returning a promise b/c its an async function in search.js
			await state.search.getResults(); // Wait for the result to load

			clearLoader();

			// Render results onto the UI. The search results will be stored in the state element. renderResults function will be imported from the searchView.js
			searchView.renderResults(state.search.result);
		}

		catch (error) {
			alert('Something went wrong with your search');
			clearLoader();
		}

	}
}

// Each time you hit the search
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault(); // Prevent default from happening
	controlSearch(); // Function will then be called
});


// Add event handler for when you click 'next' / 'prev'
elements.searchResPages.addEventListener('click', e => {
	// We just want the button seleted when its clicked and not the child element
	const btn = e.target.closest('.btn-inline');

	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10); // 0-9
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}

});

/* RECIPE CONTROLLER */

const controlRecipe = async () => {
	// You want to grab the whole URL with window.location
	const id = window.location.hash.replace('#', '');
	console.log(id);

	if (id) {
		// Prepare UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		// Highlight selected search item
		if (state.search) searchView.highlightSelected(id);

		// Create a new recipe object
		state.recipe = new Recipe(id);

		try {
		// Get recipe data and parse ingredients
		await state.recipe.getRecipe();
		state.recipe.parseIngredients();

		// Calculate serving and time
		state.recipe.calcTime();
		state.recipe.calcServings();

		// Render
		clearLoader();
		recipeView.renderRecipe(
			state.recipe,
			state.likes.isLiked(id)
		);
		}

		catch (error) {
			console.log(error);
			alert('Error processing recipe.');
		}
	}
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/* LIST CONTROLLER */

const controlList = () => {
	// Create a new list IF there is none yet
	if (!state.list) state.list = new List();

	// Add each ingredient to the list and UI
	state.recipe.ingredients.forEach(el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		listView.renderItem(item);
	});
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
	const id = e.target.closest('.shopping__item').dataset.itemid;

	// Handle the delete button
	if (e.target.matches('.shopping__delete, .shopping__delete *')) {
		// Delete from state
		state.list.deleteItem(id);

		// Delete from UI
		listView.deleteItem(id);
	} else if (e.target.matches('.shopping__count-value')) {
		const val = parseFloat(e.target.value, 10);
		state.list.updateCount(id, val);
	}
});

/* LIKE CONTROLLER */


const controlLike = () => {
	if (!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;

	// User has NOT yet liked the current recipe
	if (!state.likes.isLiked(currentID)) {
		// Add like to the state
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img
		);

		// Toggle the like button
		likesView.toggleLikeBtn(true);

		// Add like to UI list
		likesView.renderLike(newLike);

	// User HAS liked current recipe
	} else {
		// Remove like from the state
		state.likes.deleteLike(currentID);

		// Toggle the like button
		likesView.toggleLikeBtn(false);

		// Remove like to UI List
		likesView.deleteLike(currentID);
	}
	likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
	state.likes = new Likes();

	// Restore likes
	state.likes.readStorage();

	// Toggle like menu button
	likesView.toggleLikeMenu(state.likes.getNumLikes());

	// Render the existing likes
	state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		// Decrease button is clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if(e.target.matches('.btn-increase, .btn-increase *')) {
		// Increase button is clicked
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		// Add ingredients to shopping list
		controlList();
	} else if (e.target.matches('.recipe__love, .recipe__love *')) {
		// Like controller
		controlLike();
	}
});

window.l = new List();























