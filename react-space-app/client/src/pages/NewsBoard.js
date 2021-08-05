import React from "react";
import Footer from "../components/Footer";
import "../styles/newsboard.css";
import Potd from '../components/PoTD';
import Navigation from "../components/Navigation";
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom'

function NewsBoard(props) {
  return (
    <div id="newsBoardContainer">
      { Auth.loggedIn() ? null : <Redirect to="/" />}
    <Navigation />
      <div className="p2background">
        <Potd />
      </div>

      <Footer />
    </div>
  );
}

export default NewsBoard;
