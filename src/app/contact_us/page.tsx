"use client"
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';


function ContactUs() {
  const contactUs = [
    {
      img:'/location.png',
      name:'OUR MAIN OFFICE',
      description:'SBH Healthcare Limited 311 Brookvale Road Erdington Birmingham B23 7RR',
    },
    {
      img:'/phone.png',
      name:'PHONE NUMBER',
      description:'0791 678 9486',
    },
    // {
    //   img:'/fax.png',
    //   name:'FAX',
    //   description:'074-82112-058',
    // },
    {
      img:'/emil-us.png',
      name:'EMAIL',
      description:'Info@sbhhealthcare.co.uk',
    }
  ]
  const socialIcons = [
    {

    }
  ]
  return (
    <>
<Navbar/>
<div className='w-full h-[500px] object-cover' style = {{backgroundImage:'url(/our-services.png)'}}></div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  px-20 gap-20 translate-y-[-10%] lg:translate-y-[-4%]  2xl:translate-y-[-30%] '>
{
    contactUs.map((element,idx)=> {
        return <div className='w-[300px] bg-white text-center px-3 rounded-xl shadow-2xl shadow-slate-700 drop-shadow-2xl border-2 py-5 h-[200px] flex flex-col items-center '>
        <div className=' top-0 rounded-xl w-[70px] h-[70px] flex flex-row items-center justify-center'>
        <img src={element.img} alt="" className="w-[50px] h-[50px] md:w-[50px] md:h-[50px]"/>
        </div>
        <div className='font-bold text-[25]'>{element.name}</div>
        <div className='mt-3 font-normal text-[16px]'>{element.description}</div>
    </div>
    })
}
</div>

<div className='flex flex-row items-center justify-center'>
  
</div>
{/* <div className='px-20 py-20'>This is the best</div> */}
<div className='flex flex-col lg:flex-row items-center justify-center px-3 md:px-20 py-20 gap-20'>
  <div className='flex flex-col gap-10'>
    <div className='flex flex-row items-center gap-10'>
      <div className='flex flex-col gap-2'>
      <label htmlFor="Email" className='font-bold  text-blue-800'>Email</label>
      <input type="text" className='w-full text-sm border-b-2 border-gray-800 outline-none opacity-50 focus:border-blue-800' placeholder='Enter you email address'/>
      </div>
      <div className='flex flex-col gap-2'>
      <label htmlFor="Email" className='font-bold  text-blue-800'>Name</label>
      <input type="text" className='w-full text-sm border-b-2 border-gray-800 outline-none opacity-50 focus:border-blue-800' placeholder='Enter you email address'/>
      </div>
    </div>
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col '>
      <label htmlFor="message" className='font-bold text-blue-800'>Message</label>
    <textarea name="message" className='w-full text-sm border-b-2 border-gray-800 outline-none opacity-50 focus:border-blue-800'></textarea>
    </div>
    <button className='bg-blue-800 text-white py-3 rounded-2xl'>Submit</button>
    </div>
  </div>
  <div className='flex flex-col items-center'>
    <h1 className='text-[40px] text-blue-900'>Get in touch</h1>
    <p>We believe in sustainability is vitally important.</p>
    {/* <GoogleMaps/> */}
    <div className='mt-10 w-full lg:w-[600px]'>
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="100%"
              height="450"
              
            />
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default ContactUs;
