import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const ProductDetails = ({ product }) => {
  //   const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log(product);
    return;
  });
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box className='box'>
      <h2>Title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price} $</p>
      <p>Rating: {product.rating}</p>
    </Box>
  );
};

export default ProductDetails;
