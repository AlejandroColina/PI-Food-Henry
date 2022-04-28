import { DETAILS } from './types';

const initialState = {
    details: []
};

export function reducer(state = initialState, { action, payload }) {
    switch (action) {
        case 'DETAILS':
            return {
                ...state,
                details: payload
            }
        default: return state
    }
};