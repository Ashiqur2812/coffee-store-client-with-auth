import './App.css';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import image1 from './assets/images/more/15.jpg';
import image2 from './assets/images/more/logo1.png';
import Common from './components/Common';
import Header from './components/Header';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

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
      <div className='m-20'>
        <h1 className='text-6xl font-style font-medium text-purple-600'>Hot and Cold Coffee: {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-6'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id}
              coffee={coffee} coffees={coffees} setCoffees={setCoffees}>
            </CoffeeCard>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
