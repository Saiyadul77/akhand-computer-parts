import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventory></Inventory>
           <BusinessSummary></BusinessSummary>
           <Reviews></Reviews>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;