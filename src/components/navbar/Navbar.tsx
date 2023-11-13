import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoBitcoin } from "react-icons/bi";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";

const Navbar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState(false); //State for menu
  const [results, setResults] = useState<any[]>([]);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userIsLoggedIn = !!token; //Flag to indicate if the user is logged in

  //Toggle the menu
  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/Logout"
      );
      const userInfo = response.data;
      console.log(userInfo);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="circle-header"></div>

      {/* Logo */}
      <div className="logo">
        <BiLogoBitcoin />
        {/* <span>Oldbnb</span> */}
      </div>

      <div className="circle-container">
        <div className="circle">Oldbnb</div>
      </div>
      <Searchbar setResults={setResults} />

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
          {userIsLoggedIn ? (
            <button className="login links logout" onClick={handleLogout}>
              Logga ut
            </button>
          ) : (
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
