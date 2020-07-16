import React from "react";
import "./BannerDetails.scss";

const BannerDetails = () => {
  return (
    <div className="banner">
      <div className="banner-details">
        <h1 className="title">
          The Old Guard <span className="year">(2020)</span>
        </h1>
        <div className="genre-duration">
          <div className="genre-duration-detail">
            <div className="little-circle"></div>
            <p className="genre-duration-detail__text">Action,Fantasy</p>
          </div>
          <div className="genre-duration-detail">
            <div className="little-circle"></div>
            <p className="genre-duration-detail__text">2h 4m</p>
          </div>
        </div>
        <div className="rating-trailer">
          <div className="rating-trailer-detail">
            <div className="rounded-icon">
              <p>7.4</p>
            </div>
            <p className="rating-trailer-detail__text">Score</p>
          </div>
          <div className="rating-trailer-detail">
            <div className="rounded-icon">
              <p>7.4</p>
            </div>
            <p className="rating-trailer-detail__text">Play Trailer</p>
          </div>
        </div>
        <p className="description">
          Four undying warriors who've secretly protected humanity for centuries
          become targeted for their mysterious powers just as they discover a
          new immortal.
        </p>
      </div>
      <div className="banner-poster"></div>
    </div>
  );
};

export default BannerDetails;
