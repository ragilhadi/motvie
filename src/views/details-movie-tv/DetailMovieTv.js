import React from "react";
import BannerDetails from "../../components/banner-details/BannerDetails";
import TextSection from "../../components/text-section/TextSection";
import RowCast from "../../components/row-cast/RowCast";

const DetailMovieTv = () => {
  return (
    <div>
      <BannerDetails />
      <TextSection
        title="Cast"
        subtitle="Discover your favorite category of section"
      />
      <RowCast />
    </div>
  );
};

export default DetailMovieTv;
