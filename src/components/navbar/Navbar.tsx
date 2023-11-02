import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoBitcoin } from "react-icons/bi";
import { UserContext } from "../../context/UserContext";

// Define a type for the search query
type SearchQuery = string;

const Navbar: React.FC<{}> = () => {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>(""); // State to hold the search query
  const [menuOpen, setMenuOpen] = useState(false); //State for menu
  const { user, setUser } = useContext(UserContext)

  const handleSearch = () => {
    // Handle the search logic here
    console.log(`Performing a search for: ${searchQuery}`);
  };

  //Handle search
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //Toggle the menu
  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <BiLogoBitcoin />
        {/* <span>Oldbnb</span> */}
      </div>

      <div className="circle-container">
        <div className="circle">Oldbnb</div>
      </div>

      <div className="search-container">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Sök destination..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className="search-btn" onClick={handleSearch}>
            Sök
          </button>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <AiOutlineMenu />
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`menu menu-links ${menuOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            <AiOutlineClose />
          </div>

          <Link className="links hover link" to="/">
            Hem
          </Link>
          <Link className="links hover link" to="/AboutUs">
            Om Oss
          </Link>
          <Link className="links hover link" to="/ContactUs">
            Kontakta Oss
          </Link>
          { user ? ( 
            <button className="login links" onClick={handleLogout}>
            Logga ut
          </button>
          ): (
            <button className="login">
            <Link className="links" to="/Login">
              Logga in
            </Link>
          </button>
          )}
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
