import React, { useState, useEffect } from "react";
import "./Navbar.scss";

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
        <h1>Motvie</h1>
      </div>
      <div className="section-2">
        <input />
      </div>
    </div>
  );
};

export default Navbar;
