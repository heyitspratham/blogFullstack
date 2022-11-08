import React from 'react'
// @ts-ignore
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <div className='mt-24 flex items-center justify-between bg-main p-[20px]'>
      <img className='h-24' src={Logo} alt="" />
      <span>made with ❤️ by Pratham Shukla</span>
    </div>
  )
}

export default Footer