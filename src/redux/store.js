// import pakages
import { createStore } from "redux";

// import reducer
import { rootReducer } from "./rootReducers";

export const store = createStore(rootReducer)