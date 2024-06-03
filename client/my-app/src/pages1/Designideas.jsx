import React from 'react';
import Navbar from "./Navbar";
import './Wardrobecss.css';
import Footer from './Footer';

import kitchen from './Images/kitchen.avif';
import WD2 from './Images/WD2.avif';
import BD3 from './Images/BD3.avif';



function CardColumns2() {
  return (
    <div>
        <div><Navbar /></div>
        <div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginLeft: '200px' }}>
                        <h2>Home Interior Design</h2>
                    </div>
                    <p style={{ marginLeft: '200px' }}>We bring you carefully-curated interior design ideas, to give your home a brand new look. </p>
                </div>
            </div>
            <br />
            <br />
    <div className="card-columns">
      <div className="card">
      <a href='./Kitchens'>
        <img className="card-img-top" src={kitchen} alt="Card image cap" />
        </a>
        <div className="card-body">
          <h5 className="card-title">Kitchen</h5>
          
        </div>
      </div>
      <div className="card">
      <a href='./Wardrobedesigns'>
        <img className="card-img-top" src={WD2} alt="Card image cap" />
        </a>
        <div className="card-body">
          <h5 className="card-title"> Wardrobe </h5>
         </div>
      </div>
      <div className="card">
      <a href='./Bedroom'>
        <img className="card-img-top" src={BD3} alt="Card image cap" />
        </a>
        <div className="card-body">
          <h5 className="card-title">Master Bedroom</h5>
          
        </div>
      </div>
     </div>
     </div>
    <div className="footer-container"><Footer/></div>
    </div>
  );
}

export default CardColumns2;

