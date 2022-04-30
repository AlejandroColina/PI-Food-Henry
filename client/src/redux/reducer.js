import { DETAILS } from './types';

const initialState = {
    details: []
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case DETAILS:
            return {
                ...state,
                details: payload
            }
        default: return state
    }
};