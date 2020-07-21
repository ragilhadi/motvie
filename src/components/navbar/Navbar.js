import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { MdMovie, MdPerson, MdCollections, MdSlideshow } from "react-icons/md";

const Navbar = () => {
  const [shadow, setshadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshadow(true);
      } else setshadow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar-container ${shadow && "nav-shadow"}`}>
      <div className="section-1">
        <div className="logo">
          <h1>Motvie</h1>
        </div>
        <div className="options">
          <a href="#">Movies</a>
          <a href="#">Tv Show</a>
          <a href="#">Person</a>
          <a href="#">Collection</a>
        </div>
      </div>
      <div className="section-2">
        <input />
      </div>
    </div>
  );
};

export default Navbar;
