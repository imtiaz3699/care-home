'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';
import { useMediaQuery } from 'react-responsive';

function Services() {
    const ourServices = [
        {
            // img:'/wheelchair.png',
            img:'/care-2.png',
            description:'Trained caregivers provide assistance with activities of daily living such as bathing, dressing, grooming, and toileting, ensuring the individuals personal hygiene and comfort.',
            name:'Personal Care Assistance',
        },
        {
            // img:'/mental-health.png',
            img:'/drugs.png',
            description:'Caregivers help with medication reminders, ensuring that the individual takes the right medication at the correct time, and maintaining accurate records of medication schedules.',
            name:'Medication Management: ',
        },
        {
            // img:'/respite-care.png',
            img:'/meal.png',
            description:'Caregivers assist with meal planning, grocery shopping, and cooking nutritious meals tailored to the individuals dietary needs and preferences.',
            name:'Meal Preparation and Nutrition:',
        },
        {
            // img:'/nursing.png',
            img:'/final-care.png',
            description:'Good nutrition is vital for overall well-being. Our in-house culinary team prepares delicious, balanced meals that cater to individual dietary needs and preferences, ensuring residents receive nourishment that contributes to their health.',
            name:'Nutritious Dining :',
        },
        {
            // img:'/nursing-care.png',
            img:'/love.png',
            description:'Caregivers offer companionship, engage in conversations, and provide emotional support, reducing feelings of loneliness and fostering a sense of connection.',
            name:'Companionship and Social Interaction:',
        },
        {
            // img:'/independent-living.png',
            img:"/solidarity.png",
            description:'Trained staff help individuals with mobility challenges move around safely, using assistive devices when necessary, and assist with transfers in and out of beds or chairs.',
            name:'Mobility and Transfer Assistance :',
        },
        {
            // img:'palliative-care.png',
            img:'/vehicles.png',
            description:'Caregivers provide transportation to medical appointments, grocery stores, social activities, and run errands to help individuals stay engaged and independent.',
            name:'Transportation and Errands :',
        },
        {
            // img:'/assistive-care.png',
            img:'/house.png',
            description:'Respite caregivers offer temporary relief to primary caregivers, allowing them to take a break and recharge while ensuring continuous care for their loved ones.',
            name:'Respite Care:',
        },
    
    ]

    const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // Adjust the breakpoint as needed

  return (
    <div>
      <Navbar/>

     <div className='w-full h-[500px] object-cover flex flex-col items-center justify-center' style = {{backgroundImage:'url(/our-services.png)'}}>
       {
            isSmallScreen && <div className='flex flex-row items-center justify-center font-bold text-center text-white text-[50px] md:text-[100px]'>
            Our Services
            </div>
       } 
    </div>
  
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  px-20 gap-20 translate-y-[-2%] lg:translate-y-[-4%] 2xl:grid-cols-4 2xl:translate-y-[-10%] '>
{
    ourServices.map((element,idx)=> {
        return <div className='w-[300px] bg-white text-center px-3 rounded-xl h-[400px] shadow-2xl shadow-slate-700 drop-shadow-2xl border-2  py-5 flex flex-col items-center'>
        <div className='translate-y-[-50px] bg-blue-900 top-0 rounded-xl w-[70px] h-[70px] flex flex-row items-center justify-center'>
        <img src={element.img} alt="" className="w-[50px] h-[50px] md:w-[50px] md:h-[50px]"/>
        </div>
        <div className='font-bold text-[25]'>{element.name}</div>
        <div className='mt-3 font-normal text-[18px]'>{element.description}</div>
    </div>
    })
}


</div>
<Footer/>
    </div>
  )
}

export default Services;
