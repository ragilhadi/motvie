import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [shadow, setshadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setshadow(true);
      } else setshadow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar-container ${shadow && "nav-shadow"}`}>
      <div className="logo">
        <Link to="/" className="motvie">
          Motvie
        </Link>
      </div>
      <div className="section-2">
        <input />
      </div>
    </div>
  );
};

export default Navbar;
