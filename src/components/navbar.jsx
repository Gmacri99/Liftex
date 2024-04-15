import React from 'react';
import { Link } from 'react-router-dom';
import Group from '../img/Group 26.svg'
import logo from '../img/logo.svg'
function Navbar() {
  return (
    <nav>
      <header>
        <ul>
          <div>
            <li><img className="img-nav-1" src={Group} alt="Group26" /></li>
            <li><img className="img-nav-2" src={logo} alt="logo" /></li>
          </div>
          <li><a className="btn btn-link" to="/gallery">GALLERY</a></li>
          <li><a className="btn btn-link" to="/about">ABOUT US</a></li>
          <li>
            <a className="btn quote-contact" to="/contact">
              contact us 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M11.5 0.999999C11.5 0.723857 11.2761 0.499999 11 0.499999L6.5 0.5C6.22386 0.499999 6 0.723857 6 0.999999C6 1.27614 6.22386 1.5 6.5 1.5L10.5 1.5L10.5 5.5C10.5 5.77614 10.7239 6 11 6C11.2761 6 11.5 5.77614 11.5 5.5L11.5 0.999999ZM1.35355 11.3536L11.3536 1.35355L10.6464 0.646446L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                    </svg>
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
