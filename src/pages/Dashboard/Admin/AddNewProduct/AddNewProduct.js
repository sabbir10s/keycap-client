import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RiImageAddFill } from 'react-icons/ri';
import ImageUpload from '../../../../components/ImgUpload/ImgUpload';

const AddNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '46852d765f11248a385285a8456eb942'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        category: data.category,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        minOrder: parseInt(data.minOrder),
                        description: data.description,
                        image: img
                    }
                    console.log(product);
                    // send to your database.
                    fetch('https://nexiq-server.vercel.app/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset();
                            }
                            else {
                                toast.error("Failed to add Product");
                            }
                        })
                }

            })
    };


    return (
        <div className='py-5 max-w-xl mx-auto px-5'>
            <p className='text-2xl font-bold text-primary-700 text-left mt-3 mb-3'>Add New Product</p>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=" w-full">
                        <label className="block text-sm">
                            <span >Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Product Name is Required"
                                }
                            })}
                        />
                        <label className="block text-sm">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center lg:gap-10'>
                        <div className=" w-full">
                            <label className="block text-sm">
                                <span >Category</span>
                            </label>

                            <select className="border border-primary-700 p-[8px] rounded-md focus:outline-secondary"
                                {...register("category", {
                                    required: {
                                        value: true,
                                        message: "Product Category is Required"
                                    }
                                })}
                            >
                                <option value="pc">PC Gadget</option>
                                <option value="mobile">Mobile Gadget</option>
                                <option value="smart">Smart Gadget</option>
                            </select>

                            <label className="block text-sm">
                                {errors.category?.type === 'required' && <span className="label-text-alt text-error">{errors.category?.message}</span>}
                            </label>
                        </div>

                        <div className=" w-full">
                            <label className="block text-sm">
                                <span >Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Price"
                                className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Product price is required"
                                    }
                                })}
                            />
                            <label >
                                {errors.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center lg:gap-10'>

                        <div className=" w-full">
                            <label className="block text-sm">
                                <span >Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Quantity"
                                className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "Product quantity is required"
                                    }
                                })}
                            />
                            <label >
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className=" w-full">
                            <label className="block text-sm">
                                <span >Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order"
                                className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: "Minimum order quantity is required"
                                    }
                                })}
                            />
                            <label >
                                {errors.minOrder?.type === 'required' && <span className="label-text-alt text-error">{errors.minOrder.message}</span>}
                            </label>
                        </div>
                    </div>


                    <div className="">
                        <label className="block text-sm">
                            <span >Description</span>
                        </label>
                        <textarea
                            rows="3" cols="50"
                            placeholder="Product Description"
                            className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Product description is Required"
                                }
                            })}
                        />
                        <label >
                            {errors.description?.type === 'required' && <span className="label-text-alt text-error">{errors.description.message}</span>}
                        </label>
                    </div>
                    <ImageUpload />
                    <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <div className=" w-full cursor-pointer">
                            <div className=' cursor-pointer flex items-center justify-center gap-2 border border-primary-700 bg-slate-100 rounded-lg py-1 mt-2'>
                                <label className="label cursor-pointer pt-0" htmlFor='image'>
                                    <span className="text-4xl text-base-300"><RiImageAddFill /></span>
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    className="text-base-300 lg:w-[250px] cursor-pointer"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Image is Required"
                                        }
                                    })}

                                />
                            </div>

                            <label className="block text-SM">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}

                            </label>
                        </div>


                        <input type="submit" value="Upload Product" className='bg-primary-700 text-gray-100 text-lg py-3 w-full rounded-md shadow shadow-secondary cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;