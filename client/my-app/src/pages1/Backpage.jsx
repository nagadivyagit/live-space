import React, { useState } from 'react';
import Navbar from "./Navbar";
import './Backpagecss.css';
import Footer from './Footer';
import Bp from './Images/Bp.avif';

function CardColumns() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div>
            <Navbar />
            <div className="container3">
                <div className="row">
                    <div className="col">
                        <div className="centered-h2" style={{ marginLeft: '50px' }}>
                            <h2>Previous work of LIVSPACE HOMES </h2>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="card-columns" style={{ marginLeft: '100px', width: '250%' }}>
                    <div className="card" style={{ position: 'relative' }}>
                        <img className="card-img-top" src={Bp} alt="Card image cap" />
                        {showDetails && (
                            <div className="toggle-icon" onClick={toggleDetails}>
                                <i className="fas fa-times-circle"></i>
                            </div>
                        )}
                        {!showDetails && (
                            <div className="toggle-icon" onClick={toggleDetails}>
                                <i className="fas fa-plus-circle"></i>
                            </div>
                        )}
                        <div className="card-body">
                            {/* You can add any other content here if needed */}
                        </div>
                    </div>
                </div>
                {showDetails && (
                    <div className="center" style={{ backgroundImage: 'none' }}>
                        <div className="containerp">
                            <div className="text">Talk to Designer</div>
                            <form action="#">
                                <div className="data">
                                    <label>Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="data">
                                    <label>Email </label>
                                    <input type="text" required />
                                </div>
                                <div className="data">
                                    <label>Phone number</label>
                                    <input type="password" required />
                                </div>
                                <div className="btn">
                                    <div className="inner"></div>
                                    <button type="submit">Get Free Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className="footer-container"><Footer /></div>
        </div>
    );
}

export default CardColumns;
