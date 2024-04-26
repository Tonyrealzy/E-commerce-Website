import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-dark'>
        <h4 className="text-center text-xs md:text-sm py-4">
          <Link to='/' className='text-green hover:font-semibold px-2 md:px-8'>Home</Link>
          <Link to='/cart' className='text-green hover:font-semibold px-2 md:px-8'>Cart</Link>
          <Link to='#' className='text-green hover:font-semibold px-2 md:px-8'>About Us</Link>
          <Link to='#' className='text-green hover:font-semibold px-2 md:px-8'>Contact Us</Link>
        </h4>
    </div>
  )
}

export default Footer