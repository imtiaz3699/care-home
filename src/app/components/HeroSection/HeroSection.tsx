'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function HeroSection() {
    const images =['/oldAge.jpg','/oldAge2.jpg','/oldAge3.jpg'];
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
  const ourServices = [
    {
      img:'/dementia.webp',
      name:'Dementia Care',
    },
    {
      img:'/nursing-care.webp',
      name:'Nursing Care',
    },
    {
      img:'physical-disabilities.webp',
      name:'Physical Disabilities',
    },
    {
      img:'respite-care.webp',
      name:'Respite Care',
    },
  ]

  return (

<>
    <div className="w-full h-[500px]">
        
<Swiper className="mySwiper w-full h-full relative">
       {
        images.map((element,idx)=> {
            return <SwiperSlide className="w-full h-full"><img src={element} alt="" className="object-contained w-full h-full"/></SwiperSlide>
        })
       } 
</Swiper>
    <div className="flex flex-row justify-between absolute top-[75%]  z-50 w-full px-12">
    <div className="font-bold text-[35px]">Quality Care Your Loved Ones Deserve</div>
    <div className="bg-green-500 mt-[22px] py-5 px-5 rounded-t-lg">Call Us Today: <span>01162251632</span></div>
    </div>        
      
    </div>

       <div className="flex flex-col items-center py-5 bg-yellow-100">
        <div className="flex flex-col items-center border-b pb-5 border-gray-500">
        <h2 className="font-semi-bold text-green-500 text-[25px]">Find a Mauricare Home</h2>
        <h2>Established over a decade ago, Mauricare is a group of Residential and Nursing Homes offering compassionate and person centered care for the elderly nationwide.</h2>
        </div>
        <div className="pt-5 flex flex-row items-center px-28">
        {
          houseAddress.map((element,idx)=> {
            return <div>{element.name}</div>
          })
        }  
        </div>
       </div>

       <div className="flex flex-col items-center justify-center py-5">
        <div className="text-[25px] text-green-500">Our Care Services</div>
        <div className="text-[16px] w-[50%] text-center">We work closely with our residents, their loved ones and all stakeholders to ensure that we support people to live with us as part of our extended family.</div>
        <div className="flex flex-row items-center justify-between gap-20 py-10">
           {
            ourServices.map((element,idx)=> {
              return <div  className="flex flex-col items-center gap-5">
                <img src={element.img} alt="" />
                <div className="text-green-500">{element.name}</div>
              </div>
            })
            
           } 
        </div>
       </div>

    </>

  )
}

export default HeroSection
