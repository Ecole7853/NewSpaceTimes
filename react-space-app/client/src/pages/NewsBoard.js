import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import React from "react";
import Potd from "../components/PoTD";

function NewsBoard() {
  return (
    <div>
      <Header />

      <div className="p2background">
        <Potd />
      </div>

      <Footer />
    </div>
  );
}

export default NewsBoard;
