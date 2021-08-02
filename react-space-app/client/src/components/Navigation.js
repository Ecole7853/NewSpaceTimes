import "../styles/navigation.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="row navLink">
        <div className="col">
          <Link to={`/`}>Profile</Link>
        </div>
        <div className="col">
          <Link to={`/`}>News Feed</Link>
        </div>
        <div className="col">
          <Link to={`/`}>Logout </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
