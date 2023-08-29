/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Fade} from 'react-reveal';
import {AiOutlineHeart, AiOutlineShopping, AiOutlineEye, AiFillHeart} from 'react-icons/ai';
import './ProductCard.css'
import Modal from '../shared/Modal';
import ProductQuickDetails from './ProductQuickDetails';

const BestProductsCard = ({product}) => {
  const [wishlist,
    setWishlist] = useState(false);
  const {name, image, price} = product;

  const [isOpen,
    setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {productId} = useParams()

  return (
    <div>
      <Fade bottom>
        <div
          className='cursor-pointer w-full border-[1px] border-base-200 p-2 rounded-[5px] group'>
          <div className='flex flex-col p-2 relative'>
            <button >
              <div className='flex justify-center items-center h-[200px]'>
                <img className='w-[180px]' src={image} alt=""/>
              </div>
              <div className='h-[80px] flex items-center'>
                <div>
                  <p className='font-bold text-left text-sm lg:text-lg mb-1'>{name}</p>
                  <p className='text-primary text-xl text-left font-bold'>${price}</p>
                </div>
              </div>
            </button>
            <div className='absolute right-0 flex flex-col gap-3 m-4 '>
              <button
                onClick={() => setWishlist(!wishlist)}
                className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block'
                href="#">
                {!wishlist && <AiOutlineHeart/>}
                {wishlist && <AiFillHeart className='text-[#FF5555]'/>}
              </button>
              <a
                className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block'
                href="#"><AiOutlineShopping/></a>
              <button
                onClick={openModal}
                className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block'
                href="#"><AiOutlineEye/></button>
            </div>
          </div>
        </div>
      </Fade>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ProductQuickDetails product={product} productId={productId}/>
      </Modal>
    </div>
  );
};

export default BestProductsCard;