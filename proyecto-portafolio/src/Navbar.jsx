import React, { useState } from 'react';
//import './Navbar.css'; // Importamos el CSS externo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="navIzq">Valery Núñez</div>

        <div className={`navDer ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#init">Init</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
