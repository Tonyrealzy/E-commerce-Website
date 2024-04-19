import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllProductsById } from '../Fetcher';
import { productsCalled } from '../db/db';
import ImageFetcher from './ImageFetcher';

const ProductDetails = () => {
    const [product, setProduct] = React.useState({errorMessage: '', data: {} });

    const {productId} = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getAllProductsById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId]);

    const createMarkUp = () => {
      return {__html:product.data?.description}
    }

  return (
    <article className='font-normal text-xs md:text-sm pr-4 py-2 w-full p-4 my-10'>

      <section className='uppercase font-bold text-sm md:text-md mx-16 hover:scale-105 transition duration-100'>
          {product.data.title}
      </section>


      <div className='md:flex gap-8 md:px-4'>
        <figure className='my-1 px-8 py-5' >
            <ImageFetcher className='hover:scale-110 transition duration-100' key={product.data.id} src={productsCalled[productId - 1].image} alt={product.data.title}/>
        </figure>

        <aside className='px-14 py-2 md:pt-10'>
          <section>
            <h3 className='uppercase font-semibold'>Features:</h3>
            <ul className='list-disc'>
              {product.data.features?.map((f, i) => {
                return <li key={`${i}`}>{f}</li>
              })}
            </ul>
          </section>

          {product.data.dimensions && 
          <section>
          <h3>Dimensions:</h3>
          <label>{product.data.specs.dimensions}</label>
          </section>
          }
          
          {product.data.capacity && 
          <section>
          <h3>Capacity: <label>{product.data.specs.capacity}</label></h3>
          </section>
          }
      </aside>

        <aside className='flex gap-4 mx-10 py-2 md:pt-10 md:flex-col'>
          <section className='bg-grey hover:scale-105 transition duration-100 px-5 py-3 md:mx-0 w-30 md:w-40 rounded-md'>
            <label>Stock level: {product.data.stock}</label>
            <br/>
            <label>FREE Delivery</label> 
          </section>

          <section>
            <h3 className='text-sm md:text-md text-center font-bold px-2'><label>&pound;{product.data.price}</label></h3>
            <button className='border border-dark rounded-md hover:bg-white bg-grey text-xs px-10 md:px-14 py-1 md:p-2 my-2'>Add to Cart</button>
          </section>
        </aside>

      </div>

      <div className='px-10 py-4' dangerouslySetInnerHTML={createMarkUp()}>
      </div>
    </article>

  )
}

export default ProductDetails