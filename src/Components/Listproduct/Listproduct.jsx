import './Listproduct.css';
import axois from 'axios';
import { useEffect, useState } from 'react';

const Listproduct = () => {
  const BASE_URL = 'https://eshop-apis.vercel.app';
  const [allProducts, setAllProducts] = useState([]);
  const fetchAllProducts = async () => {
    const response = await axois.get(`${BASE_URL}/api/product/list`);
    if (response.data.success) {
      setAllProducts(response.data.data);
    } else {
      console.log(response.data.message);
    }
  };

  const deleteProduct = async (id) => {
    const response = await axois.post(`${BASE_URL}/api/product/delete/`, {
      id,
    });
    if (response.data.success) {
      await fetchAllProducts();
    } else {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product-header border-head">
        <p>Product</p>
        <p>Name</p>
        <p>old Price</p>
        <p>new Price</p>
        <p>Category</p>
        <p>Action</p>
      </div>
      <div className="all-products">
        {allProducts.map((product) => {
          return (
            <div
              key={product._id}
              className="list-product-header list-product-item "
            >
              <p>
                <img src={product.image} alt="" />
              </p>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>

              <p>
                <button
                  className="delete"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listproduct;
