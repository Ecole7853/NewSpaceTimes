import './styles/App.css';
import React, { useState } from "react";
import FrontPage from "./components/FrontPage";
import Profile from "../src/pages/Profile";

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  //    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <FrontPage pageChanger = {pageChanger}/>;
      }
      if (currentPage === 'Profile'){
        return <Profile/>
      }
    };
  
  const pageChanger = (page) => setCurrentPage(page);
  
    return (
      <div>
        {renderPage()}
      </div>
    );
}

export default App;