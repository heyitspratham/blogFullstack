import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {

  const [input, setInput] = useState({
    username: "",
    email: "",
    password:""
  })

  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  
  const handleChange = e =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  //API call to register
  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      await axios.post("/auth/register", input)
      navigate("/login")
    } catch (err) {
      setErr(err.response.data);
    }
  }
  return (
    <div className="flex items-center justify-center bg-main h-screen w-screen flex-col gap-5">
      <h1 className="text-2xl ">Register</h1>
      <form className="bg-white flex flex-col gap-8 p-[50px] w-1/4">
        <input
          required
          className="p-3 outline-none text-lg  border-b-2 border-gray-300"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          className="p-3 outline-none text-lg  border-b-2 border-gray-300"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          required
          className="p-3 outline-none text-lg  border-b-2 border-gray-300"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit} className="p-3 bg-teal-500 text-white cursor-pointer text-lg">
          Register
        </button>
        {err && <p className="text-sm text-red-500 text-center">{err}</p>}
        <span className="text-sm text-center">
          Do you have an account?{" "}
          <Link to="/login" className="text-base underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
