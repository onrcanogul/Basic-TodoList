// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "@mui/material";


const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className="footer">
    <div className="footerText">Copyright - {year}</div> 
    <div className="icons">
    <Link to = "https://www.instagram.com/" target="_blank"><svg className="icon instagramicon"><InstagramIcon /></svg></Link>
    <Link to="https://www.linkedin.com/" target="_blank"><svg className="icon linkedinicon"><LinkedInIcon /></svg></Link>
    <Link to="https://www.twitter.com/" target="_blank"><svg className="icon xicon"><XIcon /></svg></Link>          
    <Link to="https://www.youtube.com/" target="_blank"><svg className="icon youtubeicon"><YouTubeIcon /></svg></Link>                        
    </div>
    </footer>

}


export default Footer;