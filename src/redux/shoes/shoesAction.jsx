// import action type
import { Buy_shoes } from "./shoesTypes";

// create action
export const buy_shoes = (number=2) =>{
    return{
        type: Buy_shoes,
        payload:number
    }
}