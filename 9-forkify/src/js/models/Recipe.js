import axios from 'axios';

export default class Recipe {
	// Recipe are identify by ID which is what we will be passing
	constructor(id) {
		this.id = id;
	}

	// Create an aync method to make an API call
	async getRecipe() {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
			this.title = res.data.recipe.title;
			this.author = res.data.recipe.publisher;
			this.img = res.data.recipe.image_url;
			this.url = res.data.recipe.source_url;
			this.ingredients = res.data.recipe.ingredients;
		} catch (error) {
			console.log(error);
			alert('Something went wrong :(');
		}

	}
		calcTime() {
			// Assuming if we need 15 min for each 3 ingredients
			const numIng = this.ingredients.length; // Ingredients is an array
			const periods = Math.ceil(numIng / 3);
			this.time = periods * 15;
		}

		calcServings() {
			this.servings = 4;
		}

		parseIngredients() {
			// We want to look for any long units and shorten them with our new array
			const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
			const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
			const units = [...unitsShort, 'kg', 'g']; // Destructuring: includes everything in unitsShort

			const newIngredients = this.ingredients.map(el => {
				// Uniform units
				let ingredient = el.toLowerCase(); // convert the element to a lower case

				// Replace the unitLong with the unitShort
				unitsLong.forEach((unit, i) => {
					ingredient = ingredient.replace(unit, unitsShort[i]);
				});

				// Remove parentheses
				ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

				// Parse ingredients into count, unit and ingredient
				const arrIng = ingredient.split(' ');
				const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

				let objIng;
				if (unitIndex > -1) {
					// There is a unit
					// Ex. 4 1/2 cups, arrCount is [4, 1/2] -> eval ("4+1/2")
					// Ex. 4 1/2 cups, arrCount is [4]
					const arrCount = arrIng.slice(0, unitIndex);

					let count;
					if (arrCount.length === 1) {
						count = eval(arrIng[0].replace('-', '+'));
					} else {
						count = eval(arrIng.slice(0, unitIndex).join('+'));
					}

					objIng = {
						count,
						unit: arrIng[unitIndex],
						ingredient: arrIng.slice(unitIndex + 1).join(' ')
					};

				} else if (parseInt(arrIng[0], 10)) {
					// There is no unit, but the first element is a number
					objIng = {
						count: parseInt(arrIng[0], 10),
						unit: '',
						ingredient: arrIng.slice(1).join(' ')
					}

				} else if (unitIndex === -1) {
					// There is no unit and no number in the first position
					objIng = {
						count: 1,
						unit: '',
						ingredient
					}
				}

				return objIng;
			});
			this.ingredients = newIngredients;
		}

	updateServings (type) {
		// Serving
		const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

		// Ingredients
		this.ingredients.forEach(ing => {
			ing.count *= (newServings / this.servings);
		});

		this.servings = newServings;
	}
}
