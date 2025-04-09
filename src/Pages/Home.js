import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-content">
          <h1 className="display-1">Graphene</h1>
          <h2 className="display-6">The Material of the Future</h2>
          <p>
            A single layer of carbon atoms arranged in a hexagonal lattice, with
            extraordinary strength, conductivity, and flexibility.
          </p>
          <div className="home-buttons">
            <Link to="#about" className="home-btn home-btn-primary">
              Learn More
            </Link>
            <Link to="#application" className="home-btn home-btn-secondary">
              Applications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
