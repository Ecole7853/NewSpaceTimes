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
    <nav>
      <div className="row navLink">
        <div className="col">
          <Link to={`/profile`}>Profile</Link>
        </div>
        <div className="col">
          <Link to={`/newsboard`}>News Feed</Link>
        </div>
        <div className="col">
        <Link onClick={logout} to={`/`}>Logout</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
