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
            img:'choice.png',
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
  return (
    <>
      <Navbar/>
      <div className='w-full h-[500px] bg-cover' style = {{backgroundImage:'url(/oldAge2.jpg)'}}></div>
      <div className='bg-[#39b54a] py-7 px-3 flex flex-row items-center justify-center'>
        <div className='bg-yellow-100 flex flex-col items-center max-w-[500px] py-5 px-1 sm:px-10 text-center rounded-xl border-1 border-gray-500'>
            <div className='font-bold text-[40px] text-black'>Our Mission</div>
            <p className='font-semibold text-black'>We promise to share our caring nature with all our residents and stakeholders, making them feel as homely, comfortable and safe as possible in our care.</p>
        </div>
      </div>
      <div className='bg-yellow-100 grid grid-cols-2 sm:grid-cols-3  place-items-center py-10'>
           {
            data.map((element,idx)=> {
                return <div className='flex flex-col items-center' key = {idx}>
                <h1 className='font-semibold text-[25px] sm:text-[34px] text-black'>{element.name}</h1>
                <div className='w-20 h-20 sm:w-28 sm:h-28 '>
                <img src={element.img} alt="" className='w-full h-full'/>
                </div>
            </div>
            })
           }             
      </div>

      <div className='py-10 container- mx-auto flex flex-col md:flex-row px-3  justify-center gap-10'>
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
<div className='bg-[#39b54a] py-5 text-center font-bold text-[30px] px-3 md:text-[35px] text-white'>
    Our Philosophy of Care
</div>
<div className='py-20 flex flex-row justify-center px-3'>
    <div className='bg-yellow-100 p-4 border border-green-800 rounded-xl w-[800px]'>
        <div className='text-[18] md:text-[20px] text-green-800'>Every SBH Residence operates based on a care philosophy that mandates the provision of a secure and cozy setting for all inhabitants. Our commitment entails treating everyone with honor and impartiality, regardless of their requirements and histories, within an ambiance of confidence and recognition.</div>
        <br />
        <div className='text-green-700'>We hold a firm conviction in championing self-reliance and recognizing the uniqueness of each resident. It is our tenet that every individual receives a personalized care strategy tailored to their needs and desires, affording them the autonomy to shape elements of their daily regimen. Moreover, we wholeheartedly embrace and encourage recurrent gatherings with kin and companions.
<br /><br />
To ensure that our high standard of care is maintained, an independent quality assurance system is in place.</div>
    </div>
</div>



<div className='py-20 flex flex-col px-3 lg:flex-row items-center justify-center bg-yellow-100 gap-20'>
<div className='w-full h-full md:w-[600px] md:h-[400px] rounded-2xl shadow-2xl drop-shadow-2xl'>
    <img src="/staff.jpg" alt="" className='w-full h-full rounded-2xl'/>
</div>
<div className='md:w-[500px]'>
    <h1 className='font-bold text-gray-500 text-[35px]'>Our Staff</h1>
    <div className='text-gray-500'>
    Our entire workforce is selected through a stringent procedure designed to unearth the finest candidates for the role. Each of our caregiving personnel possesses, or is actively pursuing, a QCF (previously known as NVQ) Level 2 accreditation in Health and Social Care. Similarly, our culinary team boasts QCF (formerly NVQ) Level 2 certifications in the realms of catering and hospitality.
<br /><br />
Our dedication extends to ensuring our staff remain well-versed in evolving protocols and regulations, facilitated by an ongoing regimen of staff development and instruction.
<br />
</div>
<br />
<div className='text-white text-center bg-[#39b54a] rounded-xl cursor-pointer hover:bg-green-900 p-3'>Have you got what takes to join our team? Find out about jobs at SBH</div>
</div>
</div>

<Footer/>

    </>
  )
}

export default page
