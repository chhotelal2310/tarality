import React from 'react';
import hero_logo from '../assets/hero-img.jpg';
import '../styles/hero.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='hero_logo'>
                <img src={hero_logo} />
            </div>

            <div className='hero_name'>
                <h1>Hi, I am </h1><span>Chhotelal Patel</span>
            </div>

            <div className="hero_content">
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
                <p>I also make website more & more interactive with web animations.</p>     
            </div>

            <div  className="hero_button">
                <button><FacebookIcon/></button>
                <button><TwitterIcon/></button>
                <button><GitHubIcon/></button>
            </div>
        </div>
    );
}

export default Hero;
