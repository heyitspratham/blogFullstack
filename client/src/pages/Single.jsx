import React from 'react'
// @ts-ignore
import Edit from '../img/edit.png'
// @ts-ignore
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='flex gap-12'>
      <div className="content flex-[5] flex flex-col gap-7 ">
        <img className='h-80 w-full object-cover' src="https://images.pexels.com/photos/11212399/pexels-photo-11212399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user flex items-center gap-3 text-sm">
        <img className='h-12 w-12 rounded-full object-cover' src="https://images.pexels.com/users/avatars/180443766/febe-vanermen-239.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2" alt="" />
          <div className="info">
            <span className='font-bold'>John Doe</span>
            <p>Posted 2 days ago</p>
          </div>
        <div className="edit flex gap-2 items-center">
          <Link to="/write/">
            <img className='w-6 cursor-pointer h-6' src={Edit} alt="" />
          </Link>
          <Link to="">
            <img className='w-6 cursor-pointer h-6' src={Delete} alt="" />
          </Link>
        </div>
        </div>
        <h1 className='text-[#333] text-5xl my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='text-justify text-base '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        <br></br>
        Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
        Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br></br>
        <br></br>
        Numquam expedita nostrum cupiditate vero amet quo! Quibusdam voluptate libero minima nostrum tenetur odit quos, similique illum tempore tempora ipsam maiores aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illo alias neque accusamus non, amet soluta harum nulla nisi. Cupiditate minus est maiores adipisci quo quaerat ipsa vitae molestias atque.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single