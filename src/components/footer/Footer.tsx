import { BiLogoBitcoin } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        {/* Logo and Oldbnb */}
        <div className="logo-footer">
          <BiLogoBitcoin />
          <div>
            <h3>Oldbnb</h3>
          </div>
        </div>
        <Link to={"/Policy"}>Avbokningspolicy</Link>
        <Link to={"/ContactUs"}>Kontakta oss</Link>
        <Link to={"/AboutUs"}>Om oss</Link>

        <div className="logo-links">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <AiOutlineLinkedin />
          <AiOutlineYoutube />
        </div>
      </div>

      <div className="underline"></div>

      <div className="idk">
        <p className="all-rights">2023 © Alla rättigheter reserverade.</p>
        <p className="p-underline">Användarvilkor</p>
        <p className="p-underline">Kakor</p>
      </div>


      <div className='circle-footer'>

      </div>
    </div>
  );
};

export default Footer;
