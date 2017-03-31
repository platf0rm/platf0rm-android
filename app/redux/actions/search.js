/**
 * Created by aar on 29/03/2017.
 */
import API from '../data/apis';

export const ACTION_GET_THREADS = 'ACTION_GET_THREADS';

function searchThreads(threads) {
  return {
    type: ACTION_GET_THREADS,
    threads,
  };
}

export function fetchThreads(searchTerm) {
  return dispatch => API.searchThreads(searchTerm)
      .then(response => response.json())
      .then(threads => dispatch(searchThreads(threads)))
      .catch(err => console.log(err));
}
