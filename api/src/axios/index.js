const axios = require('axios');
const { Diet,
    API_KEY1,
    API_KEY2,
    API_KEY3,
    API_KEY4,
    API_KEY5 } = require('../db');

async function dataApi() {
    try {
        let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`)
        let data = await response.data.results
        return data
    } catch (error) {
        console.error(`Could not get DATA-API ${error}`)
    }
}

async function findByAPI(id) {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`)
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

(async () => {
    try {
        let diets = [];
        const response = await dataApi();
        response?.map(res => diets.push(res.diets));
        diets = [...new Set(diets.flat())]?.map(diet => {
            Diet.findOrCreate({
                where: { title: diet },
                defaults: { title: diet }
            })
        })
        return await Promise.all(diets);
    } catch (error) {
        console.error(error)
    }
})()

module.exports = {
    dataApi,
    findByAPI,
}