import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Header from './Components/Home/Header';
import Product from './Components/Product/Product/Product';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Product></Product>
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
