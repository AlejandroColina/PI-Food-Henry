import { DETAILS, ALLRECIPES, CLEARPAGE, ORDER, DIETS, TYPES_DIETS_OF_RECITE, POST } from './types';

const initialState = {
    details: [],
    allRecipes: [],
    diets: [],
    types_diets_of_recite: [],
    ordered: ''
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
                allRecipes: []
            }

        case ORDER:
            return {
                ...state,
                ordered: payload
            }

        case DIETS:
            return {
                ...state,
                diets: payload
            }

        case TYPES_DIETS_OF_RECITE:
            return {
                ...state,
                types_diets_of_recite: payload
            }

        case POST:
        return {
            ...state
        }

        default: return state
    }
};