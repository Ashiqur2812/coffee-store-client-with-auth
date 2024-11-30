import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your coffee has been deleted.",
                                "success"
                            );
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div>
            {/* <Header></Header> */}
            <div className="card card-side bg-base-100 shadow-xl mt-20">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Test: {test}</p>
                    </div>
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-rose-500 text-base-100">X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;