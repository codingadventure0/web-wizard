import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">ishwar.dev</div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
<<<<<<< HEAD
          <a href="/project" onClick={() => setIsOpen(false)}>
=======
          <a href="#project" onClick={() => setIsOpen(false)}>
>>>>>>> 5ef484218778e2d0e2e30a7a9e484b179adf8a1b
            Projects
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a href="/about" onClick={() => setIsOpen(false)}>
=======
          <a href="#skill" onClick={() => setIsOpen(false)}>
>>>>>>> 5ef484218778e2d0e2e30a7a9e484b179adf8a1b
            Skills
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a href="/Contact" onClick={() => setIsOpen(false)}>
=======
          <a href="#contact" onClick={() => setIsOpen(false)}>
>>>>>>> 5ef484218778e2d0e2e30a7a9e484b179adf8a1b
            Contact
          </a>
        </li>
      </ul>

      <div className="menu-btn" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
