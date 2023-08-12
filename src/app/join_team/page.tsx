"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <div className='w-full h-[500px] bg-no-repeat bg-cover' style = {{backgroundImage:'url(/team.jpg)'}}></div>
      <div className='py-10 flex flex-col md:flex-row justify-center items-center gap-10 px-3 sm:px-5 md:px-5 lg:px-20'>
        <div className='flex flex-col gap-4 text-[16px]'>
          <h1 className='text-green-800 text-[30px] md:text-[50px] text-center font-bold'>Join the SBH Team</h1>
          <div>We are always looking to for new individuals to join the SBH Team.</div>
          <div>There are various roles available such as:</div>
          <ul className='list-disc'>
            <li className='ml-10'>Senior Health Care Assistant</li>
            <li className='ml-10'>Health Care Assistant</li>
            <li className='ml-10'>Domestic</li>
            <li className='ml-10'>Cook</li>
            <li className='ml-10'>Kitchen Assistant</li>
            <li className='ml-10'>Activities Coordintor</li>
          </ul>
          <div className='w-full'>If you have a caring nature br at heart and want to join our team then please contact us,<br /> stating which home you would like to join and what position you are seeking.
</div>
<div className='bg-green-800 py-2 px-3 text-white w-full md:w-[300px] text-center rounded-xl'>Contact Us about Jobs</div>
        </div>
        <div className='w-full h-full md:w-[700px] md:h-[500px] rounded-xl'>
          <img src="/Joining-a-new-team.jpg" alt="" className='w-full h-full bg-cover rounded-xl'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
 
export default page
