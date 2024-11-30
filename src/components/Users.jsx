import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import image1 from '../assets/images/more/15.jpg';
import image2 from '../assets/images/more/logo1.png';
import Swal from 'sweetalert2';
import moment from 'moment';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log('data is here');
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your credential has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user =>
                                user._id !== id);
                            setUsers(remainingUsers);
                        }
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
            <h2 className="text-5xl font-medium text-center text-rose-500">Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>job</th>
                            <th>Created At</th>
                            <th>Last login At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{moment(user.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                                <td>{moment(user.lastSignInTime).format('MMMM Do YYYY, h:mm a')}</td>
                                <td>
                                    <button className='btn'>E</button>
                                    <button onClick={() => handleDelete(user._id)} className='btn'>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;