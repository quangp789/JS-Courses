// You can import npm packages directly w/o having to path out. Axios() works the same as fetch(), but returns JSON :D.
import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	// Create an aync method to make an API call
	async getResults(query) {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
			this.result = res.data.recipes; // Grab the recipies from the return data
			// console.log(this.result);
		} catch(error) {
			alert(error);
		}
	}
}
