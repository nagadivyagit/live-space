import React from 'react';
import Navbar from './Navbar';
import './Wardrobecss.css';
import Footer from './Footer';
import C1 from './Images/C1.png';
import C2 from './Images/C2.png';
import C3 from './Images/C3.png';
import C4 from './Images/C4.png';




function CardColumns1() {
  return (
    <div>
        <div><Navbar /></div>
        <div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginright: '200px' }}>
                        <h2>Select the layout of your kitchen</h2>
                    </div>
                </div>
            </div>
            <br />
            <br />
    <div className="card-columns"style={{ marginLeft: '300px' }}>
      <div className="card">
        <img className="card-img-top" src={C1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">L-Shaped</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={C2} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Parallel</h5>
         </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={C3} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">U-Shaped</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={C4} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Straight</h5>
          
        </div>
      </div>
      </div>
       
    </div>
    <div className="footer-container"><Footer /></div>
    </div>
  );
}

export default CardColumns1;