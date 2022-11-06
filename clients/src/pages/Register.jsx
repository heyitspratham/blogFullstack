import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex items-center justify-center bg-main h-screen w-screen flex-col gap-5' >
        <h1 className='text-2xl '>Register</h1>
        <form className='bg-white flex flex-col gap-8 p-[50px] w-1/4'>
            <input required className='p-3 outline-none text-lg  border-b-2 border-gray-300' type="text" placeholder='Username' />
            <input required className='p-3 outline-none text-lg  border-b-2 border-gray-300' type="text" placeholder='Username' />
            <input required className='p-3 outline-none text-lg  border-b-2 border-gray-300' type="password" placeholder='Password' />
            <button className='p-3 bg-teal-500 text-white cursor-pointer text-lg' >Register</button>
            <p className='text-sm text-red-500 text-center'>This is an Error!</p>
            <span className='text-sm text-center'>Do you have an account? <Link to="/login" className='text-base underline' >Login</Link></span>
        </form>
    </div>
  )
}

export default Register