/**
 * Created by aar on 29/03/2017.
 */

const initialState = {
    threads: []
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_GET_THREADS' :
            return {
                ...state,
                threads : action.threads
            };
        default:
            return state;
    }
};