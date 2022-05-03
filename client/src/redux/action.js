import axios from "axios";
import { DETAILS, ALLRECIPES, CLEARPAGE, ORDER} from "./types";

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
    if(name){
        return async function (dispatch) {
            try {
                return axios.get('http://localhost:3001/recipes?name='+ name)
                    .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                    .catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
    }else{
        return async function (dispatch) {
            try {
                return axios.get('http://localhost:3001/recipes?name=')
                    .then((res) => { dispatch({ type: ALLRECIPES, payload: res.data }) })
                    .catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export function order(x){
    return {
        type: ORDER,
        payload: x
    }
}

export function clearPage(){
    return {
        type: CLEARPAGE
    }
}