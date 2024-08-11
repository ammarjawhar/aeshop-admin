import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa6';
import { CiCircleList } from 'react-icons/ci';

const Sidbar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <FaCartPlus />

          <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <CiCircleList />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidbar;
