import React, { useContext } from 'react';
import ImageFetcher from './ImageFetcher';
import { productsCalled } from '../db/db';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const CategoryProduct = ({title, id, specs, features, price, stock}) => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  return (
    <article className='w-full p-4 text-xs md:text-sm mx-auto'>
      <section className='uppercase font-bold text-sm md:text-md hover:scale-105 transition duration-100'>
          <Link to= {`products/${id}`} className='md:px-20'>{title}</Link>
      </section>

      <div className='md:flex gap-12'>
        <figure className='my-1 px-2 py-5' >
          <ImageFetcher key={id} src={productsCalled[id - 1].image} alt={title}/>
        </figure>

        <aside className='py-2 md:pt-10'>
          <section>
            <h3 className='uppercase font-semibold'>Features:</h3>
            <ul className='list-disc'>
              {features?.map((f, i) => {
                return <li key={`${i}`}>{f}</li>
              })}
            </ul>
          </section>

          {specs.dimensions && 
          <section>
          <h3>Dimensions:</h3>
          <label>{specs.dimensions}</label>
          </section>
          }
          
          {specs.capacity && 
          <section>
          <h3>Capacity: <label>{specs.capacity}</label></h3>
          </section>
          }
        </aside>

        <aside className='md:pt-10'>
          <section>
            <h3 className='text-sm md:text-md font-bold px-12 py-1'><label>&pound;{price}</label></h3>
          </section>

          <section className='bg-grey hover:scale-105 transition duration-100 px-5 py-3 mx-2 md:mx-0 w-36 md:w-40 rounded-md'>
            <label>Stock level: {stock}</label>
            <br/>
            <label>FREE Delivery</label>
          </section>

          <section className='py-1'>
            <button onClick={() => navigate(`/products/${id}`)} className='border border-dark rounded-md hover:bg-white bg-grey text-xs px-2 py-1 my-2 mr-2'>View Product</button>
            <button className='border border-dark rounded-md hover:bg-white bg-grey text-xs px-2 py-1 my-2' onClick={() => addProduct({ id, title, price })}>Add to Cart</button>
          </section>
        </aside>
      </div>

    </article>
  )
}

export default CategoryProduct