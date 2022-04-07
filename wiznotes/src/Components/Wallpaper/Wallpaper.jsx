import React from 'react';
import './Wallpaper.css';
import { useTheme } from '../../Context';

const Wallpaper = () => {
  const { themeState } = useTheme();   
  const { theme } = themeState;
  return (
    <div className={`wallpaper ${theme==="light" ? "light-bg" : "dark-bg" }`} />
  )
}

export { Wallpaper };