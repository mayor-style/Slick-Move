import React from 'react'

const Contact = () => {
  return (
    <section className='p-10'> 
      <div className="rounded-2xl bg-white/20 border backdrop-blur-md p-10 max-w-[1000px]">
        <div className="heading">
            <h1 className='heading'>LET'S DISCUSS YOUR IDEA .</h1>
        </div>

        <div className="flex gap-1 max-md:flex-col max-md:items-center justify-center">
        <div className="md:w-[50%]">
            <p className='text-white'>Feel free to contact us for any inquiries, collaborationsor project discussions. We are here to assist you. You can reach us via phone, email or by fillng out the contact form below. We look forward to hearing from you!</p>

        </div>

        <div className="md:w-[50%] h-full">
        <form action="" className='w-[100%] md:flex justify-center max-md:items-center gap-4 flex-col'>
        <input type="text" name="Name" id="" placeholder='Name' className=' border-b bg-transparent text-white font-montserrat outline-none p-3 w-[100%] border-gray-500 border-b-1'/>

        <input type="email" name="Email" id="" placeholder='Email' className=' border-b bg-transparent text-white font-montserrat outline-none w-[100%] border-gray-500 p-3 border-b-1'/>

        <input type="text" name="Company Name" id="" placeholder='Company Name' className=' border-b bg-transparent text-white font-montserrat w-[100%] border-gray-500 outline-none p-3 border-b-1'/>
        <input type="text" name="service" id="" placeholder='Service' className=' border-b bg-transparent text-white font-montserrat w-[100%] border-gray-500 outline-none p-3 border-b-1'/>

        <input type="text" name="project details" id="" placeholder='Project Details' className=' border-b bg-transparent text-white w-[100%] border-gray-500 font-montserrat outline-none p-3 border-b-1'/>
        </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
