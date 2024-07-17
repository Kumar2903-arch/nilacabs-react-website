import React from 'react';
import './popup.css';

const Popup = ({ message, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-button" onClick={closePopup}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
