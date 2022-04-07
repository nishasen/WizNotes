import React from 'react';
import { useTheme } from '../../Context';
import './Icon.css';

const Icon = (props) => {
    const { children, iconborder } = props;
    const {themeState} = useTheme();
    const { theme } = themeState;
  return (
    <div className={`btn icon-size ${theme==="light" ? "icon-light" : "icon-dark"} ${iconborder ? "icon-border" : ""}`} {...props}>
        {children}
    </div>
  )
}

export {Icon};