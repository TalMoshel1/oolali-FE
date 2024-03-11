import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components-css/Navbar.css";

const Navbar = ({ onAboutClick, onPhotosClick, onContactClick }) => {
  return (
    <nav className='align-ul'>
      <ul>
        <li onClick={onAboutClick}>About</li>
        <li onClick={onContactClick}>Contact</li>
        <li onClick={onPhotosClick}>Photos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
