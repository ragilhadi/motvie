import React from "react";
import { MdMovie, MdSlideshow, MdPerson, MdCollections } from "react-icons/md";
import "./Selection.scss";

const Selection = () => {
  return (
    <div className="selection-container">
      <div className="selction-option">
        <MdMovie className="logo" />
        <p>Movies</p>
      </div>
      <div className="selction-option">
        <MdSlideshow className="logo" />
        <p>TV Show</p>
      </div>
      <div className="selction-option">
        <MdPerson className="logo" />
        <p>Person</p>
      </div>
      <div className="selction-option">
        <MdCollections className="logo" />
        <p>Collection</p>
      </div>
    </div>
  );
};

export default Selection;
