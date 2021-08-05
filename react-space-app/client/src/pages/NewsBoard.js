import React from "react";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
import Spacexnews from "../components/spaceXnews";
import Issnews from "../components/issNews";
import TopSpacenews from '../components/TopSpaceNews'

function NewsBoard() {
  return (
    <div id="newsBoardContainer">

      <div className="p2background">
        <Potd />
        <Spacexnews /> 
        <Issnews />
        <TopSpacenews />
      </div>
      
    </div>
  );
}

export default NewsBoard;
