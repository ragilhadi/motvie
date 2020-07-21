import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./views/home/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
