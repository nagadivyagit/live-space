import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navcss.css';
import './Cardcss.css';
import './Marqueecss.css';
import './Masonrycss.css';
import './Finalcss.css';


import image2 from './Images/image2.avif';
import image1 from './Images/image1.avif';
import kitchen from './Images/kitchen.avif';
import dining from './Images/dining.avif';
import image0 from './Images/image0.avif';
import int1 from './Images/int1.avif';
import int2 from './Images/int2.avif';
import int3 from './Images/int3.avif';
import int4 from './Images/int4.avif';
import m1 from './Images/m1.avif';
import m2 from './Images/m2.avif';
import m3 from './Images/m3.avif';
import m4 from './Images/m4.avif';
import m5 from './Images/m5.avif';
import m6 from './Images/m6.avif';
import m7 from './Images/m7.avif';
import m8 from './Images/m8.avif';
import m9 from './Images/m9.avif';
import signin from './Images/signin.avif';
import ms1 from './Images/ms1.avif';
import ms2 from './Images/ms2.avif';
import ms3 from './Images/ms3.avif';
import ms4 from './Images/ms4.avif';
import ms5 from './Images/ms5.avif';
import ms6 from './Images/ms6.avif';
import final from './Images/final.avif';

function Final1() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container0">
                        <a className="navbar-brand" href="#">
                            <img src={image2} alt="Logo" />
                        </a>
                        <ul className="nav nav-tabs1">
                            <li className="nav-item1">
                                <a className="nav-link1 active custom-nav-link1" href="about.html">Interiors</a>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Design ideas</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Magazine</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Cities</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Store locator</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>
                            <li className="nav-item1 dropdown">
                                <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Solution 1</a>
                                    <a className="dropdown-item" href="#">Solution 2</a>
                                    <a className="dropdown-item" href="#">Solution 3</a>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto" style={{ marginRight: '150px' }}>
                            <li className="nav-item dropdown">
                                <a className="nav-link1 custom-nav-link1" href="#" id="navbarDropdownSignIn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={signin} alt="Human Logo" width="30" height="30" />
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownSignIn">
                                    <a className="dropdown-item" href='/Login'>Log in</a>
                                    <a className="dropdown-item" href="#">Sign Up</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <nav>
                <div className="container0">
                    <ul className="nav nav-tabs1">
                        <li className="nav-item1">
                            <a className="nav-link active custom-nav-link1" href="about.html">How it works</a>
                        </li>
                        <li className="nav-item1 dropdown">
                            <a className="nav-link1 custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Offerings</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Solution 1</a>
                                <a className="dropdown-item" href="#">Solution 2</a>
                                <a className="dropdown-item" href="#">Solution 3</a>
                            </div>
                        </li>
                        <li className="nav-item1 dropdown">
                            <a className=" custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Price Calculator</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Solution 1</a>
                                <a className="dropdown-item" href="#">Solution 2</a>
                                <a className="dropdown-item" href="#">Solution 3</a>
                            </div>
                        </li>
                        <li className="nav-item1">
                            <a className="nav-link active custom-nav-link1" href="about.html">The modular journey</a>
                        </li>
                        <li className="nav-item1">
                            <a className="nav-link active custom-nav-link1" href="about.html">Refer a friend</a>
                        </li>
                        <li className="nav-item1">
                            <a className="nav-link active custom-nav-link1" href="about.html">Partner with us</a>
                        </li>
                        <li className="nav-item1">
                            <button href="#" className="oval-btn1 btn btn-primary">Calculate now</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Home to beautiful interiors</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="oval-btn btn btn-primary">Book free consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kitchen} className="d-block w-100" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Home to beautiful interiors</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="oval-btn btn btn-primary">Book free consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={dining} className="d-block w-100" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Home to beautiful interiors</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="oval-btn btn btn-primary">Book free consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <h2 className="card-title">Design stories</h2>
            <div className="card-deck">
                <div className="card">
                    <img src={image0} className="card-img-top" alt="Card 1" />
                    <div className="card-body">
                        <p className="card-text">Card 1 Content</p>
                    </div>
                </div>
                <div className="card">
                    <img src={int1} className="card-img-top" alt="Card 2" />
                    <div className="card-body">
                        <p className="card-text">Card 2 Content</p>
                    </div>
                </div>
                <div className="card">
                    <img src={int2} className="card-img-top" alt="Card 3" />
                    <div className="card-body">
                        <p className="card-text">Card 3 Content</p>
                    </div>
                </div>
                <div className="card">
                    <img src={int3} className="card-img-top" alt="Card 4" />
                    <div className="card-body">
                        <p className="card-text">Card 4 Content</p>
                    </div>
                </div>
                <div className="card">
                    <img src={int4} className="card-img-top" alt="Card 5" />
                    <div className="card-body">
                        <p className="card-text">Card 5 Content</p>
                    </div>
                </div>
            </div>

            <h2 className="masonry-title">Customer Homes</h2>
            <div className="masonry">
                <div className="masonry-item"><img src={m1} alt="Masonry Item 1" /></div>
                <div className="masonry-item"><img src={m2} alt="Masonry Item 2" /></div>
                <div className="masonry-item"><img src={m3} alt="Masonry Item 3" /></div>
                <div className="masonry-item"><img src={m4} alt="Masonry Item 4" /></div>
                <div className="masonry-item"><img src={m5} alt="Masonry Item 5" /></div>
                <div className="masonry-item"><img src={m6} alt="Masonry Item 6" /></div>
                <div className="masonry-item"><img src={m7} alt="Masonry Item 7" /></div>
                <div className="masonry-item"><img src={m8} alt="Masonry Item 8" /></div>
                <div className="masonry-item"><img src={m9} alt="Masonry Item 9" /></div>
            </div>

            <h2 className="marquee-title">Ready to start with us?</h2>
            <div className="marquee">
                <img src={ms1} alt="Marquee Image 1" />
                <img src={ms2} alt="Marquee Image 2" />
                <img src={ms3} alt="Marquee Image 3" />
                <img src={ms4} alt="Marquee Image 4" />
                <img src={ms5} alt="Marquee Image 5" />
                <img src={ms6} alt="Marquee Image 6" />
            </div>

            <h2 className="final-title">End of the page</h2>
            <img src={final} alt="Final Image" />
        </div>
    );
}

export default Final1;
