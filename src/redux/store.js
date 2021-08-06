// import pakages
import { createStore } from "redux";

// import reducer
import { groceryReducer } from "./grocery/groceryReducer";

export const store = createStore(groceryReducer)