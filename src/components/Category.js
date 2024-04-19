import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../Fetcher';
import CategoryProduct from '../components/CategoryProduct';

const Category = () => {
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
    <div className='px-2'>
      <aside>
      {products.errorMessage && 
        <div>Error: {products.errorMessage}</div>}
      {products.data && renderProducts()}
      </aside>
    </div>
  )
};

export default Category;