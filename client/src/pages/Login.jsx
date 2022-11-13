import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {

  const [input, setInput] = useState({
    username: "",
    password:""
  })

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);


  const [err, setErr] = useState(null);
  
  const handleChange = e =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  //API call to register
  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      await login(input)
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  }

  return (
    <div className="flex items-center justify-center bg-main h-screen w-screen flex-col gap-5">
      <h1 className="text-2xl ">Login</h1>
      <form className="bg-white flex flex-col gap-8 p-[50px] w-1/4">
        <input
          required
          className="p-3 outline-none text-lg  border-b-2 border-gray-300"
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          className="p-3 outline-none text-lg  border-b-2 border-gray-300"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="p-3 bg-teal-500 text-white cursor-pointer text-lg">
          Login
        </button>
        {err && <p className="text-sm text-red-500 text-center">{err}</p>}
        <span className="text-sm text-center">
          Don't you have an account?{" "}
          <Link to="/register" className="text-base underline">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
