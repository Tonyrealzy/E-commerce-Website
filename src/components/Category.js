import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../Fetcher';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryProduct from '../components/CategoryProduct';

const Category = ({id, title, onCategoryClick}) => {
  const [products, setProducts] = React.useState({
    errorMessage: '', data: [] });
  const {categoryId} = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getProductsById(categoryId);
        setProducts(responseObject);
    }
    fetchData();
}, [categoryId]);

const renderProducts = () => {
  return products.data.map(p => (
    <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
  ));
}

  return (
    <div className='MainSection flex flex-col flex-grow  font-normal text-xs md:text-sm pl-28 md:pl-44 pr-4 py-2'>
      <Navbar/>
      <aside>
      {products.errorMessage && 
        <div>Error: {products.errorMessage}</div>}
      {products.data && renderProducts()}
      </aside>
      <Footer/>
    </div>
  )
};

export default Category;