import React from 'react';
import { useTheme } from '../../Context';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { themeState } = useTheme();
  const { theme } = themeState;
  return (
    <Link to="/" className="btn-link"><div className={`header ${theme==="light" ? "light-header" : "dark-header" }`}>WizNotes</div></Link>
  )
}

export { Header };
