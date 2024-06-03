import React from 'react';
import Navbar from "../pages1/Navbar";
import './About.css';
import Footer from '../pages1/Footer';

export default function About() {
    return (
        <div>
            <div><Navbar /></div>
            <div className="container-fluid ab1">
                <div className="background-image"></div>
                <div className="about">
                    <h1>About Us</h1>
                    <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
                    <p>Our team is made up of experienced professionals who are passionate about what we do.</p>
                    <p>Thank you for choosing us!</p>
                </div>
            </div>
            <div className="footer-container"><Footer /></div>
        </div>
    );
}
