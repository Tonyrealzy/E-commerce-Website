import './App.css';
import React, { useState } from 'react';
import { getCategories } from './Fetcher';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Layout from './screens/Layout';
import Checkout from './screens/Checkout';
import Category from './screens/Category';
import Home from './screens/Home';

function App() {
  const [categories, setCategories] = useState([{ errorMessage: 'Failed to fetch', data: [] }]);

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  return (
  <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path='categories/:categoryId' element={<Category />}/>
            <Route path='categories/:categoryId/products/:productId' element={<ProductDetails />}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;