import React, { useState } from 'react';
import { getCategories, getProductsById } from '../Fetcher';
import { Link } from 'react-router-dom';

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
        <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
      ));
    }

    // const renderProducts = () => {
    //   return products.data.map(p => (
    //     <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    //   ));
    // }

    return (
      <div className="font-customFontFamily">

        <main className="flex h-screen">
          <section className="Sidebar fixed w-24 h-screen md:w-40 shadow px-4 pt-20 md:pt-20 overflow-auto bg-grey text-green text-xs md:text-sm hover:text-dark">
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
            <ul>{categories.data && renderCategories()}</ul>
          </section>

          {/* <section className='MainSection flex flex-col flex-grow  font-normal text-xs md:text-sm pl-28 md:pl-44 pr-4 py-2'>
            <Navbar/>
            <aside>
            {products.errorMessage && 
              <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
            </aside>
            <Footer/>
          </section> */}

        </main>

      </div>
    )
}

export default PageRender;