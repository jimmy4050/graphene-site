import React from "react";
import "../CSS/Graphene.css";

const Graphene = () => {
  return (
    <div className="graphene-container">
      <div className="graphene-hero-section">
        <h1>What is Graphene?</h1>
        <hr></hr>
        <p>Graphene is a single layer of carbon atoms arranged in a two-dimensional honeycomb lattice, making it the thinnest compound known to man at one atom thick.</p>
      </div>
      <div class="graphene-content">
        <div class="graphene-text">
          <h2>The Wonder Material</h2>
          <p>First isolated in 2004 by researchers at the University of Manchester, graphene is essentially a single layer of graphite, which is the material found in pencil lead.</p>
          <p>Despite being the thinnest material known, it's also one of the strongest—about 200 times stronger than steel. It's also an excellent conductor of heat and electricity, and is nearly transparent.</p>
          <p>These remarkable properties make graphene a material with enormous potential across various industries, from electronics to medicine, energy, and beyond.</p>
        </div>
        <div class="graphene-info-box">
          <h2>Graphene at a Glance</h2>
          <ul>
            <li><span className="round">1</span> One atom thick, making it a true 2D material</li>
            <li><span className="round">2</span> 200 times stronger than steel by weight</li>
            <li><span className="round">3</span> Conducts heat better than any other known material</li>
            <li><span className="round">4</span> Conducts electricity better than copper</li>
            <li><span className="round">5</span> Nearly transparent, absorbing only 2.3% of light</li>
            <li><span className="round">6</span> Completely impermeable to gases, even helium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Graphene;
