import { DETAILS, ALLRECIPES, CLEAR_RECIPES, ORDER, DIETS, TYPES_DIETS_OF_RECITE, POST, CLEAR_DETAILS, DELETE, FAVORITES } from './types';

const initialState = {
    details: [],
    allRecipes: [],
    diets: [],
    types_diets_of_recite: [],
    ordered: '',
    favorites: []
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

        case DELETE:
            return {
                ...state,
                allRecipes: state.allRecipes.filter(item => item.id !== payload),
                favorites : state.favorites.filter(item => item.id !== payload)
            }

        case FAVORITES:
            return {
                ...state,
                favorites: state.favorites.some(item => item.id === payload)
                    ? [...state.favorites]
                    : [...state.favorites, state.allRecipes.find(item => item.id === payload)]
            }

        default: return state
    }
};