import "../styles/header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className=" navbar-light bg-header">
      <div className="row">
        <div className="navbar-brand col">
          <h1>Space News</h1>
        </div>
        <div className="col">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
