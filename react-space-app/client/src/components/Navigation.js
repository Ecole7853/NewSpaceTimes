import "../styles/navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

function Navigation() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav id="navContainer">
      <div className="row navLink">
        <div id="navOne" className="col">
          <Link to={`/profile`}>Profile</Link>
        </div>
        <div id="navTwo" className="col">
          <Link to={`/newsboard`}>News</Link>
        </div>
        <div id="navThree" className="col">
        <Link onClick={logout} to={`/`}>Logout</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
