import React from 'react';
import './App.css';
import Home from './pages/index'
import buyPage from './pages/buyPage'
import sellPage from './pages/sellPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/buy" component={buyPage} />
        <Route path="/sell" component={sellPage} />
      </Switch>
    </Router>
  );
}

export default App;
