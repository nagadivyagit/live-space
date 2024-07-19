import React from 'react';

import './Navcss.css';
import './Cardcss.css';
import './Marqueecss.css';
import './Masonrycss.css';
import './Finalcss.css';
import './Footercss.css';
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


import footer from './Images/footer.svg';



function Final1() {
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

                        <ul className="navbar-nav" style={{ marginLeft:'350px' }}>
                        <li class="nav-item dropdown">
                            <a class="custom-nav-link1" href="#" id="navbarDropdownSignIn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={signin}   alt="Human Logo"  width="30" height="30" class="fas fa-chevron-down"/> 
                                <i class="fas fa-chevron-down"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownSignIn">
                                <a class="dropdown-item" href='./Login'>Log in</a>
                                <a class="dropdown-item" href='./Signup'>Sign Up</a>
                            </div>
                        </li>
                    </ul>


                    </div>
                </nav>
            </header>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container0">
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
                        {/*<li className="nav nav-item1">
                            <a className="active custom-nav-link1" href="about.html">The modular journey</a>
                        </li>
                        <li className="nav-item1">
                            <a className="active custom-nav-link1" href="about.html">Refer a friend</a>
                        </li>
                        <li className="nav-item1">
                            <a className="active custom-nav-link1" href="about.html">partner with us</a>
                        </li>

                        <li class="nav-item1"style={{ width:'200px',marginLeft:'450px' }}>
                    
                 <button1 href="#" class="oval-btn1 btn btn-primary">CONSULT ONLINE NOW </button1>
              </li>
                    </ul>
                </div>
            </nav>*/}
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        
                        <img src={image1} className="d-block w-100" alt="first slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Home to beautiful interiors</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <a href="./Popup"  className="oval-btn btn btn-primary">Book free consultation</a>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kitchen} className="d-block w-100" alt="second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>beautiful kitchen ideas</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <a href="./Calculate" className="oval-btn btn btn-primary">Calculate now</a>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={dining} className="d-block w-100" alt="third slide"/>
                        <div className="carousel-caption ">
                            <h5>say hi to beautiful dining space</h5>
                            <p>Visit your nearest Experience Centre to touch, feel and experience our products.</p>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <a href="./Store" className="oval-btn btn btn-primary">Visit Us</a>
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
           
<br/>
<br/>
<br/>
<br/>

            <div className="container3">
        <div className="row">
            <div className="col">
                <div className="centered-h2">
                    <h2>One stop shop for all things interiors</h2>
                </div>
                <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your <br/> home or office. With a wide range of furniture & decor, we have your back from start to finish </p>
            </div>
        </div>

    </div>

     <br/>
    <br/>

    <div className="container4">

    <div className="card-deck">
    
            
                <div className="card" >
                    <img src={image0} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title"> Modular Interiors </h6>
                        <p className="card-text">Functional kitchen, wardrobe and storage</p>
                        <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                    </div>
               
            </div>
            
                <div className="card" >
                    <img src={int1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">Full home interiors</h6>
                        <p className="card-text">Turkey interior solution for your home</p>
                        <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                    </div>
                </div>
            
            
                    <div className="card" style={{ width: '300px' }}>
                    <img src={int2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">Luxury Interiors</h6>
                            <p className="card-text">Tailored interiors that redefine elegance</p>
                            <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                        </div>
                    </div>
                



                
                    <div className="card" style={{ width: '300px' }}>
                        <img src={int3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Renovations Interiors</h5>
                            <p className="card-text">Export solutions to upgrade your home</p>
                            <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}></a>
                        </div>
                    </div>
                
                
               
                            

                
            <div className="card" style={{ width: '300px' }}>
                <img src={int4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Commercial Interiors</h6>
                    <p className="card-text">Hassle free solutions for your work space</p>
                    <a href="intrior.html" className="fas fa-chevron-right" style={{ fontSize: '24px', color: 'black' }}>
                    
                    </a>
                </div>
            </div>
        
       </div>
       </div>
                 
<br/>

<br/>
<br/>

<div className="container3">
            <div className="row">
                <div className="col">
                    <div className="centered-h2" style={{ marginLeft: '200px' }}>
                        <h2>Inspiration for Home Interior Designs</h2>
                    </div>
                    <p style={{ marginLeft: '200px' }}>Give your home a new look with these interior design ideas curated for you</p>
                </div>
            </div>
            <br />
            <br />
            <div className="container">
                <figure className="landscape" style={{ height: '300px' }}>
                    <img src={ms1} alt="Living room" />
                    <figcaption>Living room</figcaption>
                </figure>
                <figure>
                    <img src={ms2} alt="Master bed room" />
                    <figcaption>Master bed room</figcaption>
                </figure>
                <figure>
                    <img src={ms3} alt="False ceiling" />
                    <figcaption>False ceiling</figcaption>
                </figure>
                <figure>
                    <img src={ms4} alt="Homes by livspace" />
                    <figcaption>Homes by livspace</figcaption>
                </figure>
                <figure className="landscape" style={{ height: '300px' }}>
                    <img src={ms5} alt="Kitchen" />
                    <figcaption>Kitchen</figcaption>
                </figure>
                <figure>
                    <img src={ms6} alt="Wardrobe" />
                    <figcaption>Wardrobe</figcaption>
                </figure>
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
                        <img className="card-image" src={m1} align="center" alt="" />
                        <div className="card-title">Flat 10 year <br/> warranty</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m2} align="center" alt="Image 2" />
                        <div className="card-title">Easy EMIs</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m3} alt="Image 2" />
                        <div className="card-title">45 day move in <br/>guarantee</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m4} alt="Image 2" />
                        <div className="card-title">146 quality checks</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m5}alt="Image 2" />
                        <div className="card-title">75,000+ happy <br/>homes</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m6} alt="Image 2" />
                        <div className="card-title">50+ cities</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m7} alt="Image 2" />
                        <div className="card-title">3 countries</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m8} alt="Image 2" />
                        <div className="card-title"> 20 Lakh+ <br/> Catalogue</div>
                    </div>
                    <div className="card22">
                        <img className="card-image" src={m9} alt="Image 9" />
                        <div className="card-title">3,500+ designs</div>
                    </div>
                </div>
            </div>
        
       
        <br/>
        <br/>

<div className="custom-card-container">
            <img src={final} className="custom-card-img" alt="..." />
            <div className="custom-card-overlay">
                <b><h3>Your Dream Home is just a click away</h3></b>
                <br />
                <a href='./Popup' className="oval-btn btn btn-primary">Get Started</a>
                
            </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>


        <div className="footer">
        <div className="footer-left">
            <img src={footer} alt="Logo" />
            <div className="social-iconss">

                <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/i/flow/login" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://in.pinterest.com/" className="fab fa-pinterest"></a>
              <a href="https://web.whatsapp.com/" className="fab fa-whatsapp"></a>
              <a href="https://www.youtube.com/hashtag/youtubelink" className="fab fa-youtube"></a>
            </div>
        </div>
        <div className="footer-right">
            <p>Contact Us
                <br />
                <br />
                Call us
                <br />
                xxx-xxx-xxx
                <br />
                <br />
                Email us
                <br />
                nagadivya@gmail.com
            </p>
        </div>
    </div>

    </div>

        
    );
}
    export default Final1;

        
    
