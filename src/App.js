// import pakages
import React from 'react';
import { Provider } from 'react-redux';

// import components
import './App.css';
import Grocery from './components/grocery';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grocery/>
      </div>
    </Provider>
  );
}

export default App;
