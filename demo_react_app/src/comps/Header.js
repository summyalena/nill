import React from 'react';
import '../App.css';
import splitlogo from '../images/splitlogo.png';

function Header() {
  return (
      <img className="splitImage" src={splitlogo} />
  )
}

export default Header;