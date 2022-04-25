const axios = require('axios');

async function data() {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=4319acd0dbd04057a612db7cd4e531c5&addRecipeInformation=true&number=3');
        // if (response.ok != 200) throw new Error(`Error HTTP: ${response.status}`);
        let data = await response.data.results
        return data;
    } catch (error) {
        console.error(`Could not get products ${error}`)
    }
};

module.exports = data;