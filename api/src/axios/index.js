const axios = require('axios');

async function data() {
    // try {
    //     const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=b7eb18108243460c86124c1504f3fd43&addRecipeInformation=true&number=100');
    //     let data = await response.data.results
    //     return data;
    // } catch (error) {
    //     console.error(`Could not get products ${error}`)
    // }
};

async function findByAPI(id) {
    // const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b7eb18108243460c86124c1504f3fd43`)
    // let data = await response.data
    // let obj = {
    //     id : data.id,
    //     nombre: data.title,
    //     imagen : data.image,
    //     resumenPlato: data.summary,
    //     puntuacion: data.spoonacularScore,
    //     nivelSaludable: data.healthScore,
    //     tipoPlato: data.dishTypes,
    //     dietas: data.diets,
    //     pasoApaso: data.steps
    // }
    // return obj
}

module.exports = {
    data,
    findByAPI
}