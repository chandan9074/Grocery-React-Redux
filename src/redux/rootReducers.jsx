// import pakages
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import reducers
import { groceryReducer } from "./grocery/groceryReducer";
import { shoesReducer } from "./shoes/shoesReducer";

const persistConfig = {
    key: "root", 
    storage, 
    whitelist: ["grocery"]
}

const rootReducer = combineReducers({
    grocery: groceryReducer,
    shoes: shoesReducer
})

export default persistReducer(persistConfig, rootReducer);