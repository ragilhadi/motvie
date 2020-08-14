import React from "react";
import BannerPerson from "../../components/banner-person/BannerPerson";
import TextSection from "../../components/text-section/TextSection";
import RowPlaying from "../../components/row-playing/RowPlaying";

const DetailPerson = (props) => {
  const identification = props.match.params.id;
  return (
    <div>
      <BannerPerson id={identification} />
      <TextSection
        title="Playing as"
        subtitle="Discover your favorite category of section"
      />
      <RowPlaying id={identification} />
    </div>
  );
};

export default DetailPerson;
