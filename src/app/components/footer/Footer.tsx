'use client'
import Link from 'next/link'
import React from 'react'


function Footer() {
    const footer1 = [
        {
          name:'About Us',
          url:'',
        },
        {
          name:'Our Philosophy',
          url:'',
        },
        {
          name:'History',
          url:'',
        },
        {
          name:'Testimonials',
          url:'',
        },
      ]
      const houseAddress = [
        {
          name:'Ashby Lodge wakefield',
          url:'',
        },
        {
          name:'Ashfield House, Conventry',
          url:'',
        },
        {
          name:'As Care Leicester',
          url:'',
        },
        {
          name:'Ashview House, Stoke-on-Trent',
          url:'',
        },
        {
          name:'Old Vicarage Workshop',
          url:'',
        },
        {
          name:'Ashton Court Rotherham',
          url:'',
        },
        {
          name:'Aston Manor Dewsbury',
          url:'',
        },
        {
          name:'Ashford House Liecestershire',
          url:'',
        },
        {
          name:'London Road Specialist Nursing Home,Leicester',
          url:'',
        },
        
      ]
  return (
    <>
     <div className="footer flex flex-col items-center text-center md:text-left md:flex-row bg-green-800 justify-center gap-20 py-10 px-3">
<div className='flex flex-col items-center text-center'>
  <img src="/logo.png" alt="" className="w-[200px] h-[200px] m-0"/>
  <div className="text-white">SBH Healthcare Limited</div>
  <div className="text-white">311 Brookvale Road <br /> Erdington Birmingham B23 7RR</div>
</div>
<div>
<h1 className="text-white font-bold text-[35px]">SBH Healthcare</h1>
<div className="flex flex-col gap-1">
        {
          footer1.map((element,idx)=> {
            return <div className="hover:underline cursor-pointer text-white">{element.name}</div>
          })
        }
</div>
</div>

    <div className="flex flex-col ">
      <Link href='/about'>
      <div className="text-white font-bold text-[35px]">Contact Us</div>
      </Link>
    
    <div className="text-white">Tel:074-82112-058</div>
    <div className="text-white">Email:contact@sbhhealthcare.com</div>
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
