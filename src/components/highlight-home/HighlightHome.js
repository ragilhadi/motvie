import React from "react";
import ButtonPrimary from "../button-primary/ButtonPrimary";
import "./HighlightHome.scss";
import ButtonSecondary from "../button-secondary/ButtonSecondary";

const HighlightHome = () => {
  return (
    <div className="highlight">
      <h1>Train to Busan</h1>
      <p>
        A first-time captain leads a convoy of allied ships carrying thousands
        of soldiers across the treacherous waters of the “Black Pit
      </p>
      <div>
        <ButtonPrimary>Details</ButtonPrimary>
        <ButtonSecondary>Play Trailer</ButtonSecondary>
      </div>
    </div>
  );
};

export default HighlightHome;
