import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import image1 from '../assets/images/more/15.jpg';
import image2 from '../assets/images/more/logo1.png';
import Header from './Header';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password };
        console.log(newUser);

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const createdAt = res?.user?.metadata?.creationTime;
                console.log(createdAt);

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            });
                        }
                    });
            })

            .catch(error => {
                console.log('ERROR', error.message);
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
            <Header ></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Register now</h1>
                        </div>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;