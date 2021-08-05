import React from "react";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
<<<<<<< HEAD
import Navigation from "../components/Navigation";
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom'
=======
import Spacexnews from "../components/spaceXnews";
import Issnews from "../components/issNews";
import TopSpacenews from '../components/TopSpaceNews'
>>>>>>> main

function NewsBoard(props) {
  return (
    <div id="newsBoardContainer">
      { Auth.loggedIn() ? null : <Redirect to="/" />}
    <Navigation />
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
