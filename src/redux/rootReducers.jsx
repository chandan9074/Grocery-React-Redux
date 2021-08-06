// import pakages
import { combineReducers } from "redux";

// import reducers
import { groceryReducer } from "./grocery/groceryReducer";
import { shoesReducer } from "./shoes/shoesReducer";

export const rootReducer = combineReducers({
    grocery: groceryReducer,
    shoes: shoesReducer
})