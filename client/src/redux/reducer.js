import { DETAILS, ALLRECIPES, CLEARPAGE } from './types';

const initialState = {
    details: [],
    allRecipes: []
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

        default: return state
    }
};