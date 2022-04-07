import React from 'react';
import { useTheme } from '../../Context';
import './Button.css';

const Button = (props) => {
    const { text, size, buttonborder } = props;
    const { themeState } = useTheme();
    const { theme } = themeState;
  return (
    <button className={`btn btn-md ${theme==="light" ? 'btn-secondary-contained border-black' : 'btn-primary-contained border-white'} 
                                  ${size==="large" ? "btn-large" : ""}
                                  ${buttonborder ? "button-border" : ""}`} {...props}>{text}</button>
  )
}

export { Button };