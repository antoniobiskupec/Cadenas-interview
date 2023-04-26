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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #232323",
    boxShadow: 8,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: 10,
  };

  return (
    <Box sx={{ ...style, width: 500 }}>
      <h2>Title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price} $</p>
      <p>Rating: {product.rating}</p>
    </Box>
  );
};

export default ProductDetails;
