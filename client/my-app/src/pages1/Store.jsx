import React from 'react';
import Navbar from "../pages1/Navbar";
import './About.css';
import Footer from '../pages1/Footer';
import BK4 from './Images/BK4.avif';
import './Navcss.css';

export default function Store() {
    return (
        <div>
            <div><Navbar /></div>
    <div className="carousel-inner">
                    <div className="carousel-item active">
                        
                        <img src={BK4} className="d-block w-100" alt="first slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Find the best interior designs</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="oval-btn btn btn-primary">Book free consultation</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-container"><Footer /></div>
                    </div>

                );
}