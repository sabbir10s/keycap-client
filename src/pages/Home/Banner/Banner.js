import React from 'react';
import './Banner.css'
import Slider from '../Slider/Slider';

const Banner = () => {

    return (
        <div className="max-w-[1400px] mx-auto px-2 md:px-5 lg:px-20 md:h-screen flex items-center bgImg">
            <div id='#hero' className="grid grid-cols-1 md:grid-cols-2  items-center">
                <div className='pb-14 order-2 md:order-1'>
                    <h1 className="text-3xl md:text-5xl font-bold">Best Tech, Best Future!</h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-primary py-4">Largest gadgets manufacturer</h2>
                    <p className="">NEXIQ build different types of gadget, which is world wide popular. Here you can order large amount of product for your shop or organization. </p>
                    <button className="mt-6 text-base-100 font-bold bg-primary hover:bg-secondary hover:text-black duration-300 shadow-md shadow-secondary hover:shadow-primary py-3 px-5 rounded-full tracking-wide"> <a href="#products">Get Start Booking</a> </button>
                </div>
                <div className='relative flex justify-center items-center order-1 md:order-2'>
                    <div><Slider /></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;