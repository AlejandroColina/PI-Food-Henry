const axios = require('axios');

async function dataApi() {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=b7eb18108243460c86124c1504f3fd43&addRecipeInformation=true&number=100');
        let data = await response.data.results
        return data;
    } catch (error) {
        console.error(`Could not get DATA-API ${error}`)
    }
};

async function findByAPI(id) {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b7eb18108243460c86124c1504f3fd43`)
        let data = await response.data;

        let st = await data?.analyzedInstructions?.map(e => e.steps)?.flat(Infinity)?.map(e => e.step);
        let steps = st.length ? st : 'No contamos con un paso a paso.'

        let obj = {
            id: data.id,
            title: data.title,
            image: data.image,
            summary: data.summary,
            spoonacularScore: data.spoonacularScore,
            healthScore: data.healthScore,
            dishTypes: data.dishTypes,
            diets: data.diets,
            steps: steps
        }
        return obj
    } catch (error) {
        console.error(`Could not get product ID ${error}`)
    }
}

module.exports = {
    dataApi,
    findByAPI
}