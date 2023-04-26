import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  ArrowBackIcon,
  ArrowForwardIcon,
  Stack,
  Button,
  Modal,
} from "@mui/material";
import FetchApi from "../Api/fetchApi";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const itemsPerPage = 10;
  const [numberOfPages, setNumberOfPages] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  // code to fetch data from DummyJSON API and update the state
  useEffect(() => {
    FetchApi.fetchProductList().then((data) => {
      if (typeof data.products == "undefined") {
        throw new Error("No products!");
      } else {
        setProducts(data.products);
      }
    });
  }, []);

  useEffect(() => {
    setNumberOfPages(Math.ceil(products.length / itemsPerPage));
    setCurrentPage(1);
  }, [products, itemsPerPage]);

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Modal behaviour
  const [currentProduct, setCurrentProduct] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setCurrentProduct(products[id]);
    console.log(currentProduct, id, products, products[id]);
  };
  const handleClose = () => setOpen(false);

  const styleModal = {
    opacity: "0.4",
  };

  // render the product list component
  return (
    <div className='main-page'>
      <div className='main'>
        {currentProducts.map((product) => (
          <div className='container' key={product.id}>
            <div className='image-container'>
              <Button
                className='image-button'
                onClick={function (e, f) {
                  console.log(product.id, e, f);
                  handleOpen(product.id);
                }}
              >
                <img
                  src={product.images[0]}
                  width={250}
                  height={200}
                  alt={product.description}
                ></img>
                <div className='image-overlay'></div>
                <h2>{product.title}</h2>
              </Button>
            </div>

            <Modal sx={{ ...styleModal }} open={open} onClose={handleClose}>
              <ProductDetails product={currentProduct}></ProductDetails>
            </Modal>
          </div>
        ))}
        <Stack spacing={2}>
          <Pagination
            className='pagination'
            count={numberOfPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ bgcolor: "#fff", borderRadius: "10px" }}
          >
            {Array.from(Array(numberOfPages).keys()).map((page) => (
              <PaginationItem
                key={page}
                label={page + 1}
                active={page + 1 === currentPage}
              />
            ))}
          </Pagination>
        </Stack>
      </div>
    </div>
  );
};

export default ProductList;
