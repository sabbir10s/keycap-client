import React from 'react';
import { Fade } from 'react-reveal';
import Footer from '../../components/Footer';
import Banner from './Banner/Banner';
import ContactFrom from './ContactFrom/ContactFrom';
import OurService from './OurService/OurService';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Summary from './Summary/Summary';

const Home = () => {

    return (
        <div >
            <Banner />
            <div className='mt-5 max-w-[1400px] mx-auto lg:px-20 px-2'>
                <Summary />
                <Fade bottom>
                    <Products />
                </Fade>
                <Reviews />
                <OurService />
            </div>

            <ContactFrom />
            <Footer />
        </div>
    );
};

export default Home;