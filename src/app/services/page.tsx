'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

function Services() {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const ourServices = [
        {
            img:'/service1.png',
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
            img:'/nursing-01.png',
            description:'Nursing homes provide round-the-clock medical care for seniors with complex health needs. They offer skilled nursing services, rehabilitation therapies, and specialized medical treatments in a supervised environment.',
            name:'Nursing Homes:',
        },
        {
            img:'/hospice.png',
            description:'Hospice care homes focus on providing comfort, pain management, and emotional support to individuals with terminal illnesses. The goal is to improve the quality of life during the final stages of life.',
            name:'Hospice Care:',
        },
        {
            img:'/employee.png',
            description:'Independent living communities cater to active seniors who want to maintain their autonomy while enjoying a supportive community. These homes offer amenities like social activities, maintenance services, and a sense of belonging.',
            name:'Independent Living:',
        },
        {
            img:'',
            description:'Palliative care homes focus on improving the quality of life for individuals with serious illnesses, regardless of prognosis. The care includes pain management, symptom relief, and emotional support to enhance overall well-being.',
            name:'Palliative Care:',
        },
        {
            img:'',
            description:'Assisted home care services provide support for seniors who prefer to remain in their own homes. Caregivers assist with tasks like meal preparation, medication reminders, and companionship, allowing seniors to age in a familiar environment.',
            name:'Assisted Home Care:',
        },

    ]
  return (
    <div>
      <Navbar/>
<div className='px-20 '>

</div>

<p>Remember that the availability of these services and the specifics of what they offer can vary based on location and the individual care home. It's important to thoroughly research and visit potential care homes to find the one that best suits the needs of your loved one.</p>
      <Footer/>
    </div>
  )
}

export default Services;
