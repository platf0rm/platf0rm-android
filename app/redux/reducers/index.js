/**
 * Created by aar on 29/03/2017.
 */

import { combineReducers } from "redux";
import search from "./search";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        search: search
    });
}