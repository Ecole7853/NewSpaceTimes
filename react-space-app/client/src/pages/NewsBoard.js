import React from "react";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
import Spacexnews from "../components/spaceXnews";
import Issnews from "../components/issNews";
import TopSpacenews from '../components/TopSpaceNews'
import Navigation from '../components/Navigation'

function NewsBoard(props) {
  return (
    <div id="newsBoardContainer" className="news-background">
    <Navigation />
    <Issnews />
      <div className="p2background">
        <Potd />
        <Spacexnews /> 
        <TopSpacenews />
      </div>
      
    </div>
  );
}

export default NewsBoard;
