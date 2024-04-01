
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Singup from '../Pages/Singup';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import CriptoDec from '../Pages/CriptoDec/CriptoDec';
import CriptoDetails from '../Pages/CriptoDec/CriptoDetais';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/crip' element={<CriptoDec />} />
      <Route path='/crip/:id' element={<CriptoDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Singup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  );
};

export default AppRoutes;
