// import actions
import { Buy_shoes } from "./shoesTypes";

// create initialstate
const initialstate = {
    numOfShoes: 20
}


// create reducer
export const shoesReducer = (state=initialstate, action) =>{
    switch(action.type){
        case Buy_shoes:
            return{
                ...state, 
                numOfShoes: state.numOfShoes-1
            }
        default: return state
    }
}