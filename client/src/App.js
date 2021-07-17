import React, { useState } from 'react';
import "./App.css";
import Home from "./pages/index";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import NavBar from "./components/NavBar/index";
import Sidebar from './components/Sidebar/index';
import Footer from "./components/Footer/index";
import AboutPage  from "./pages/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/buy" component={BuyPage} exact />
        <Route path="/sell" component={SellPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
