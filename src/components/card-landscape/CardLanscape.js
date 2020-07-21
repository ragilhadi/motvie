import React from "react";
import "./CardLanscape.scss";
import Backdrop from "../../assets/backdrop.jpg";

const CardLanscape = () => {
  return (
    <div className="card-lanscape">
      <img src={Backdrop} className="image" alt="backdrop" />
      <div className="details-card">
        <p className="title">Train to Busan</p>
        <p className="description">This website is build to user ea</p>
      </div>
    </div>
  );
};

export default CardLanscape;
