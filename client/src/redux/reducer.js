import { DETAILS, ALLRECIPES, CLEAR_RECIPES, ORDER, DIETS, TYPES_DIETS_OF_RECITE, POST, CLEAR_DETAILS } from './types';

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

        case CLEAR_RECIPES:
            return {
                ...state,
                types_diets_of_recite: []
            }

        case CLEAR_DETAILS:
            return {
                ...state,
                details: []
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