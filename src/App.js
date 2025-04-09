import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Application from "./Pages/Application";
import Solution from "./Pages/Solution";
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Graphene from "./Pages/Graphene";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="home" className="section"><Home /></div>
      <div id="graphene" className="section"><Graphene /></div>
      <div id="application" className="section"><Application /></div>
      <div id="solution" className="section"><Solution /></div>
      <div id="product" className="section"><Product /></div>
      <div id="service" className="section"><Service /></div>
      <div id="about" className="section"><About /></div>
      <div id="contact" className="section"><Contact /></div>
      <Footer />
    </Router>
  );
}

export default App;
