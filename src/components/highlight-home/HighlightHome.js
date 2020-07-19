import React from "react";
import ButtonPrimary from "../button-primary/ButtonPrimary";
import Backdrop from "../../assets/backdrop.jpg";
import "./HighlightHome.scss";
import ButtonSecondary from "../button-secondary/ButtonSecondary";

const HighlightHome = () => {
  return (
    <div className="highlight">
      <div className="info">
        <div className="description">
          <h1>Train to Busan</h1>
          <p>
            A first-time captain leads a convoy of allied ships carrying
            thousands of soldiers across the treacherous waters of the “Black
            Pit
          </p>
        </div>
        <div className="buttons">
          <ButtonPrimary className="button-1">Details</ButtonPrimary>
          <ButtonSecondary>Play Trailer</ButtonSecondary>
        </div>
      </div>
      <div className="overlay"></div>
      <img src={Backdrop} alt="backdrop" className="backdrop" />
    </div>
  );
};

export default HighlightHome;
