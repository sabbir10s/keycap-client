import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner/Banner';
import Download from './Download/Download';
import Newsletter from './Newsletter/Newsletter';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner />
            <Summary />
            <Products />
            <Reviews />
            <Download />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;