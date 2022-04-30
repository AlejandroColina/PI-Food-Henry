import { DETAILS, ALLRECIPES } from './types';

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
        default: return state
    }
};