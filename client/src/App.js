import React from "react";
import "./App.css";
import Home from "./pages/index";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Form from "./components/Forms/Form";
import AboutPage  from "./pages/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/buy" component={Form} exact />
        <Route path="/sell" component={SellPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
