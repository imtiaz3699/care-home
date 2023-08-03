import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <div className='w-full h-[500px] bg-no-repeat bg-cover' style = {{backgroundImage:'url(/team.jpg)'}}></div>
      <div className='py-10 flex flex-row justify-center items-center gap-10 px-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-green-800 text-[50px]'>Join the Mauricare Team</h1>
          <div>We are always looking to for new individuals to join the Mauricare Team.</div>
          <div>There are various roles available such as:</div>
          <ul className='list-disc'>
            <li className='ml-10'>Senior Health Care Assistant</li>
            <li className='ml-10'>Health Care Assistant</li>
            <li className='ml-10'>Domestic</li>
            <li className='ml-10'>Cook</li>
            <li className='ml-10'>Kitchen Assistant</li>
            <li className='ml-10'>Activities Coordintor</li>
          </ul>
          <div className=''>If you have a caring nature at heart and want to join our team then please contact us,<br /> stating which home you would like to join and what position you are seeking.
</div>
<div className='bg-green-800 py-2 px-3 text-white w-[300px] text-center rounded-xl'>Contact Us about Jobs</div>
        </div>
        <div className='w-[700px] h-[500px] rounded-xl'>
          <img src="/join-team.webp" alt="" className='w-full h-full rounded-xl'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
 
export default page
