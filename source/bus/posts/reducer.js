// Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POST, CREATE_POST } from './types';

const initialState = List();

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case FILL_POST :
            return fromJS(payload);

        case CREATE_POST :
            return state.unshift(fromJS(payload));

        default: return state;
    }
};
