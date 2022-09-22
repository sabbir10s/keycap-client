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
            <OurService />
            <div className='mt-5 max-w-[1400px] mx-auto lg:px-20 px-2'>
                <Products />
                <Reviews />
            </div>

            <ContactFrom />
            <Footer />
        </div>
    );
};

export default Home;