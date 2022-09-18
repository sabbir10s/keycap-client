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
        <div >
            <Banner />
            <div className='mt-5 max-w-[1400px] mx-auto lg:px-20 px-2'>
                <Summary />
                <Products />
                <Reviews />
                <Download />
            </div>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;