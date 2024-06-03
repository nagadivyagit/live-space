import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css';

function Final1() {
    useEffect(() => {
    }, );
    const marqueeList = document.querySelector('.marquee-list');
                const allCards = Array.from(document.querySelectorAll('.card22'));
        
                allCards.forEach(card => {
                    const clone = card.cloneNode(true);
                    marqueeList.appendChild(clone);
                });
            

    return (
        <div>
            <header>
                <nav>
                    <div className="container">
                        <a className="navbar-brand">
                            <img src="image2.png" alt="Logo" />
                        </a>
                        <ul className="nav nav-tabs1">
                            <li className="nav-item1">
                                <a className="active custom-nav-link1" href="about.html">Interiors</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="custom-nav-link dropdown-toggle" data-toggle="dropdown"
                                    href="#" role="button" aria-expanded="false">Design ideas</a>

                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="marquee.html">kitchen models</a>
                                    <a className="dropdown-item" href="marquee.html">Dining models</a>
                                    <a className="dropdown-item" href="marquee.html">2-bhk models</a>
                                </div>
                            </li>

                            <li className="nav-item1 dropdown">
                                <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown"
                                    href="#" role="button" aria-expanded="false">Magazine</a>

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
                </li>
                    <li className="nav-item1 dropdown">
                        <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Store locator</a>
        
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Solution 1</a>
                            <a className="dropdown-item" href="#">Solution 2</a>
                            <a className="dropdown-item" href="#">Solution 3</a>
                        </div>
                    </li>
                    <li className="nav-item1 dropdown">
                        <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
        
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Solution 1</a>
                            <a className="dropdown-item" href="#">Solution 2</a>
                            <a className="dropdown-item" href="#">Solution 3</a>
                        </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <nav>
                <div className="container">
                    <ul className="nav nav-tabs1">
                        <li className="nav-item1">
                            <a className="active custom-nav-link1" href="about.html">How it works</a>
                        </li>
                        <li className="nav-item1 dropdown">
                    <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Offerings</a>

                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Solution 1</a>
                        <a className="dropdown-item" href="#">Solution 2</a>
                        <a className="dropdown-item" href="#">Solution 3</a>
                    </div>
                </li>
                    <li className="nav-item1 dropdown">
                        <a className="custom-nav-link1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Price Calculator</a>
    
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Solution 1</a>
                            <a className="dropdown-item" href="#">Solution 2</a>
                            <a className="dropdown-item" href="#">Solution 3</a>
                        </div>
                    </li>

                <li className="nav nav-item1">
                    <a className="active custom-nav-link1" href="about.html">The modular journey</a>
            
            </li>
        
            <li className="nav-item1">
                <a className="active custom-nav-link1" href="about.html">Refer a friend</a>
            
            </li>
           
                <li className="nav-item1">
                   <a className="active custom-nav-link1" href="about.html">partner with us</a>
                
                </li>
                        
                    </ul>
                </div>
            </nav>

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="image1.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5>Home to beautiful interiors</h5>
                    <button className="oval-btn btn btn-primary">Book free consultance</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="kitchen.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5>beautiful kitchen ideas</h5>
                    <button className="oval-btn btn btn-primary">Calculate now</button>
                    
                </div>
            </div>
            <div className="carousel-item">
                <img src="dining.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5>say hi to beautiful dining space</h5>
                    <p>Visit your nearest Experience Centre to touch, feel and experience our products.</p>
                    <button className="oval-btn btn btn-primary">Visit Us</button>
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
    </div>

    <div className="container3">
        <div className="row">
            <div className="col">
                
                <div className="centered-h2">
                    <h2>One stop shop for all things interiors</h2>
                </div>
                <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your <br> home or office. With a wide range of furniture & decor, we have your back from start to finish </br> </p>
            </div>
        </div>

    </div>
     <br/>
    <br/>
    <div className="container4">

    <div className="card-deck swiper-container">
        
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="card" style="width: 300px">
                    <img src="image.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title"> Modular Interiors </h6>
                        <p className="card-text">Functional kitchen, wardrobe and storage</p>
                        <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card" style="width: 300px">
                    <img src="int1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Full home interiors</h6>
                        <p className="card-text">Turkey interior solution for your home</p>
                        <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                    </div>
                </div>
            </div>
                <div className="swiper-slide">
                    <div className="card" style="width: 300px">
                        <img src="int2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">Luxury Interiors</h6>
                            <p className="card-text">Tailored interiors that redefine elegance</p>
                            <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                        </div>
                    </div>
                </div>



                <div className="swiper-slide">
                    <div className="card" style="width: 300px ">
                        <img src="int3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Renovations Interiors</h5>
                            <p className="card-text">Export solutions to upgrade your home</p>
                            <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                        </div>
                    </div>
                </div>
                
               
                            

                <div className="swiper-slide">
            <div className="card" style={{ width: '300px' }}>
                <img src="int4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Commercial Interiors</h6>
                    <p className="card-text">Hassle free solutions for your work space</p>
                    <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                </div>
            </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
        </div>            
    </div>   
    
</div>
<br/>
<br/>
<br/>

<div style={{ backgroundColor: 'rgb(253, 249, 249)', height: '400px' }}>
            <h2 className="title" align="center">Why Choose Us</h2>
            <div className="marquee-container">
                <div className="marquee-list">
                    <div className="card22">
                        <img className="card-image" src="m1.png" align="center" alt="" />
                        <div className="card-title">Flat 10 year warranty</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m2.png" align="center" alt="Image 2" />
                        <div className="card-title">Easy EMIs</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m3.png" alt="Image 2" />
                        <div className="card-title">45 day move in guarantee</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m4.png" alt="Image 2" />
                        <div className="card-title">146 quality checks</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m5.png" alt="Image 2" />
                        <div className="card-title">75,000+ happy homes</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m6.png" alt="Image 2" />
                        <div className="card-title">50+ cities</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m7.png" alt="Image 2" />
                        <div className="card-title">3 countries</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m8.png" alt="Image 2" />
                        <div className="card-title"> 20 Lakh+ Catalogue</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src="m9.png" alt="Image 9" />
                        <div className="card-title">3,500+ designs</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
    export default Final1;
