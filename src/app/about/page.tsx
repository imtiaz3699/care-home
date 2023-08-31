"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'
import { useMediaQuery } from 'react-responsive';
import Modal from '../components/Modal/Modal';

function page() {
    const data = [
        {
            name:'Caring',
            img:'/caring.png',
        },
        {
            name:'Equality',
            img:'/equality.png',
        },
        {
            name:'Respect',
            img:'/respect.png',
        },
        {
            name:'Kind',
            img:'/kind.png',
        },
        {
            name:'Choice',
            img:'/choice.png',
        },
        {
            name:'Listen',
            img:'listen.png',
        },
    ]

    const ourCare = [
        {
            img:'/ourCare1.webp',
            name:'Our Care',
            detail:'Above all, our fundamental purpose revolves around not merely sustaining, but elevating the quality of life for our inhabitants. We firmly hold the view that advancing in years should be a jubilant commemoration of accumulated wisdom and experiences'
        },
        {
            img:'/ourCare2.webp',
            name:'Our Homes',
            detail:'Our Residences are meticulously crafted to embody a true "refuge of familiarity," boasting charming environs, exquisitely adorned chambers, exceptional cuisine, and, of paramount significance, an unparalleled caliber of nurturing',
        },
        {
            img:'/our-values.jpg',
            name:'Our Values',
            detail:
            'The families of our residents can find solace in the knowledge that their cherished ones are ensconced within a secure, compassionate, and inviting milieu. Their pride, esteem, well-being, and individualities are entrusted to capable guardianship.' 
        }
    ]

const dataFinal = [
    {
        img:'/about-care.png',
        name:'Quality Patient Care',
    },
    {
        img:'/about-disease.png',
        name:'Disease Prevention',
    },
    {
        img:'/about-health.png',
        name:'Health Promotion',
    },
    {
        img:'/about-accessible.png',
        name:'Accessible Healthcare Services',
    },
    {
        img:'/about-efficient.png',
        name:'Efficient Resource Utilization',
    },
    {
        img:'/about-research.png',
        name:'Research and Innovation',
    },
    {
        img:'/health-equity.png',
        name:'Health Equity',
    },
    {
        img:'/collaboration.png',
        name:'Collaboration and Coordination',
    },
]
// const isSmallScreen = window.innerWidth <= 768;
const isSmallScreen = useMediaQuery({ maxWidth: 768 });
const isBigScreen = useMediaQuery({ minWidth: 769 });
  return (
    <>
      <Navbar/>

     {
        isBigScreen && <div className='w-full h-[500px] object-cover flex flex-row items-center justify-center bg-[#133d66]'>
            <h1 className='font-bold text-[50px] md:text-[100px] text-white '>About Us</h1>        </div>
     }
     {
        isSmallScreen && <div className='w-full h-[400px] bg-[#133d66] flex flex-row items-center justify-center'>
            <div className='text-[50px] text-white font-bold'>About Us</div>
        </div>
     } 
      

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center px-3 md:px-20 py-20'>
           
           {
            dataFinal.map((element,idx)=> {
                return <div className='w-[300px] bg-blue-500 text-center px-3 rounded-xl h-[250px] shadow-2xl shadow-slate-700 drop-shadow-2xl gap-4 py-5 flex flex-col items-center justify-center'>
            <img src={element.img} alt="" className='text-[100px] h-[100px]'/>
            <h1 className=' font-bold text-white text-[18px]'>{element.name}</h1>
    </div>
            })
           }             
      </div>
<div className='w-full h-full flex flex-row items-center flex flex-row items-center justify-center'>
           <div className='w-full py-20 bg-[#133d66] text-[20px] text-center px-20 text-white'>SBH Domiciliary Care is a trusted name in healthcare services, dedicated to providing compassionate and comprehensive care to individuals and communities. With a strong commitment to excellence, we offer a range of personalized healthcare solutions designed to meet diverse needs. Our team of skilled professionals brings expertise and empathy to every interaction, ensuring the highest standards of care. At SBH Domiciliary Care, we strive to empower healthier lives through a blend of innovation, integrity, and genuine concern for the well-being of those we serve.</div>
</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center py-20 px-20 gap-20   '>
    {
        ourCare.map((element,idx)=> {
            return <div className='flex flex-col items-center gap-4'>
                <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full drop-shadow-2xl shadow-2xl overflow-hidden'>
            <img src={element.img} alt="" className='box-shadow-xl w-full h-full'/>
            </div>
            <h1 className='text-gray-500  font-bold text-[30px]'>{element.name}</h1>
            <div className='max-w-[300px] text-gray-500'>{element.detail}</div>
        </div>
        })
    }        
      </div>
      

<Footer/>
    </>
  )
}

export default page
