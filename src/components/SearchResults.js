import React from "react";
import { getProductsByQuery } from "../Fetcher";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const SearchResults = () => {
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");
  
   React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByQuery(query);
      console.log(query);
      console.log(responseObject);
      setProducts(responseObject);
    };
    
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => (
        <CategoryProduct key={p.id} {...p}>
          {p.title}
        </CategoryProduct>
      ));
    } else {
      return <div className="font-medium text-base p-4 text-center">
        No products found!
      </div>;
    }
  };

  return (
    <div className="px-2 h-screen">
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
      {renderProducts()}
    </div>
  );
};

export default SearchResults;
