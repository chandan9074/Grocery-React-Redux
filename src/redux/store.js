// import pakages
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// import reducer
import { rootReducer } from "./rootReducers";

export const store = createStore(rootReducer, applyMiddleware(logger))