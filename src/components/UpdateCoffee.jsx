import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import image1 from '../assets/images/more/15.jpg';
import image2 from '../assets/images/more/logo1.png';
import Header from './Header';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, chef, supplier, test, category, details, photo };
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });

    };

    return (
        <div>
            <img className='h-[7rem] w-full object-cover' src={image1} alt="" />
            <div className='md:flex font-family justify-center text-base-100 items-center absolute gap-3 md:mx-[37rem] z-50 top-0'>
                <div>
                    <img className='w-20' src={image2} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-semibold '>Espresso Emporium</h2>
                </div>
            </div>
            <Header></Header>
            <div className='bg-base-200 font-style'>
                <div className='w-11/12 mx-auto '>
                    <div className='text-center'>
                        <h2 className="text-4xl text-[#374151] pt-12 font-family pb-4 font-semibold">Update Coffee: {name}</h2>
                        <p className='mx-52'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Update Coffee</h2>
                        <form onSubmit={handleUpdateCoffee}>
                            <div className='md:flex gap-6 justify-center items-center mb-8'>
                                <div className="form-control  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text"> Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='name' defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='chef' defaultValue={chef} placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className='md:flex gap-6 justify-center items-center mb-8'>
                                <div className="form-control  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Test</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='test' defaultValue={test} placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className='md:flex gap-6 justify-center items-center mb-8'>
                                <div className="form-control  md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='category' placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='details' defaultValue={details} placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className='mb-8'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Update Coffee" className='btn bg-[#D2B48C] w-full' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;