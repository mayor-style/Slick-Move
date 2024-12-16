import React from 'react'
import { IoMdMenu } from "react-icons/io";


const NavBar = () => {
  return (
    <nav className='flex justify-between text-white max-xl:pl-[20px] max-xl:pr-[20px] items-center w-full p-3 pl-[50px] pr-[50px] fixed top-0 z-10'>
      <div className="text-4xl cursor-pointer md:hidden">
      <IoMdMenu />
      </div>

      <div className="logo cursor-pointer">
        <h2 className=' text-shadow-lg text-4xl max-md:text-center  max-md:text-3xl max-sm:text-2xl font-semibold font-syne'><span className='text-6xl max-md:text-5xl max-sm:text-4xl font-bold text-gradient'>S</span>lick</h2>
      </div>

      <ul className='text-grey-500 flex max-lg:hidden justify-center items-center gap-10 text-sm'>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>PRICING</li>
        <li>REVIEWS</li>
      </ul>

      <div className="contact border-gradient group cursor-pointer max-md:hidden rounded-full">
        <h3 className='p-1 pr-3 pl-3 border-gradient-inner transition-alll group-hover:bg-gradient group-hover:text-black bg-transparent rounded-full text-white text-sm max-lg:text-xs'>CONTACT NOW</h3>
      </div>

      <div className="md:hidden w-[20px]"></div>
    </nav>
  )
}

export default NavBar
