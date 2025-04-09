import React from "react";
import "../CSS/About.css";
import gv from '../Video/graphene.mp4'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero-section">
        <h1>About Us</h1>
        <hr></hr>
        <p>Our Journey in Seashore Nanotech</p>
      </div>

      <div className="about-content">
        <div className="about-video">
          <video width="100%" height="20%" controls>
            <source src={gv} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        <div className="about-text2">
          <p>
            At <b style={{color:'#ef233c'}}>Seashore Nanotech</b>, we are pioneers in the field of nanotechnology, 
            specializing in the manufacturing of Graphene, Graphene Oxide, and their derivatives.
            With cutting-edge research and advanced production techniques, we deliver high-performance 
            nanomaterials that drive innovation across industries.
          </p>
          <p>
            Our products serve a wide range of applications, including electronics, energy storage, 
            composites, coatings, biomedical engineering, and more. By harnessing the exceptional properties 
            of graphene, we help businesses and researchers develop stronger, lighter, more efficient, 
            and sustainable solutions.
          </p>
          <p>
            At Seashore Nanotech, we are committed to scientific excellence, technological advancement, 
            and sustainability. Join us in shaping the future of nanotechnology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
