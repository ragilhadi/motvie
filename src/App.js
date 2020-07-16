import React from "react";
import Footer from "./components/footer/Footer";
import CardPerson from "./components/card-person/CardPerson";
import BannerDetails from "./components/banner-details/BannerDetails";

function App() {
  return (
    <div className="App">
      <BannerDetails />
      <CardPerson />
      <Footer />
    </div>
  );
}

export default App;
