/**
 * Created by aar on 29/03/2017.
 */

'use strict';

const BASE_URL  = 'https://api.github.com/';

const API = {
    searchThreads (searchTerm) {
        return fetch(`${BASE_URL}search/repositories?q='${searchTerm}'`);
    }
};

export default API;