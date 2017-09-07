import _ from 'lodash';
import { SELECT_POST, DESELECT_POST } from '../actions';

export default function (state = {}, action) {
    let newState = state;

    switch(action.type) {
        case SELECT_POST:
            return {
                ...state,
                [action.payload]: action.payload,
            };

        case DESELECT_POST:
            return _.omit(state, action.payload);
    }

    return state;
}