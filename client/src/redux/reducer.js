import { DETAILS, ALLRECIPES, CLEARPAGE, ORDER } from './types';

const initialState = {
    details: [],
    allRecipes: [],
    ordered : ''
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case DETAILS:
            return {
                ...state,
                details: payload
            }
        case ALLRECIPES:
            return {
                ...state,
                allRecipes: payload
            }

        case CLEARPAGE:
            return {
                ...state,
                allRecipes : []
            } 
        
        case ORDER:
            return {
                ...state,
                ordered : payload
            }

        default: return state
    }
};