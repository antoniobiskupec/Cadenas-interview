class FetchApi {
  static async fetchProductList() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  }

  static async fetchProductDetails(id) {
    const response = await fetch("https://dummyjson.com/product/" + id);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  }
}

export default FetchApi;
