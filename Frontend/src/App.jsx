import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Toaster from 'react-hot-toast';
import Home from './Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
