import React, { useState } from 'react';
import './MainPages.css';
import { Wallpaper, Topnav, SideNavigation, ArchivePage } from '../../Components';

const Archive = () => {
  return (
    <>
      <Wallpaper />  
      <Topnav showHamburger={true}/>
      <SideNavigation />
      <div className="pages">
        <ArchivePage />
      </div>
    </>
  )
}

export { Archive };