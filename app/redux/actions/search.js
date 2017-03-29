/**
 * Created by aar on 29/03/2017.
 */

import API from '../data/apis';

function searchThreads(threads) {
    return {
        type : 'ACTION_GET_THREADS',
        threads
    };
}

export function fetchThreads(searchTerm) {
    return function (dispatch, getState) {
        return API.searchThreads(searchTerm)
            .then((response) => response.json())
            .then((threads) => dispatch(searchThreads(threads)))
            .catch((err) => console.log(err));
    };
}
