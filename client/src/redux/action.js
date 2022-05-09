import axios from "axios";
import { DETAILS, ALLRECIPES, CLEAR_RECIPES, CLEAR_DETAILS, ORDER, DIETS, TYPES_DIETS_OF_RECITE } from "./types";

export function getDetail(id) {
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/recipes/' + id)
                .then((res) => { dispatch({ type: DETAILS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
};

export function getRecipes(name) {
    if (name) {
        return async function (dispatch) {
            try {
                return axios.get('http://localhost:3001/recipes?name=' + name)
                    .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                    .catch(err => {
                        if (err.response.status !== 200) alert(`PROBLEMA CON LA BÚSQUEDA: ${err.response.data}`)
                    })
            } catch (error) {
                console.log(error)
            }
        }
    } else {
        return async function (dispatch) {
            try {
                return axios.get('http://localhost:3001/recipes')
                    .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                    .catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export function getDiets() {
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/types')
                .then(res => { dispatch({ type: DIETS, payload: res.data }) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export function setDietsStore(diets) {
    return {
        type: TYPES_DIETS_OF_RECITE,
        payload: diets
    }
}

export function sentApost(payload) {
    return async function (dispatch) {
        try {

            axios.post('http://localhost:3001/recipe', payload)
                .then(res => {
                    if (res.status === 200) alert(res.data)
                })
                .catch(err => {
                    if (err.response.status !== 200) alert(`PROBLEMA CON LA INFORMACIÓN: ${err.response.data}`)
                })

        } catch (error) {
            console.log(error)
        }
    }
}

export function order(x) {
    return {
        type: ORDER,
        payload: x
    }
}

export function clearPage() {
    return {
        type: CLEAR_RECIPES
    }
}

export function clearDetails(){
    return {
        type: CLEAR_DETAILS
    }
}