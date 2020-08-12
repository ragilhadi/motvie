import React, { useState, useEffect } from "react";
import "./Searchbar.scss";
import { MdSearch } from "react-icons/md";

const Searchbar = () => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setStyle(true);
      } else setStyle(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`${style && "transparent"} search-container`}>
      <input
        type="text"
        className="search-bar"
        placeholder="What are you looking for?"
      />
      <MdSearch className={`icon-search ${style && "icon-colorized"}`} />
    </div>
  );
};

export default Searchbar;
