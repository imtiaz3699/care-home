"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'

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
  return (
    <>
      <Navbar/>
      <div className='w-full h-[500px] bg-cover' style = {{backgroundImage:'url(/about-us.jpg)'}}></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center px-3 md:px-20 py-20'>
           
           {
            dataFinal.map((element,idx)=> {
                return <div className='w-[300px]  bg-blue-500 text-center px-3 rounded-xl h-[250px] shadow-2xl shadow-slate-700 drop-shadow-2xl py-5 flex flex-col items-center justify-center'>
            <img src={element.img} alt="" className='text-[100px] h-[100px]'/>
            <h1>{element.name}</h1>
    </div>
            })
           }             
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
{/* <div className=' py-20 text-center font-bold text-[30px] px-3 bg-blue-900 md:text-[35px] text-white'>
    Our Philosophy of Care
</div> */}
{/* <div className='py-20 flex flex-row justify-center px-3'>
    <div className='bg-blue-900 text-white p-4 border border-green-800 rounded-xl w-[800px]'>
        <div className='text-[18] md:text-[20px] '>Every SBH Residence operates based on a care philosophy that mandates the provision of a secure and cozy setting for all inhabitants. Our commitment entails treating everyone with honor and impartiality, regardless of their requirements and histories, within an ambiance of confidence and recognition.</div>
        <br />
        <div className=''>We hold a firm conviction in championing self-reliance and recognizing the uniqueness of each resident. It is our tenet that every individual receives a personalized care strategy tailored to their needs and desires, affording them the autonomy to shape elements of their daily regimen. Moreover, we wholeheartedly embrace and encourage recurrent gatherings with kin and companions.
<br /><br />
To ensure that our high standard of care is maintained, an independent quality assurance system is in place.</div>
    </div>
</div> */}

<Footer/>
    </>
  )
}

export default page
