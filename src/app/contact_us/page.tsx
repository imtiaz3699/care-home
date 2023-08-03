import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

function ContactUs() {
  return (
    <>
<Navbar/>
<div className='w-full h-[500px] bg-no-repeat bg-cover' style = {{backgroundImage:'url(/home.jpg)'}}></div>
<div className='py-2 flex flex-row items-center justify-center px-20'>
   <div className='flex flex-col gap-5'>
    <h1 className='font-semibold text-[30px] text-gray-600'>SBH</h1>
    <div className='font-semibold'>Head Office</div>
    <div>Telephone:</div>
    <div className="bg-green-800 px-3 py-3 rounded-md text-white w-[225px] text-center">Call Us on 0116 225 1632</div>
    <div>Email:</div>
    <div className="bg-green-800 px-3 py-3 rounded-md text-white w-[350px] text-center">Click to email contact@Mauricare.com</div>
    <div className='w-[500px]'>
    For more general questions, why not get in touch with our Head Office by calling or completing the form?
<br /><br />
To enquire about a resident or a specific home, get in touch with the individual home's Manager, each of whom are listed on their respective homes' pages:
    </div>

    <div>We look forward to hearing from you.</div>
    </div> 
   <div className='flex flex-col'>
   <div className="flex flex-col items-center justify-center w-[500px] gap-5 px-10 py-10">
<div className="flex flex-col gap-3 w-full"> 
  <label htmlFor="">Your Name</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">Your Email Address</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">Telephone Number (Optional)</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">What would you like to discuss?</label>
  {/* <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/> */}
  <textarea name="" id="" cols="30" rows="10" className="outline-none border border-gray-500"></textarea>
</div>
<button className="bg-green-800 px-3 py-3 rounded-xl text-white">Send Inquiry</button>
</div>
    </div> 
</div>
<Footer/>
    </>
  )
}

export default ContactUs;
