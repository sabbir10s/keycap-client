import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



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
                    fetch('https://nexiq-server.onrender.com/product', {
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
            <p className='text-2xl font-bold text-primary text-center my-5'>Add New Product</p>
            <div className='flex justify-center items-center w-full mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered border-primary w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Product Name is Required"
                                }
                            })}
                        />
                        <label className="label pt-0">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text">Category</span>
                        </label>

                        <select className="input input-bordered border-primary w-full"
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

                        <label className="label pt-0">
                            {errors.category?.type === 'required' && <span className="label-text-alt text-error">{errors.category?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Product Price"
                            className="input input-bordered border-primary w-full"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Product price is required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div className='flex justify-center gap-4'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label pt-0">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Quantity"
                                className="input input-bordered border-primary w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "Product quantity is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label pt-0">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order"
                                className="input input-bordered border-primary w-full max-w-xs"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: "Minimum order quantity is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minOrder?.type === 'required' && <span className="label-text-alt text-error">{errors.minOrder.message}</span>}
                            </label>
                        </div>
                    </div>


                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Description"
                            className="input input-bordered border-primary w-full"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Product description is Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-error">{errors.description.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full">

                        <label className="label pt-0">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input w-full"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required"
                                }
                            })}

                        />
                        <label className="label pt-0">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}

                        </label>
                    </div>


                    <input type="submit" value="upload product" className='btn btn-primary w-full' />
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;