import React from "react";
import BannerDetails from "../../components/banner-details/BannerDetails";
import TextSection from "../../components/text-section/TextSection";

const DetailMovieTv = () => {
  return (
    <div>
      <BannerDetails />
      <TextSection
        title="Cast"
        subtitle="Discover your favorite category of section"
      />
    </div>
  );
};

export default DetailMovieTv;
