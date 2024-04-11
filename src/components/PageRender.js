import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Category from './Category';
import { getCategories, getProductsById } from '../Fetcher';

const PageRender = () => {
    const [categories, setCategories] = useState([{ errorMessage: 'Failed to fetch', data: [] }]);
    const [products, setProducts] = useState([{errorMessage: 'Failed to fetch', data: [] }]);

    React.useEffect(() => {
      const fetchData = async () => {
        const responseObject = await getCategories();
        setCategories(responseObject);
      }
      fetchData();
    }, [])

    const handleCategoryClicks = (id) => {
      const fetchData = async () => {
        const responseObject = await getProductsById(id);
        setProducts(responseObject);
      }
      fetchData();
    }

    const renderCategories = () => {
      return categories.data.map(c => (
        <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClicks(c.id)} />
      ));
    }

    const renderProducts = () => {
      return products.data.map(p => (
        <div key={p.id}>{p.title}</div>
      ));
    }

    return (
      <div className="font-customFontFamily">
        <Navbar/>

        <div className="flex">
          <section className="py-1 md:py-2 text-green text-xs md:text-sm hover:text-dark' w-1/5 md:w-1/6 bg-grey shadow p-4">
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
            {categories.data && renderCategories()}
          </section>

          <section className='flex-grow font-normal text-xs md:text-sm px-4 py-2'>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
            </section>
        </div>

        <Footer/>
      </div>
    )
}

export default PageRender;