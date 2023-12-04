import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-section-item">
                <h3 className="section-heading">CONQT</h3>
                <p><i class="fa-solid fa-location-dot"></i>{"  "}Bankon, Thailand 184000</p>
                <p><i class="fa-regular fa-address-book"></i>{"  "}+00 0000 0000</p>
                <p><i class="fa-solid fa-envelope"></i> {"  "} Contact@conqt.com</p>
                <p><i class="fa-solid fa-clock"></i>{"  "} Open Timing 9:00-6:00</p>
            </div>
            <div className="footer-section-item">
                <h3 className="section-heading">ABOUT US</h3>
                <ul>
                    <li>About us</li>
                    <br/>
                    <li>Contact us</li>
                    <br/>
                    <li>Find vendor</li>
                </ul>
            </div>
            <div className="footer-section-item">
                <h3 className="section-heading">FOR BUSINESSES</h3>
                <ul>
                
                <li>FAQ</li>
                <br/>
                <li>Write with us</li>
                </ul>
            </div>
            <div className="footer-section-item">
                <h3 className="section-heading">SERVICES</h3>
                <ul>
                <li>Call Expert</li>
                <br/>
                <li>Customer Services</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
