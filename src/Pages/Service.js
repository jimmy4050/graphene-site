import React from "react";
import "../CSS/Service.css";

const services = [
  { id: 1, icon: "bi bi-cpu", title: "AI Development", desc: "Advanced AI solutions for business automation." },
  { id: 2, icon: "bi bi-battery-charging", title: "Energy Solutions", desc: "Innovative graphene-based batteries." },
  { id: 3, icon: "bi bi-heart-pulse", title: "Medical Research", desc: "Graphene in drug delivery and biosensors." },
  { id: 4, icon: "bi bi-car-front", title: "Automotive", desc: "Lightweight graphene composites for vehicles." },
];

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-hero-section">
        <h1>Service</h1>
        <hr></hr>
        <p>Empowering Industries with Graphene Innovation</p>
      </div>

      <div className="service-intro">
        <p>Transforming technology, energy, and healthcare with the world’s strongest and most versatile material.</p>
        <p>Explore our cutting-edge solutions designed to enhance efficiency, sustainability, and performance.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <i className={service.icon + " service-icon"}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
