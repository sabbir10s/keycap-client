import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import InputFields from './InputFields';
import { RiImageAddFill } from 'react-icons/ri';
import { useState } from 'react';

const AddNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '46852d765f11248a385285a8456eb942'
    const [published, setPublished] = useState(true);
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
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        category: data.category,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        sellingPrice: parseInt(data.sellingPrice),
                        description: data.description,
                        image: img,
                        published: published,
                    }
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
        <div className=''>
            <p className='text-lg font-bold text-primary-700 text-left py-2'>Add Product</p>
            <div className=''>
                <form className='flex gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-white shadow-sm border p-6 w-full'>
                        <InputFields register={register} errors={errors} />
                    </div>
                    <div className='bg-white shadow-sm border p-6 w-full'>
                        <div className="flex flex-col gap-4">
                            <div className=" w-full cursor-pointer">
                                <div className=" cursor-pointer flex items-center justify-center gap-2 border border-primary-700 bg-slate-100 rounded-lg py-1 mt-2">
                                    <label className="label cursor-pointer pt-0" htmlFor="image">
                                        <span className="text-4xl text-base-300">
                                            <RiImageAddFill />
                                        </span>
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        className="text-base-300 lg:w-[250px] cursor-pointer"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Image is Required",
                                            },
                                        })}
                                    />
                                </div>

                                <label className="block text-SM">
                                    {errors.image?.type === "required" && (
                                        <span className="text-xs text-red-400">
                                            {errors.image.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                        </div>
                        <div className='flex items-center'>
                            <p>Publish</p>
                            <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                                <button
                                    type='button'
                                    className={`relative inline-flex items-center h-4 rounded-full w-8 focus:outline-none ${published ? "bg-primary-500" : "bg-gray-300"
                                        }`}
                                    onClick={() => setPublished(!published)}
                                >
                                    <span
                                        className={`inline-block w-4 h-4 transform transition ${published ? "translate-x-5" : "translate-x-0"
                                            } bg-white rounded-full`}
                                    />
                                </button>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Upload Product"
                            className="bg-primary-700 text-gray-100 text-lg px-4 py-2 w-full rounded-md shadow shadow-secondary cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;