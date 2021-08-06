// import action types
import { Buy_grocery } from "./groceryTypes";

// create initial state
const initialState = {
    numOfProducts: 20
}

// create reducer

export const groceryReducer= (state= initialState, action) =>{
    switch(action.type){
        case Buy_grocery:
            return{
                ...state, 
                numOfProducts: state.numOfProducts - 1
            }
        default: return state
    }
}
