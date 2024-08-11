import Addproduct from '../../Components/Addproduct/Addproduct';
import Listproduct from '../../Components/Listproduct/Listproduct';
import Sidbar from '../../Components/Sidebar/Sidebar';
import './Admin.css';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidbar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Listproduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
