import React from 'react';
import { connect } from 'react-redux';
import { buy_grocery } from '../redux/index'

const Grocery = (props) => {
    return ( 
        <div>
            <h1>Number of Grocery - {props.numOfProducts}</h1>
            <button onClick={props.buy_grocery}>Buy product</button>
        </div>
     );
}


const mapStateToProps = state =>{
  return {
    numOfProducts: state.grocery.numOfProducts
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buy_grocery: () => dispatch(buy_grocery())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Grocery);