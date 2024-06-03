import React from 'react';
import './Popupcss.css'; // Import your CSS file here

function PopupForm() {
  return (
    <div className="centerp" >
      
      <div className="containerp">
        <label htmlFor="show" className="close-btnp fas fa-times" title="close"></label>
        <div className="text">Talk to Designer</div>
        <form action="#">
          <div className="datap">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="datap">
            <label>Email </label>
            <input type="text" required />
          </div>
          <div className="datap">
            <label>Phone number</label>
            <input type="password" required />
          </div>
         
          <div className="btnp">
            <div className="innerp"></div>
            <button type="submit">Get Free Quote</button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
