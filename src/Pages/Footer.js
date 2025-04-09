import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../CSS/Footer.css";

const Footer = () => {
    const socialIcons = [
        { icon: "bi bi-facebook", link: "#" },
        { icon: "bi bi-twitter", link: "#" },
        { icon: "bi bi-linkedin", link: "#" },
        { icon: "bi bi-instagram", link: "#" }
    ];

    return (
        <footer className="custom-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h5 className="mb-3">Get in Touch</h5>
                        <p>SEASHORE NANOTECH</p>
                        <br></br>
                        <p>Jigar Patel</p>
                          <p>78, Umiya Bunglow, </p>
                          <p>opp. Swim palace,</p>
                            <p>near khatu Syam mandir,</p>
                                <p>vip road, Althan,
                            Surat 395017 ( India)</p>
                    </div>

                    <div className="footer-column">
                        <h5>Help</h5>
                        <ul>
                            {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((item, index) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            {socialIcons.map((social, index) => (
                                <a href={social.link} key={index} className="social-icon">
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
