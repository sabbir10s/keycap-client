import React from 'react';
import './Banner.css'
import Slider from '../Slider/Slider';
import { BsArrowRight } from 'react-icons/bs';


const Banner = () => {

    return (
        <div className="md:py-5 lg:py-20 bgImg">
            <div id='#hero' className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-5  items-center">
                <div className='pb-14 order-2 lg:order-1'>
                    <h2 className="text-lg md:text-xl font-medium text-primary ">Largest gadgets supplier</h2>
                    <h1 className="text-3xl md:text-5xl font-bold py-4">Best Tech, Best Future!</h1>
                    <p className="">NEXIQ build different types of gadget, which is world wide popular. Here you can order large amount of product for your shop or organization. </p>
                    <a className="mt-6 border-[1px] border-primary hover:border-[1px] hover:border-transparent bg-white hover:bg-primary text-primary hover:text-white duration-300 w-[150px] py-2 flex items-center justify-center gap-1" href="#products"><span>Shop Now </span> <BsArrowRight className='text-lg' /></a>
                </div>
                <div className='relative flex justify-center lg:justify-end items-center order-1 lg:order-2'>
                    <div><Slider /></div>

                </div>
            </div>
        </div >
    );
};

export default Banner;