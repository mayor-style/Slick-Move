import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import black from '../assets/imgs/black.jpg'

const Services = () => {

    const services = [ 'UI/UX DESIGN', 'Web Development',  'App Development', 'Custom Solutions']

  return (
    <section className=' pt-[70px] md:pt-[100px] sm:pr-6 sm:pl-6 pb-[100px] pr-4 pl-4'>

    {/*BACKGROUND OVERLAY */}
    <div className="relative m-auto min-h-[100vh] max-w-[1100px] pb-10 rounded-3xl shadow-md ">
    <img src={black} className='object-cover rounded-3xl max-sm:h-[41rem] max-xs:h-[25rem]  max-md:h-[45rem] h-[50rem]  w-full ' alt="" />

    {/*CONTENT INSIDE BACKGROUND OVERLAY */}
    <div className='max-w-full m-auto flex flex-col max-xs:pr-3 max-xs:pl-3 gap-10 p-5 md:p-10 rounded-3xl bg-white/10 sm:min-h-full text-white backdrop-blur-md shadow-xl transition-all z-[2] absolute top-0'>
      
        <div className="flex justify-between gap-[200px] max-md:flex-wrap max-md:gap-5 max-md:justify-center max-md:text-center max-lg:gap-[100px] items-center">
            <h1 className='tracking-wide font-montserrat leading-normal max-lg:text-5xl max-sm:text-4xl'>OUR <br />SERVICES</h1>
            <p className='tracking-wide leading-normal max-sm:text-sm max-md:text-center lg:text-lg text-end'>Here at Slick, we specialize in branding and UI/UX design development. Let Us craete compelling brand experience and seamless digital solutions tailored to your needs. Stand out and succeed with our expertise. </p>
        </div>

        <div className="flex max-md:justify-center items-center text-white gap-3 sm:gap-5 max-xs:flex-wrap text-center lg:gap-10">
            <h3 className=' max-xs:text-xxs font-normal pr-3 pl-3 text-sm max-md:text-xs border border-gray-500 p-1 xs:p-2 sm:pr-4 sm:pl-4 rounded-full'>Design</h3>
            <h3 className=' max-xs:text-xxs font-normal pr-3 pl-3 text-sm max-md:text-xs border border-gray-500 p-1 xs:p-2 sm:pr-4 sm:pl-4 rounded-full'>Develop</h3>
            <h3 className=' max-xs:text-xxs font-normal pr-3 pl-3 text-sm max-md:text-xs border border-gray-500 p-1 xs:p-2 pl-3 pr-3 sm:pr-4 sm:pl-4 rounded-full '>SEO</h3>
            <h3 className=' max-xs:text-xxs text-center font-normal text-sm max-md:text-xs border border-gray-500 p-1 xs:p-2 pr-3 pl-3 sm:pr-4 sm:pl-4 rounded-full'>Digital Marketing</h3>
        </div>
        
        <div className="flex flex-col md:pt-10 lg:gap-7">
        {
            services.map((x, i)=>{
                return <div key={i} className="flex items-center cursor-pointer group  pt-5 pr-3 pl-4 hover:rounded-xl hover:bg-black transition transition-all font-semibold duration-900ms ease justify-between sm:pb-10 pb-7 border-b border-b-1 border-b-gray-500">
                <p className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl'>{x}</p>
                <div className="text-2xl  xs:text-3xl sm:text-4xl lg:text-5xl font-semibold group-hover:bg-gradient group-hover:p-2 rounded-xl">
                    <GoArrowUpRight/>
                </div>
                </div>
            })
        }

        </div>
        

    </div>

    </div>
    </section>
  )
}

export default Services
