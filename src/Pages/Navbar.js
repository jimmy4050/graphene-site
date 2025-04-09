import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Navbar.css";
import logo from '../Images/glogo.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const sections = ["home", "graphene", "application", "solution", "product", "service","about", "contact"];
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offset = element.offsetTop - 100;
        if (window.scrollY >= offset) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
    window.history.replaceState(null, null, `${currentSection}`);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      window.history.pushState(null, null, `${id}`); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "") || "home";
    scrollToSection(hash);
  }, [location]);

  return (
    <nav className="navbar transparent-navbar sticky-top">
      <div className="navbar-content">
        <div className="navbar-left">
          {/* <a href="#" className="navbar-logo">SEASHORE NANOTECH</a> */}
          <a className="navbar-brand fw-bold" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="Logo" style={{ width: "200px", height: "55px" }} />
          </a>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
        <div className={`navbar-center ${isMenuOpen ? "open" : ""}`} >
          <ul className="navbar-links">
            {["home","graphene" , "application", "solution", "product", "service","about","contact"].map((section) => (
              <li key={section}>
                <a
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
