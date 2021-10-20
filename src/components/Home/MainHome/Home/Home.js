import React from 'react';
import Banner from '../Banner/Banner';
import Specialist from '../../SpecialistInfo/Specialist/Specialist';
import FreeCare from '../FreeCare/FreeCare';
import Services from '../../ServiceInfo/Services/Services';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <Services></Services>
           <Specialist></Specialist>
           <FreeCare></FreeCare>
        </div>
    );
};

export default Home;