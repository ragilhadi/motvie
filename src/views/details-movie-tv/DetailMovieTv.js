import React from "react";
import BannerDetails from "../../components/banner-details/BannerDetails";
import TextSection from "../../components/text-section/TextSection";
import RowCast from "../../components/row-cast/RowCast";
import RowRecommended from "../../components/row-recommended/RowRecommended";

const DetailMovieTv = (props) => {
  const { identification } = props.location.state;
  return (
    <div>
      <BannerDetails id={identification} />
      <TextSection
        title="Cast"
        subtitle="Discover your favorite category of section"
      />
      <RowCast id={identification} />
      <TextSection
        title="Reccomendation"
        subtitle="Discover your favorite category of section"
      />
      <RowRecommended id={identification} />
    </div>
  );
};

export default DetailMovieTv;
