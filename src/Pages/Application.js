import React from "react";
import "../CSS/Application.css";

const applications = [
  {
    id: 1,
    title: "Electronics & Computing",
    icon: "🚀",
    description: "Graphene-based chips and flexible displays enhance speed and efficiency.",
    details: [
      "Ultra-fast transistors improve computing speeds.",
      "Flexible OLED displays enable foldable and stretchable screens.",
      "Wearable electronics for smart clothing and sensors.",
    ],
  },
  {
    id: 2,
    title: "Energy Storage & Batteries",
    icon: "⚡",
    description: "Graphene batteries charge faster, last longer, and offer higher energy density.",
    details: [
      "Supercapacitors for rapid energy discharge.",
      "Hydrogen fuel cells for clean energy solutions.",
      "Improved battery lifespan for electric vehicles.",
    ],
  },
  {
    id: 3,
    title: "Aerospace & Automotive",
    icon: "✈️",
    description: "Graphene materials make aircraft and cars stronger and lighter.",
    details: [
      "Reinforced aircraft components improve fuel efficiency.",
      "Heat dissipation for high-performance vehicles.",
      "Graphene composites enhance durability.",
    ],
  },
  {
    id: 4,
    title: "Oil & Gas Industry",
    icon: "🛢️",
    description: "Graphene enhances drilling, corrosion protection, and water treatment.",
    details: [
      "Drilling fluids reduce friction and improve efficiency.",
      "Corrosion-resistant coatings extend pipeline life.",
      "Graphene membranes remove contaminants from wastewater.",
    ],
  },
  {
    id: 5,
    title: "Healthcare & Biotechnology",
    icon: "🧬",
    description: "Graphene transforms drug delivery, biosensors, and medical imaging.",
    details: [
      "Nanoparticles target diseases like cancer more effectively.",
      "Biosensors detect diseases at early stages.",
      "Medical imaging technologies improve diagnostic accuracy.",
    ],
  },
  {
    id: 6,
    title: "Construction & Smart Materials",
    icon: "🏗️",
    description: "Graphene makes infrastructure stronger, smarter, and more energy-efficient.",
    details: [
      "Self-healing concrete repairs cracks automatically.",
      "Fireproof and waterproof coatings enhance durability.",
      "Transparent solar panels for energy-efficient buildings.",
    ],
  },
  {
    id: 7,
    title: "Water Purification & Filtration",
    icon: "💧",
    description: "Graphene enables efficient desalination and industrial wastewater treatment.",
    details: [
      "Membranes remove heavy metals and bacteria.",
      "Seawater purification for sustainable freshwater production.",
      "Improves wastewater management in industries.",
    ],
  },
  {
    id: 8,
    title: "Textiles & Wearable Technology",
    icon: "👕",
    description: "Graphene-infused fabrics enhance comfort, strength, and performance.",
    details: [
      "Antibacterial and odor-resistant properties.",
      "Wearable sensors for fitness tracking and medical monitoring.",
      "Temperature-regulating clothing for all weather conditions.",
    ],
  },
  {
    id: 9,
    title: "Defense & Security",
    icon: "🛡️",
    description: "Graphene improves armor, stealth technology, and security systems.",
    details: [
      "Bulletproof armor is lighter and stronger.",
      "Radar-absorbing materials enhance stealth capabilities.",
      "Advanced sensors provide real-time threat detection.",
    ],
  },
];

const Application = () => {
  return (
    <div className="application-container">
      <div className="application-hero-section">
        <h1>Applications</h1>
        <hr></hr>
        <p>Discover how graphene is transforming industries worldwide.</p>
      </div>

      <div className="application-container-card">
        {applications.map((app) => (
          <div className="application-card" key={app.id}>
            <div class="application-icon-container"><span>{app.icon} </span></div>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
