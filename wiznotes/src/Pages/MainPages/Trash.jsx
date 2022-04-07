import React from 'react';
import './MainPages.css';
import { Wallpaper, Topnav, SideNavigation, TrashPage } from '../../Components';

const Trash = () => {
  return (
    <>
      <Wallpaper />  
      <Topnav showHamburger={true}/>
      <SideNavigation />
      <div className="pages">
        <TrashPage />
      </div>
    </>
  )
}

export { Trash };