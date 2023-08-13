"use client"
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

function ContactUs() {
  return (
    <>
<Navbar/>
<div className='w-full h-[500px] bg-no-repeat bg-cover' style = {{backgroundImage:'url(/home.jpg)'}}></div>
<div className='py-2 flex flex-col lg:flex-row items-center justify-center px-3 lg:px-20'>
   <div className='flex flex-col gap-5'>
    <h1 className='font-semibold text-[30px] text-gray-600'>SBH</h1>
    <div className='font-semibold'>Head Office</div>
    <div>Telephone:</div>
    <div className="bg-[#39b54a] px-3 py-3 rounded-md text-white w-full lg:w-[200px] text-left">0791 678 9486</div>
    <div>Email:</div>
    <div className="bg-[#39b54a] px-3 py-3 rounded-md text-white w-full lg:w-[300px] text-left">Info@sbhhealthcare.co.uk</div>
    <div className='w-full lg:w-[500px]'>
    For more general questions, why not get in touch with our Head Office by calling or completing the form?
<br /><br />
To enquire about a resident or a specific home, get in touch with the individual home's Manager, each of whom are listed on their respective homes' pages:
    </div>

    <div>We look forward to hearing from you.</div>
    </div> 



   
   <div className="flex flex-col items-center justify-center w-full lg:w-[500px] gap-5 px-3 lg:px-10 py-10">
<div className="flex flex-col gap-3 w-full"> 
  <label htmlFor="name">Your Name</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="email">Your Email Address</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="phone">Telephone Number (Optional)</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="discussion">What would you like to discuss?</label>
  
  <textarea name="discussion" cols={30} rows={10} className="outline-none border border-gray-500"></textarea>
</div>
<button className="bg-[#39b54a] px-3 py-3 rounded-xl text-white">Send Inquiry</button>
</div>
    





</div>
<Footer/>
    </>
  )
}

export default ContactUs;
