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
    <div className="navContainer">
      <ul className="nav">
        <li className="nav-link">
        <Link to={`/profile`}>Profile</Link>
        </li>
        <li className="nav-link">
        <Link to={`/newsboard`}>News</Link>
        </li>
        <li className="nav-link">
        <Link onClick={logout} to={`/`}>Logout</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
