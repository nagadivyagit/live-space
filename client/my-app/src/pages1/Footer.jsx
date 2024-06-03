import React from 'react';
import './Footercss.css';
import footer from './Images/footer.svg';

function Footer() {
    return (
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



        
    );
}
    export default Footer;