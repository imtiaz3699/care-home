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
            description:'Memory care homes specialize in caring for individuals with Alzheimers disease, dementia, or other memory-related conditions. These facilities offer a secure environment, structured routines, and specialized therapies to help residents maintain their cognitive functions.',
            name:'Memory Care:',
        },
        {
            img:'/respite-care.png',
            description:'Respite care homes offer short-term stays for seniors, allowing primary caregivers to take a break from their responsibilities. This service ensures that the elderly receive proper care and attention while their caregivers tend to personal matters.',
            name:'Respite Care:',
        },
        {
            img:'/nursing.png',
            description:'Nursing homes provide round-the-clock medical care for seniors with complex health needs. They offer skilled nursing services, rehabilitation therapies, and specialized medical treatments in a supervised environment.',
            name:'Nursing Homes:',
        },
        {
            img:'/nursing-care.png',
            description:'Hospice care homes focus on providing comfort, pain management, and emotional support to individuals with terminal illnesses. The goal is to improve the quality of life during the final stages of life.',
            name:'Hospice Care:',
        },
        {
            img:'/independent-living.png',
            description:'Independent living communities cater to active seniors who want to maintain their autonomy while enjoying a supportive community. These homes offer amenities like social activities, maintenance services, and a sense of belonging.',
            name:'Independent Living:',
        },
        {
            img:'palliative-care.png',
            description:'Palliative care homes enhance life quality for seriously ill individuals, offering pain management, symptom relief, and emotional support to improve overall well-being, irrespective of prognosis.',
            name:'Palliative Care:',
        },
        {
            img:'/assistive-care.png',
            description:'Assisted home care services provide support for seniors who prefer to remain in their own homes. Caregivers assist with tasks like meal preparation, medication reminders, and companionship, allowing seniors to age in a familiar environment.',
            name:'Assisted Home Care:',
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
