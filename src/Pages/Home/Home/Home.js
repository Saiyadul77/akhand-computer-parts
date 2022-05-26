import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Inventory from '../Inventory/Inventory';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventory></Inventory>
           <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;