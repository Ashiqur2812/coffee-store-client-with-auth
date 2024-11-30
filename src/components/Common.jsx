import React from 'react';
import { Link } from 'react-router-dom';

const Common = () => {
    return (
        <div className='flex justify-center items-center gap-8 my-4'>
            <Link to='/'><button className='btn'>Home</button></Link>
            <Link to='/addCoffee'><button className='btn'>Add Coffee</button></Link>
        </div>
    );
};

export default Common;