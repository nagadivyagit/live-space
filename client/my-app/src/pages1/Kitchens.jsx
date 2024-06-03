import React from 'react';
import Navbar from "../pages1/Navbar";
import './Masonrycss.css';
import Footer from '../pages1/Footer';
import Modularushapedkitchen from './Images/Modularushapedkitchen.avif';
import Ushapedkitchen from './Images/Ushapedkitchen.avif';
import Parallelkitchen from './Images/Parallelkitchen.avif';
import Islandkitchen from './Images/Islandkitchen.avif';
import Lshapedkitchen from './Images/Lshapedkitchen.avif';
import Contemporarykitchen from './Images/Contemporarykitchen.avif';
import Greykitchen from './Images/Greykitchen.avif';
import Openmodular from './Images/Openmodular.avif';


export default function Kitchen() {
    return (

<div>
          <div><Navbar /></div>
          <div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginLeft: '200px' }}>
                        <h2> Kitchen Interior Designs</h2>
                    </div>
                    <p style={{ marginLeft: '200px' }}>Give your home a new look with these interior design ideas curated for you</p>
                </div>
            </div>
            <br />
            <br />
            <div className="container">
                <figure >
                    <img src={Modularushapedkitchen} alt="Living room" />
                    <figcaption>Modular U shaped kitchen</figcaption>
                </figure>
                <figure>
                    <img src={Parallelkitchen} alt="Master bed room" />
                    <figcaption>Parallel Kitchen</figcaption>
                </figure>
                <figure>
                    <img src={Ushapedkitchen} alt="False ceiling" />
                    <figcaption>U shaped Kitchen </figcaption>
                </figure>
                <figure>
                    <img src={Islandkitchen} alt="Homes by livspace" />
                    <figcaption>Island kitchen</figcaption>
                </figure>
                <figure >
                    <img src={Lshapedkitchen} alt="Kitchen" />
                    <figcaption>L shaped Kitchen</figcaption>
                </figure>
                <figure>
                    <img src={Greykitchen} alt="Wardrobe" />
                    <figcaption>Grey Kitchen</figcaption>
                </figure>
                
                <figure>
                    <img src={Contemporarykitchen} alt="Wardrobe" />
                    <figcaption>Contemporary Kitchen</figcaption>
                </figure>
                <figure>
                    <img src={Openmodular} alt="Wardrobe" />
                    <figcaption>Open Modular Kitchen</figcaption>
                </figure>
            </div>
        </div>
        <div className="footer-container"><Footer /></div>
        
        </div>
    );
}