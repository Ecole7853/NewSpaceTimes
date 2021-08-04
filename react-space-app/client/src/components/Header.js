import React from 'react';
import "../styles/header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className=" navbar-light bg-header">
      <div className="row">
        <div id="navbar" className="navbar-brand col">
          <h1 id="headerH1">New Space Times</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
