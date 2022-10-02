import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner/Banner';
import ContactFrom from './ContactFrom/ContactFrom';
import OurService from './OurService/OurService';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {

    return (
        <div >
            <Banner />
            <div className='max-w-[1400px] mx-auto lg:px-20 px-2'>
                <Products />
            </div>

            <OurService />
            <div className='max-w-[1400px] mx-auto lg:px-20 px-2'>
                <Reviews />
            </div>

            <ContactFrom />
            <Footer />
        </div>
    );
};

export default Home;