require('dotenv').config()
const APIKEY= '4319acd0dbd04057a612db7cd4e531c5';
const axios = require('axios');

// axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=4319acd0dbd04057a612db7cd4e531c5&addRecipeInformation=true&number=1")
// .then(res => console.log(res.data.results.map(e=>e.title)))