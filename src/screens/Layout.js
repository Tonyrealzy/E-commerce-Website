import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Layout = ({ categories }) => {
  const navigate = useNavigate();

    const renderCategories = () => {
        return categories.data.map(c => (
          <li key={c.id} className='border rounded-lg bg-white text-center my-2 py-1 hover:text-white hover:bg-green hover:border-none'>
            <Link to={`/categories/${c.id}`}>{c.title}</Link>
          </li>
        ));
    }

  return (
    <div className="flex">
        <section className="Sidebar h-full fixed w-24 md:w-40 shadow px-4 md:px-6 pt-20 md:pt-20 overflow-auto bg-grey">
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
            <ul className='text-green text-xs md:text-sm mb-16'>
              {categories.data && renderCategories()}
            </ul>

            <ul>
              <li>
                <button className='text-green text-xs md:text-sm py-1 px-5 md:px-10 my-0.5 font-medium rounded-md hover:text-white hover:bg-green hover:border-none' onClick={() => navigate('/')}>Home</button>
              </li>
              <li>
                <button className='text-green text-xs md:text-sm py-1 px-6 md:px-11 my-0.5 font-medium rounded-md hover:text-white hover:bg-green hover:border-none' onClick={() => navigate('/cart')}>Cart</button>
              </li>
            </ul>

            <aside className='py-5'>
              <SearchBar/>
            </aside>
        </section>

        <main className='MainSection h-full flex flex-col flex-grow font-normal text-xs md:text-sm pl-24 md:pl-40 py-2'>
          <Navbar/>

          <div>
            <Outlet />
          </div>

          <Footer/>
        </main>

    </div>
  )
}

export default Layout