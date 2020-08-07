/* Create an object that contains all the of the elements that we select from the dom */
export const elements = {
	searchForm: document.querySelector('.search'),
	searchInput: document.querySelector('.search__field'),
	searchResultList: document.querySelector('.results__list'),
	searchRes: document.querySelector('.results'),
	searchResPages: document.querySelector('.results__pages'),
	recipe: document.querySelector('.recipe'),
	shopping: document.querySelector('.shopping__list'),
	likesMenu: document.querySelector('.likes__field'),
	likesList: document.querySelector('.likes__list')
};

export const elementStrings = {
	loader: 'loader',
};

// Render Loader
export const renderLoader = parent => { // You want to pass in the parent then attach the loader as a child element to the parent
	const loader = `
	<div class="${elementStrings.loader}">
		<svg>
			<use href="img/icons.svg#icon-cw"></use>
		</svg>
	</div>
	`;
	parent.insertAdjacentHTML('afterbegin', loader); // This is where you attach to the parent
};

export const clearLoader = () => {
	const loader = document.querySelector(`.${elementStrings.loader}`);
	if (loader) loader.parentElement.removeChild(loader);
}
