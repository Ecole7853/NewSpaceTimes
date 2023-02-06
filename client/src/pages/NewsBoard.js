import React from "react";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
import Navigation from "../components/Navigation";
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom'
import Spacexnews from "../components/spaceXnews";
import Issnews from "../components/issNews";
import TopSpacenews from '../components/TopSpaceNews'

function NewsBoard(props) {
  return (
    <div id="newsBoardContainer">
      {Auth.loggedIn() ? null : <Redirect to="/" />}
      <Navigation />
      <Issnews />
      <div className="p2background">
        <div>
        <div className="col">
          <Potd />
        </div>
        <div className="col">
          <Spacexnews />
        </div>
        </div>
        <div className="col">
          <TopSpacenews />
        </div>
      </div>

    </div>
  );
}

export default NewsBoard;
