import { Link } from "react-router-dom";
import './Login.css';
import Axios from 'axios';
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/auth/login', {
      email,
      password,
    }).then(res => {
      if (res.data.status) {
        alert("User Login Successfull");
        console.log(res.data);
        // navigate('/');
      }
    }).catch(err => {
      console.log(err.response.data.error);
      alert(err.response.data.error);
    });
  }

  return (
    <>
      <div className="text-white h-[100vh] flex justify-center items-center bg-img">
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-4xl text-white font-bold text-center mb-6">LogIn</h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="relative my-8">
              <input type="email" className="block w-72  pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-8 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email</label>
            </div>

            <div className="relative my-8">
              <input type="password" className="block w-72 pb-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer" placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="" className="absolute  text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-fous:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Password</label>
            </div>

            <div className="flex justify-between items-center">
              <div className="gap-2 flex items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>

              <span className="text-blue-300">Forgot Password</span>

            </div>
            <button className="w-full mb-3 text-[20px] mt-4 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white" type="Submit">Login</button>
          </form>
          <div>
            <span className="mt-2 text-[12px]" >New Here? <Link className="text-blue-600" to="/register">Create an Acount</Link> </span>
          </div>

        </div>
      </div >
    </>
  );
}

export default Login;
