import { Link } from "react-router-dom";
import logo from "../images/logo2.webp"
import { useState } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const SmallScreenHeader: React.FC = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    const toggleHeaderVisibility = () => {
        setIsHeaderVisible(!isHeaderVisible);
    };

    return (
        <div className={`header-and-address ${isHeaderVisible ? "header-visible" : ""}`}>
            <header className="header-small-screen"> 
                <div className="logo">
                    <Link to="/home">
                        <img src={logo} alt="logo" onClick={toggleHeaderVisibility} />
                    </Link>
                </div>
                <button onClick={toggleHeaderVisibility} className="toggle-header">{isHeaderVisible ? "✕" : "☰"}</button>
            </header>
            <div className="header-site-nav">
                <div>
                    <div  className="site-nav">
                        <ul>
                            <li><Link to="/reserve" onClick={toggleHeaderVisibility}>Reserve</Link></li>
                            <li><Link to="/contact" onClick={toggleHeaderVisibility}>Contact</Link></li>
                            <li><Link to="/ourStory" onClick={toggleHeaderVisibility}>Our Story</Link></li>
                            <li><Link to="/location" onClick={toggleHeaderVisibility}>Hours & Locations</Link></li>
                        </ul>
                    </div>
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
                    <div className="header-location">
                        <span>541 Hudson St, New York, NY 10014</span>
                        <span className="powered">Powered by Garri S.</span>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};