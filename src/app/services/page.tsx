'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

function Services() {
    const ourServices = [
        {
            img:'/wheelchair.png',
            description:'Assisted living care homes provide support for seniors who need help with daily activities such as bathing, dressing, and medication management. Residents enjoy private apartments and communal spaces while receiving assistance tailored to their individual needs.',
            name:'Assisted Living Care',
        },
        {
            img:'/mental-health.png',
            description:'For residents requiring specialized care, our dementia and memory care services are designed to provide support, comfort, and a safe environment for individuals living with memory-related conditions.',
            name:'Dementia and Memory Care: ',
        },
        {
            img:'/respite-care.png',
            description:'Our modern and well-maintained facilities offer a comfortable and homely atmosphere. Residents can choose from a range of accommodation options that suit their lifestyle and budget, all designed to provide a sense of belonging and security.',
            name:'Comfortable Accommodation :',
        },
        {
            img:'/nursing.png',
            description:'Good nutrition is vital for overall well-being. Our in-house culinary team prepares delicious, balanced meals that cater to individual dietary needs and preferences, ensuring residents receive nourishment that contributes to their health.',
            name:'Nutritious Dining :',
        },
        {
            img:'/nursing-care.png',
            description:'Health and safety are paramount. Our skilled medical professionals are available around the clock to provide immediate assistance and care whenever its needed, ensuring peace of mind for both residents and their families.',
            name:'24/7 Medical Support :',
        },
        {
            img:'/independent-living.png',
            description:'We understand that every individual has unique needs and preferences. Our experienced team collaborates with residents and their families to create personalized care plans that cater to specific requirements, ensuring that each resident receives the attention they deserve.',
            name:'Personalized Care Plans :',
        },
        {
            img:'palliative-care.png',
            description:'We believe in promoting an active and enjoyable lifestyle. Our carefully crafted recreational activities and social events encourage residents to stay engaged, form meaningful connections, and maintain a vibrant sense of community.',
            name:'Engaging Activities :',
        },
        {
            img:'/assistive-care.png',
            description:'We believe in fostering a strong sense of family and community. Families are encouraged to participate in their loved ones care journey, with regular updates, communication channels, and opportunities to engage in various activities.',
            name:'Family Involvement :',
        },
    
    ]
  return (
    <div>
      <Navbar/>
<div className='w-full h-[500px] object-cover' style = {{backgroundImage:'url(/our-services.png)'}}></div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  px-20 gap-20 translate-y-[-2%] lg:translate-y-[-4%] 2xl:grid-cols-4 2xl:translate-y-[-10%] '>
{
    ourServices.map((element,idx)=> {
        return <div className='w-[300px] bg-white text-center px-3 rounded-xl h-[450px] shadow-2xl shadow-slate-700 drop-shadow-2xl border-2  py-5 flex flex-col items-center'>
        <div className='translate-y-[-50px] bg-blue-500 top-0 rounded-xl w-[70px] h-[70px] flex flex-row items-center justify-center'>
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
