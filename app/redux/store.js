/**
 * Created by aar on 29/03/2017.
 */
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import getRootReducer from './reducers';

export default function getStore(navReducer) {
    return createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(thunk)
    );
}