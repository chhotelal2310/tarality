import React from "react";
import CallIcon from '@mui/icons-material/Call';
import logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
    return (
        <div className="header_section">
            <div className="logo">
                <img src={logo} alt="A black cat sleeping on a chair" />
            </div>

            <div className="header_column">
                <span className="header_nav">HOME</span>
                <span  className="header_nav">ABOUT</span>
                <span  className="header_nav">RESUME</span>
                <span  className="header_nav">PORTFOLIO</span>
                <span  className="header_nav">BLOG</span>
                <span  className="header_nav">CONTACT</span>
                <span>|</span>
                <span><CallIcon/></span>
                <span className="contact_number">+7348651529</span>
            </div>
        </div>
    );
};

export default Header;

