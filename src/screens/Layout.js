import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map(c => (
          <li key={c.id} className='border rounded-lg bg-white text-center my-2 py-1 hover:text-dark hover:bg-grey'>
            <Link to={`/categories/${c.id}`}>{c.title}</Link>
          </li>
        ));
    }

  return (
    <div className="flex h-screen">
        <section className="Sidebar h-full fixed w-24 md:w-40 shadow px-4 md:px-6 pt-20 md:pt-20 overflow-auto bg-grey">
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
            <ul className='text-green text-xs md:text-sm'>
              {categories.data && renderCategories()}
            </ul>
        </section>

        <main className='MainSection flex flex-col flex-grow font-normal text-xs md:text-sm pl-24 md:pl-40 py-2'>
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