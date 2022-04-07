import React, { useState } from 'react';
import './MainPages.css';
import { Wallpaper, Topnav, SideNavigation, TrashPage } from '../../Components';

const Trash = () => {
  //const {page, setPage} = usePage();
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