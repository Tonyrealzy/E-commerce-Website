import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map(c => (
          <li key={c.id}>
            <Link to={`/categories/${c.id}`}>{c.title}</Link>
          </li>
        ));
    }

  return (
    <div className="flex h-screen">
        <section className="Sidebar h-full fixed w-24 md:w-40 shadow px-4 pt-20 md:pt-20 overflow-auto bg-grey">
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
            <ul className='text-green text-xs md:text-sm hover:text-dark'>{categories.data && renderCategories()}</ul>
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