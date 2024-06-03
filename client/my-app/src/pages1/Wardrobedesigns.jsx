import React from 'react';
import Navbar from "./Navbar";
import './Wardrobecss.css';
import Footer from './Footer';
import WD1 from './Images/WD1.avif';
import WD2 from './Images/WD2.avif';
import WD3 from './Images/WD3.avif';
import WD4 from './Images/WD4.avif';
import WD5 from './Images/WD5.avif';
import WD6 from './Images/WD6.avif';



function CardColumns() {
  return (
    <div>
        <div><Navbar /></div>
        <div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginLeft: '200px' }}>
                        <h2>Wardrobe Interior Design Ideas</h2>
                    </div>
                    <p style={{ marginLeft: '200px' }}>This is your one-stop shop for latest, trending wardrobe designs.  </p>
                </div>
            </div>
            <br />
            <br />
    <div className="card-columns">
      <div className="card">
        <img className="card-img-top" src={WD1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 4 Door White And Wood Swing Wardrobe Design With Frosted Glass Shutters</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={WD2} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 2 Door Brown And Black Glossy Sliding Wardrobe Design</h5>
         </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={WD3} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Contemporary Frosty White 3 Door Swing Wardrobe Design With Wooden Open Storage</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={WD4} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 2 Door Brown And Black Glossy Sliding Wardrobe Design</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={WD5} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Contemporary 3 Door Champagne Toned Swing Wardrobe Design</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={WD6} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern White And Mirrored 2 Door Sliding Door Wardrobe Design</h5>
                  </div>
      </div>
      </div>
       
    </div>
    <div className="footer-container"><Footer /></div>
    </div>
  );
}

export default CardColumns;
