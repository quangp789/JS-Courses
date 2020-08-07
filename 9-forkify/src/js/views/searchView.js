/* Contains your function and method */

// Imports the element object from base.js
import { elements } from './base';

// Clear the text form the field
export const clearInput = () =>{
	elements.searchInput.value = '';
};

export const clearResults = () => {
	elements.searchResultList.innerHTML = '';
	elements.searchResPages.innerHTML= '';
};

// Write a function to get the input from the search bar
export const getInput = () => elements.searchInput.value;

export const highlightSelected = id => {
	const resultsArr = Array.from(document.querySelectorAll('.results__link'));
	resultsArr.forEach(el => {
		el.classList.remove('results__link--active')
	});

	document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active')
};

/*
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato'] is passed as a final
*/
export const limitRecipeTitle = (title, limit = 17) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);

		// Return the result
		return `${newTitle.join(' ')} ...`;
	}
	return title;
}

// Will render the recipe at the desired location
const renderRecipe = recipe => {
	const markup = `
	<li>
       <a class="results__link" href="#${recipe.recipe_id}">
           <figure class="results__fig">
           		<img src="${recipe.image_url}" alt="${recipe.title}">
           </figure>
           <div class="results__data">
           		<h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
           		<p class="results__author">${recipe.publisher_url}</p>
           </div>
        </a>
    </li>`;
	elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

// type: previous or next page
const createButton = (page, type) =>
				`
				<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
                    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
					<svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                    </svg>
                </button>
				`;

const renderButtons = (page, numResults, resPerPage) => {
	// Calc the number of pages. Math.ceil will always round up
	const pages = Math.ceil(numResults / resPerPage);

	let button;

	if (page === 1 && pages > 1) {
		// Button to go to next page
		button = createButton(page, 'next');
	} else if (page < pages) {
		// You want both buttons
		button = `${createButton(page, 'prev')}
				  ${createButton(page, 'next')}
				 `;
	} else if (page === pages && pages > 1) {
		// Button to go to previous page
		button = createButton(page, 'prev');
	}

	// Insert where you want your buttons (Where you want it, actual button)
	elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

// Loop each recipe and display every single one of them. Result per page 10.
export const renderResults = (recipes, page = 1, resPerPage = 10) => {
	// Render the results of the current page
	const start = (page - 1) * resPerPage;
	const end = page * resPerPage; // Slice does not include the end (which will copy until 9 b/c element starts at 0)

	// Slice returns a new object by passing in where we "start" and "end"
	recipes.slice(start, end).forEach(renderRecipe);

	// Render pagination buttons
	renderButtons(page, recipes.length, resPerPage);
};
