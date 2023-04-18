function fetchProducts(setProducts) {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => setProducts(data))
    .catch((error) => console.error(error));
}

export default fetchProducts;
