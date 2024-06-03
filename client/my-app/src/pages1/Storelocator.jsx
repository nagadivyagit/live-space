import React, { useState } from 'react';
import BK1 from './Images/BK1.avif';
import Navbar from "../pages1/Navbar";
import Footer from '../pages1/Footer';
import './LocationMap.css';

const locations = {
  Hyderabad: {
    mapUrl: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.086218065141!2d78.3728567!3d17.455586999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9348c88493d9%3A0xc2318d552f5c261e!2sLivspace!5e0!3m2!1sen!2sin!4v1717146162787!5m2!1sen!2sin",
    address: "Livspace-NTR Pride Building Plot No-42, Jubliee Enclave Hitech City,Hyderabad, Telangana-500081, India"
  },
  Bangalore: {
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.193766397517!2d77.6443716!3d13.0233295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176b011f6599%3A0x97121b78962bbe17!2sLivspace%20-%20Interior%20Design%20Studio%2C%20HRBR%20Layout!5e0!3m2!1sen!2sin!4v1717147876959!5m2!1sen!2sin",
    address: "Livspace-715, 2nd floor, 715,5th A cross road, HRBR Layout, Kalyan nagar,Bangalore-560043, Karnataka, India"
  },
  Mumbai: {
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5773077578147!2d72.8256026!3d18.9942662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5628f39117%3A0x2ed8c1beb22a3312!2sLivspace%20-%20Interior%20Design%20Studio%2C%20Lower%20Parel!5e0!3m2!1sen!2sin!4v1717147747667!5m2!1sen!2sin", 
    address: "Livspace-No 9, Janata Industrial Compound, 162, SB Marg,Lower Parel West, Mumbai-400013, Maharashtra, India"
  },
  Pune: {
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.767614217488!2d73.8951299!3d18.539400699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14399c516eb%3A0x627a29062f49378e!2sLivspace%20-%20Interior%20Design%20Studio%2C%20Koregaon%20Park!5e0!3m2!1sen!2sin!4v1717147518080!5m2!1sen!2sin",
    address: "Livspace-Koregaon park lane no-4,plot no.122,2,main road opposite Ajmera society, Pune, Maharastra 411001, India"
  },
  Chennai: {
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.674078782605!2d80.231523!3d12.928657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dab920b1349%3A0x2de937f4cc92ceb3!2sLivspace%20-%20Interior%20Design%20Studio%2C%20OMR%20Road!5e0!3m2!1sen!2sin!4v1717147046630!5m2!1sen!2sin",
    address: "Livspace-first floor, Bhoomi building, OMR road, Annani Indira Nagar, Thoraipakkam, chennai, Tamilnadu-600097, India"
  }
};

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <img src={BK1} alt="" className="carousel-image" />

        <section>
          <h1 className="headingst"><span> Store Location</span></h1>
          <div className='containerst'>
            <div className="contact-box">
              <div className="dropdown">
                <label htmlFor="locationSelect">Select Location:</label>
                <select id="locationSelect" onChange={handleLocationChange} value={selectedLocation}>
                  <option value="">--Select a location--</option>
                  {Object.keys(locations).map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              {selectedLocation && (
                <div className="map-address-containerst">
                  <div className="address-box">
                    <h2>Address:</h2>
                    <p>{locations[selectedLocation].address}</p>
                  </div>
                  <div className="map-containerst">
                    <iframe
                      src={locations[selectedLocation].mapUrl}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  );
};

export default LocationMap;
