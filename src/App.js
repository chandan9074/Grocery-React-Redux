// import pakages
import React from 'react';
// import { Provider } from 'react-redux';

// import components
import './App.css';
import Grocery from './components/grocery';
import { store } from './redux/store';
import HookGrocery from './components/hookGrocery';
import Shoes from './components/shoes';
import NewShoes from './components/newShoes';

function App() {
  return (
    <div className="App">
      <Grocery/>
      <HookGrocery/>
      <Shoes/>
      <NewShoes/>
    </div>
  );
}

export default App;
