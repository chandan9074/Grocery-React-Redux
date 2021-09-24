// import pakages
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer
import rootReducer from "./rootReducers";

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(logger)));

export const persistor = persistStore(store)