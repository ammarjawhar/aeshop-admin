import './Sidebar.css';
import { Link } from 'react-router-dom';
import addProducrt from '../../assets/product_cart.svg';
import listProducrt from '../../assets/product_list_icon.svg';
const Sidbar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={addProducrt} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
     
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={listProducrt} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidbar;
