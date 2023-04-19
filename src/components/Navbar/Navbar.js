import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar-div'>
      <Link to="/giveconsent" className='link'>
        Give Consent
      </Link>

      <Link to="/checkconsent" className='link'>
        Check Consent
      </Link>
      
      <Link to="/revokeconsent" className='link'>
        Revoke Consent
      </Link>
    </div>
  )
}

export default Navbar