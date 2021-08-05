import React from 'react';
import "../styles/header.css";

function Header() {
  return (
    <header className=" navbar-light bg-header">
      <div className="row">
        <div className="navbar-brand col">
          <h1>Space News</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
