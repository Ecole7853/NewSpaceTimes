import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/profile.css";
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom'


function Profile() {
  return (
    <div>
      { Auth.loggedIn() ? null : <Redirect to="/" />}
      <Navigation />

      <div className="profileBackground">
      </div>

      <Footer />
    </div>
  );
}

export default Profile;