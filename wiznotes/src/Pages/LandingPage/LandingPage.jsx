import React from 'react';
import { HeroImage, Topnav, Wallpaper, Footer } from '../../Components';
 
const LandingPage = () => {
  return (
    <>
      <Wallpaper />  
      <Topnav showHamburger={false}/>
      <HeroImage />
      <Footer />
    </>
  )
}

export { LandingPage };
