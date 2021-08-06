// import pakages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import action
import { buy_grocery } from '../redux';

const HookGrocery = () => {
    const numOfProducts = useSelector(state => state.grocery.numOfProducts);
    const dispatch = useDispatch();

    return ( 
        <div>
            <h1>Number of Grocery - {numOfProducts}</h1>
            <button onClick={()=> dispatch(buy_grocery())}>Buy Grocery</button>
        </div>
     );
}
 
export default HookGrocery;