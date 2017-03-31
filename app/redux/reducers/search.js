import {ACTION_GET_THREADS} from "../actions/search";
/**
 * Created by aar on 29/03/2017.
 */

const initialState = {
    threads: {
        items: []
    }
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case ACTION_GET_THREADS :
            return Object.assign({}, state, {
                threads: action.threads
            });
        default:
            return state;
    }
};