import React from 'react';
import Navbar from "./Navbar";
import './Wardrobecss.css';
import Footer from './Footer';
import BD1 from './Images/BD1.avif';
import BD2 from './Images/BD2.avif';
import BD3 from './Images/BD3.avif';
import BD4 from './Images/BD4.avif';
import BD5 from './Images/BD5.avif';
import BD6 from './Images/BD6.avif';



function CardColumns1() {
  return (
    <div>
        <div><Navbar /></div>
        <div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginright: '200px' }}>
                        <h2>Master Bedroom Interior Designs</h2>
                    </div>
                    <p style={{ marginright: '100px' }}>We’ve got a wide range of affordable and stylish bedroom designs you'll love, at Livspace. </p>
                </div>
            </div>
            <br />
            <br />
    <div className="card-columns">
      <div className="card">
        <img className="card-img-top" src={BD1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 4 Door White And Wood Swing Wardrobe Design With Frosted Glass Shutters</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={BD2} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 2 Door Brown And Black Glossy Sliding Wardrobe Design</h5>
         </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={BD3} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Contemporary Frosty White 3 Door Swing Wardrobe Design With Wooden Open Storage</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={BD4} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Modern 2 Door Brown And Black Glossy Sliding Wardrobe Design</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={BD5} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Contemporary 3 Door Champagne Toned Swing Wardrobe Design</h5>
          
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={BD6} alt="Card image cap" />
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

export default CardColumns1;