import React from "react";
import BannerPerson from "../../components/banner-person/BannerPerson";
import TextSection from "../../components/text-section/TextSection";
import RowPlaying from "../../components/row-playing/RowPlaying";

const DetailPerson = () => {
  return (
    <div>
      <BannerPerson />
      <TextSection
        title="Playing as"
        subtitle="Discover your favorite category of section"
      />
      <RowPlaying />
    </div>
  );
};

export default DetailPerson;
