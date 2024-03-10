import { Link } from "react-router-dom";
import logo from "../images/logo2.webp";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Header: React.FC = () => {

  return (
    <div className='header'>
      <div className="header-content">
        <div className="logo">
          <a href="home">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </a>
        </div>
        <div className="header-location">
          <span>541 Hudson St,</span>
          <span>New York, NY 10014</span>
        </div>
        <nav className="site-nav">
          <ul>
            <Link to="./reserve">Reserve</Link>
            <Link to="./contact">Contact</Link>
            <Link to="./ourStory">Our Story</Link>
            <Link to="./location">Hours & Locations</Link>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <span className="powered">Powered by Garri S.</span>
    </div>
  );
};
