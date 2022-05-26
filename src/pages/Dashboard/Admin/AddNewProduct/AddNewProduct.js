import React from 'react';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
// import Loading from '../../../../components/Loading';


const AddNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: product, isLoading } = useQuery('services', () => fetch('https://calm-badlands-36890.herokuapp.com/service').then(res => res.json()))

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
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        minOrder: parseInt(data.minOrder),
                        description: data.description,
                        image: img
                    }
                    // send to your database.
                    fetch('https://quiet-fjord-62553.herokuapp.com/product', {
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

    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div className='mx-5 max-w-md'>
            <p className='text-2xl'>Add a new Product</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
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
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
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
                        <label className="label">
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
                        <label className="label">
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
                    <label className="label">
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


                <div className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required"
                            }
                        })}

                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}

                    </label>
                </div>


                <input type="submit" value="upload product" className='btn btn-primary w-full max-w-xs' />
            </form>
        </div>
    );
};

export default AddNewProduct;