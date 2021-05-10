import React, { useEffect, useState } from "react";
import LoaderSpinner from "./LoaderSpinner";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  console.log(products);

  const fetchProdocts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProdocts();
  }, []);
  return (
    <>
      {products.length === 0 ? (
        <LoaderSpinner />
      ) : (
        <div className='products'>
          <div className='products__container'>
            {products.map((prod) => (
              <Product
                id={prod.id}
                key={prod.id}
                price={prod.price}
                title={prod.title}
                image={prod.image}
                desciption={prod.desciption}
                category={prod.category}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
