import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import "./Footer.css";
import { useTheme } from '../../Context';

const Footer = () => {
    const { themeState } = useTheme();
    const { theme } = themeState;
  return (
    <div className={`footer ${theme==="light" ? "footer-light" : "footer-dark"}`}>
        <h4 className={theme==="light" ? "footer-text-light" : "footer-text-dark"}>Created with 💖 by Nisha Sen</h4>
        <div className="footer-links">
            <a href="https://github.com/nishasen" rel="noreferrer" target="_blank" className={`footer-icon ${theme==="light" ? "footer-text-light" : "footer-text-dark"}`}><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/nisha-sen-13644b191/" rel="noreferrer"target="_blank" className={`footer-icon ${theme==="light" ? "footer-text-light" : "footer-text-dark"}`}><FaLinkedin /></a>
            <a href="https://twitter.com/NishaSe58693459" rel="noreferrer" target="_blank" className={`footer-icon ${theme==="light" ? "footer-text-light" : "footer-text-dark"}`}><FaTwitterSquare /></a>
        </div>
    </div>
  )
}

export  { Footer };