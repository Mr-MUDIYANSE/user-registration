import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import Axios from 'axios';
import { useState } from "react";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('api/auth/signup', {
      name,
      email,
      password,
      confirmPassword
    }).then(res => {
      if (res.data.status) {
        alert("User Registration Successfull");
        // console.log(res.data);
        // navigate('/');
      }
    }).catch(err => {
      console.log(err.response.data.error);
      alert(err.response.data.error);
    });
  }

  return (
    <div className="text-white h-screen flex justify-center items-center bg-img">
      <form onSubmit={handleSubmit}>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>

          <div className="relative my-6">
            <input type="text" className="block w-72 pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <label htmlFor="" className="absolute  text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Name</label>
          </div>

          <div className="relative my-6">
            <input type="email" className="block w-72  pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-8 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email</label>
          </div>

          <div className="relative my-6">
            <input type="password" className="block w-72 pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="" className="absolute  text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Password</label>
          </div>

          <div className="relative my-6">
            <input type="password" className="block w-72 pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
            <label htmlFor="" className="absolute  text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Comform Password</label>
          </div>

          <button className="w-full mb-2 text-[20px] mt-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white" type="Submit">Sign Up</button>

          <div>
            <span className="mt-2 text-[12px]" >New Here? <Link className="text-blue-600" to="/login">Sign In</Link> </span>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Register;
