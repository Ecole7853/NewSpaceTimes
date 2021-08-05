import React from "react";
//import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
import Navigation from "../components/Navigation";

function NewsBoard(props) {
  return (
    <div>
      <Navigation />

      <div className="p2background">
        <Potd />
      </div>

      <Footer />
    </div>
  );
}

export default NewsBoard;
