import React from "react";
import "./CardPerson.scss";

const CardPerson = () => {
  return (
    <div className="card-person">
      {/* <img /> */}
      <div className="details">
        <p className="name-cast">Josh Radnor</p>
        <p className="name-real">Ted Mosby</p>
      </div>
    </div>
  );
};

export default CardPerson;
