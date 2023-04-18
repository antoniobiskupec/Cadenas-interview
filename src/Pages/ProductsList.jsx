import { useState, useEffect } from "react";

const URL = "https://dummyjson.com/products";

function ProductList() {
  const [product, setProducts] = useState([]);

  // code to fetch data from DummyJSON API and update the state
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // render the product list component
  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>
          <h2>{product.text}</h2>
          <img src={product.image} alt={product.text} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
