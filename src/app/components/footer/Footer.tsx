"use client"
import Link from 'next/link'
import React from 'react'


function Footer() {
    const footer1 = [
        {
          name:'About Us',
          url:'/about',
        },
        {
          name:'Our Services',
          url:'/services',
        },
        {
          name:'Privacy Policy',
          url:'/privacy-policy',
        },
        {
          name:'Useful Links',
          url:'',
        },
      ]
     
  return (
    <>
     <div className="footer flex flex-col md:flex-row  md:justify-between md:px-20 text-center md:text-left  bg-gray-800 justify-center gap-20 py-10">
<div className='flex flex-col items-center text-center gap-3'>
  <img src="/logo.png" alt="" className="w-[150px] h-[100px] m-0"/>
  <div className="text-white">SBH Domiciliary Care</div>
  <div className="text-white">311 Brookvale Road <br /> Erdington Birmingham B23 7RR</div>
</div>
<div>
<h1 className="text-white font-bold text-[35px]">SBH Domiciliary Care</h1>
<div className="flex flex-col gap-1">
        {
          footer1.map((element,idx)=> {
            
            return <Link href={element.url}> <div className="hover:underline cursor-pointer text-white">{element.name}</div> </Link>
          })
        }
</div>
</div>

    <div className="flex flex-col items-center md:items-start ">
      
      <div className="text-white font-bold text-[35px]">Contact Us</div>
      
    
    <div className="text-white flex flex-col">Tel : 0748 211 2058 <span className='ml-9'>0791 678 9486</span></div>
    <div className="text-white">Email : Info@sbhhealthcare.co.uk</div>
    <div className="mt-2">
    <div className="text-white font-normal text-[35px]">Follow Us</div>
    <div className="flex flex-row items-center justify-center">
    <img src="/facebook.png" alt="" className='w-[50px] h-[50px]'/>
    <img src="/twitter.png" alt="" className='w-[50px] h-[50px]'/>
    <img src="/linked.png" alt="" className='w-[50px] h-[50px]'/>
    </div>
    </div>
    </div>
    </div> 
    </>
  )
}

export default Footer
