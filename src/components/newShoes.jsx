// import pakages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import actions
import { buy_shoes } from '../redux';

const NewShoes = () => {
    const numOfShoes = useSelector(state => state.shoes.numOfShoes)
    const dispatch = useDispatch()
    return ( 
        <div>
            <h1>number of shoes - {numOfShoes}</h1>
            <button onClick={()=>dispatch(buy_shoes(2))}>Buy shoes</button>
        </div>
     );
}
 
export default NewShoes;