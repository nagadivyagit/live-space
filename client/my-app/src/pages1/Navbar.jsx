import React from 'react';

import './Navcss.css';
import image2 from './Images/image2.avif';
function Nav() {
    return (
<div>
<header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container0">
                        <a className="navbar-brand">
                            <img src={image2} alt="Logo"/>
                        </a>
                        <ul className="nav nav-tabs1">
                            <li className="nav-item1">
                                <a className="active custom-nav-link1" href='./Int'>Interiors</a>
                            </li>
                            <li className="nav-item1 dropdown" >
                            <a className="active custom-nav-link1" href='./Designideas'>Design ideas</a>
                                <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{ marginLeft: "-25px" }}></a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href='./Kitchens'>Kitchen Designs</a>
                                    <a className="dropdown-item" href='./Wardrobedesigns'>Wardrobe Designs</a>
                                    <a className="dropdown-item" href='./Bedroom'>Master bedroom Designs</a>
                                </div>
                            </li>

                             
                          {/* <li className="nav-item1 dropdown">
                                <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Magazine</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                               </li>  

                            <li className="nav-item1 dropdown">
                                <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Cities</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>*/}
                            <li className="nav-item1">
                                <a className="active custom-nav-link1" href='./Storelocator'>Store Locator</a>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href='./Aboutus'>About Us</a>
                                    <a className="dropdown-item" href='./Contact'>Contact</a>
                                </div>
                            </li>
                        </ul>

                       

                    </div>
                </nav>
            </header>
</div>
);
}
    export default Nav;