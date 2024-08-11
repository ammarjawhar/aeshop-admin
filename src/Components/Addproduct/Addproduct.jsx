import './Addproduct.css';
import uploadArea from '../../assets/upload_area.svg';
import { useState } from 'react';
import axois from 'axios';
const Addproduct = () => {
  const BASE_URL = 'https://e-shop-backend-alpha.vercel.app/';
  const [image, setImage] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: 'women',
    image: '',
  });
  const cangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async () => {
    let product = productData;
    const formData = new FormData();
    formData.append('product', image);
    const response = await axois.post(`${BASE_URL}/uplaod`, formData);
    if (response.data.success) {
      product.image = response.data.image_url;
      await axois.post(`${BASE_URL}/api/product/add`, product);
      if (response.data.success) {
        alert('product added successfully');
      } else {
        alert(response.data.message);
      }
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="add-product">
      <div className="itemfiels">
        <p>product title</p>
        <input
          type="text"
          name="name"
          placeholder="Enter product title"
          value={productData.name}
          onChange={cangeHandler}
        />
      </div>

      <div className="prices">
        <div className="itemfiels">
          <p> price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Enter old price"
            value={productData.old_price}
            onChange={cangeHandler}
          />
        </div>
        <div className="itemfiels">
          <p>offer price</p>
          <input
            type="text"
            name="new_price"
            placeholder="Enter new price"
            value={productData.new_price}
            onChange={cangeHandler}
          />
        </div>
      </div>

      <div className="itemfiels">
        <p>category</p>
        <select
          name="category"
          className="category-selection"
          onChange={cangeHandler}
          value={productData.category}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="itemfiels">
        <p>product image</p>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            alt=""
            className="upload-area"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imageHandler}
        />
      </div>
      <button
        className="add-btn"
        onClick={() => {
          addProduct();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Addproduct;
