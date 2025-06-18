
import React from 'react';
import Hero from './Hero';
// import Awards from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Educaton';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
        <Hero/>
        {/* <Awards/> */}
        <Stats/>
        <Pricing />
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;