import React from "react";
import Footer from "./components/footer/Footer";
import Row from "./components/row/Row";
import request from "./api/request";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Row type="Netlix" genre="Originals" url={request.fetchNetflixOri} />
      <Row type="Discover" genre="Trending" url={request.fetchTrending} />
      <Footer />
    </div>
  );
}

export default App;
