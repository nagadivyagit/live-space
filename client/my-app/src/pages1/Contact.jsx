

import React from 'react';
import './Contactcss.css'; 
import  contact from './Images/contact.png';
import Navbar from "../pages1/Navbar";
import Footer from '../pages1/Footer';



const ContactPage = () => {
  return (
    <div>
        <div className='n'><Navbar/></div> 
    <div className="containerc">
      <div className="contact-section">
        <img src={contact} alt=" " className="contact-image" />
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-paragraph">
          Help is just a click away <br/> Call us anytime between 11am-8pm.
        </p>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>care@livs.com</td>
              <td>&#x2709;</td>
            </tr>
            <tr>
              <td>123-456-7890</td>
              <td>&#x1F4F1;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className='n'><Footer/></div> 
    </div>
  );
}

export default ContactPage;
