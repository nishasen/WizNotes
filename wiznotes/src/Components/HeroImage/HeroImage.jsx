import React from 'react';
import './HeroImage.css';
import HeroLight from '../../Assets/HeroLight.svg';
import HeroDark from '../../Assets/HeroDark.svg';
import { Button } from '..';
import { useTheme, useAuth } from '../../Context';
import { useNavigate } from 'react-router';

const HeroImage = () => {
  const { userLogin } = useAuth();
  const { themeState } = useTheme();
  const navigate = useNavigate();
  const { theme } = themeState;
  const HeroImage = theme==="light" ? HeroLight : HeroDark;
  const checkLogin = () => userLogin ? navigate("/notes", { replace: true }) : navigate("/login", { replace: true });

  return (
    <div className="dis-grid hero-container">
      <img src={HeroImage} alt="hero" className="hero"/>
      <div className="hero-content">
      <h3 className={theme==="light" ? "hero-text-light" : "hero-text-dark"}>
        Note-taking can be something you do for yourself, or something you do with and for others. 
        WizNotes will help you in making your notes and help you organize your day.</h3>
       <Button text="Get started" size="large" buttonborder={true} onClick={checkLogin}/>
      </div>  
    </div>
  )
}

export { HeroImage };