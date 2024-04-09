import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MainSection from './MainSection';
import Category from './Category';

const PageRender = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setCategories(data);
        }) 
    }, [])

    const handleCategoryClicks = (id) => {
      fetch("http://localhost:3001/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
    }

    const renderCategories = () => {
      return categories.map(c => (
        <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClicks(c.id)} />
      ));
    }

    const renderProducts = () => {
      return products.map(p => (
        <div key={p.id}>p.title</div>
      ));
    }

    return (
      <div className="font-customFontFamily">
        <Navbar/>
        <section className="flex">
          <section className="w-1/5 md:w-1/6 bg-grey shadow p-4">
            {categories && renderCategories()}
          </section>
          <MainSection>
            {products && renderProducts()}
          </MainSection>
        </section>
        <Footer/>
      </div>
    )
}

export default PageRender;