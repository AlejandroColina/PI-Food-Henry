import axios from "axios";
import { DETAILS, ALLRECIPES } from "./types";

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

export function getRecipes() {
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/recipes/')
                .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                .catch((err) => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}