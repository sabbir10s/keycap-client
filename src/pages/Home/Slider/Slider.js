import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.ibb.co/G2nF53f/New-Project-1.png" },
    { url: "https://i.ibb.co/nBJpCtz/New-Project-2.png" },
    { url: "https://i.ibb.co/h7r7DWt/product-2.png" },
];

const Slider = () => {
    return (
        <div className='flex items-start'>
            <SimpleImageSlider
                bgColor='#0000'
                width={440}
                height={440}
                images={images}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
            />
        </div>
    );
};

export default Slider;