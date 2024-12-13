import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className=' max-sm:pt-[120px] max-sm:pb-[100px] sm:min-h-screen flex  md:pt-[100px] sm:pt-[50px] sm:pb-[50px] flex-col gap-5 justify-center items-center text-center text-white bg-center bg-cover bg-hero '>
      <div className="">
        <h1 className='pr-[10px] pl-[10px] heading'><span className=' font-bold text-9xl max-xl:text-8xl max-md:text-7xl max-sm:text-6xl text-gradient font-syne text-shadow'>S</span>LICK MOVES
        <br /> SMARTER <span className='text-gradient '>SOLUTIONS</span>
        </h1>
      </div>

      {/* BUttom texts */}
      <div className="flex justify-between max-sm:justify-center max-sm:flex-wrap-reverse max-lg:pr-[20px] max-lg:pl-[20px] pr-[50px] pl-[50px] items-center ">
        <div className=" pr-2 pt-1 pb-1 pl-4 rounded-full justify-center items-center cursor-pointer gap-2 flex bg-white">
          <h2 className='text-black font-semibold text-xs lg:text-sm text-shadow'>LET'S GET STARTED</h2>
          <span className='text-lg max-md:text-sm max-md:p-2 bg-gradient p-2 rounded-full max-xs:text-[12px] text-black font-medium'><GoArrowUpRight  /></span>

        </div>
        <div className="w-[40%] max-md:w-[45%] max-sm:w-full">
          <p className='max-sm:tracking-wider tracking-wide text-end pb-5 lg:text-xl max-sm:text-sm max-sm:text-center md:text-lg'>At Slick moves, we are dedicated to creatinmg innovative software solutions that integrate seamlessly with your busness needs, inspiring growth and success.</p>
          <div className='border-gradient rounded-full w-fit m-auto max-sm:hidden'>
            <h2 className='p-2 pl-3 pr-3 rounded-full text-xs border-gradient-inner '>WORLD CLASS AGENCY</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
