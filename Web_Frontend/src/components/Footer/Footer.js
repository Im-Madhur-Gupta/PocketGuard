import React from 'react';
import SLogo from '../../images/securityLogo.png';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="security">
                    <img src={SLogo} alt="Security" />
                </div>
                <div className="products">
                    <h3>PRODUCTS</h3>
                    <ul className="p-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>SOCIALS</h3>
                    <ul className="s-links">
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.twitter.com/">Twitter</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="copyright">&copy; 2021 HackPacker$v2</div>
            
        </div>
    );
}

export default Footer;