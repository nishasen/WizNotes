import React from 'react';
import './MainPages.css';
import { Wallpaper, Topnav, SideNavigation, NotePage } from '../../Components';

const Notes = () => {
 
  return (
    <>
      <Wallpaper />  
      <Topnav showHamburger={true}/>
      <SideNavigation />
      <div className="pages">  
        <NotePage />
      </div>
    </>
  )
}

export { Notes };