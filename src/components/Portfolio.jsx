import React from 'react'
import image from '../assets/imgs/image.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {

    const images = [image, image, image, image, image, image]
  return (
    <section className='pb-[100px] lg:pt-[150px] pl-[50px] pr-[50px] max-md:pr-[25px] max-md:pl-[25px]'>
      <div className="text-center pb-[50px]">
        <h1 className='font-syne heading'>Portfolio</h1>
      </div>
    <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-[50px] grid-cols-3 gap-[30px] lg:gap-[50px] relative">
    {
        images.map((x, i)=>{
           return <div className="object-cover lg:h-[300px] relative rounded-xl border border-[1px]  group cursor-pointer " key={i}>
                <img src={x} className='object-cover h-full w-full rounded-xl ' alt="" />

            <div className="absolute  transition-alll  hidden group-hover:block h-full w-full bg-white top-0 rounded-xl opacity-30"></div>

             <div className="absolute p-2 rounded-full text-white cursor-pointer z-10 top-0 absolute hidden transition-alll group-hover:block  bg-gradient right-0 mt-[-15px]  mr-[-10px]">
             <GoArrowUpRight className=' max-xs:text-4xl max-sm:text-5xl text-3xl'/>
         </div>

         <div className="absolute  transition-alll hidden group-hover:block bottom-10 left-5 word-wrap text-white">
            <p className='max-xs:text-3xl tracking-wide max-sm:text-4xl text-2xl  text-shadow'>UI UX Web Design</p>
         </div>
         </div>
     
        })
   
}

    </div>

    </section>
  )
}

export default Portfolio
