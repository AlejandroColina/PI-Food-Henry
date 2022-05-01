import axios from "axios";
import { DETAILS, ALLRECIPES, CLEARPAGE} from "./types";

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
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/recipes?name='+ name)
                .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                .catch((err) => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export function clearPage(){
    return {
        type: CLEARPAGE
    }
}