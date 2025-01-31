import React, { useState } from 'react';
import '../CSS/Style.css';
import Thops from '../Image/Thops.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Thops} alt="Logo" className="logo" />
          <span className="website-name">Thopstech</span>
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" onClick={toggleMenu}><i className="fas fa-home"></i> Home</a>
          <a href="/all-courses" onClick={toggleMenu}><i className="fas fa-newspaper"></i> All Courses</a>
          <a href="/career" onClick={toggleMenu}><i className="fas fa-envelope"></i> Career Opportunities</a>
          <a href="/placements" onClick={toggleMenu}><i className="fas fa-home"></i> Placements</a>
          <a href="/about" onClick={toggleMenu}><i className="fas fa-info-circle"></i> About</a>
          <a href="/contact" onClick={toggleMenu}><i className="fas fa-home"></i> Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className="home-content">
        <h1>Thops Tech Career Solutions</h1>
        <p>Tell me and I forget, teach me and I may remember, Involve me and I learn.</p>
        <button className="view-courses">View all Courses</button>
      </div>
    </div>
  );
}

export default App;
