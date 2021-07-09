import React from "react";
import "./App.css";
import Home from "./pages/index";
import BuyPage from "./pages/BuyPage";
import sellPage from "./pages/sellPage";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import FormSignup from "./components/Forms/FormSignup";
import Form from "./components/Forms/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/buy" component={Form} exact />
        <Route path="/sell" component={sellPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
