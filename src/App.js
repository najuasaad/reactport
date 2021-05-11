import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';

// pages 
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

// components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <div className="container-fluid"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
