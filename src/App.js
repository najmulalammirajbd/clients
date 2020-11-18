import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import OurClasses from './components/OurClass/OurClasses/OurClasses';
import PurchaseRate from './components/PurchaseRate/PurchaseRate/PurchaseRate';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
