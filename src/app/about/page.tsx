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
            detail:'We believe, above all else, that our role is to not only maintain, but to enhance our residents quality of life and that getting older should be a celebration of experience and wisdom.'
        },
        {
            img:'/ourCare2.webp',
            name:'Our Homes',
            detail:'Our Homes are designed to be a "home from home" in every sense, with delightful surroundings, beautifully furnished rooms, excellent food and, most importantly, a standard of care which is second to none.',
        },
        {
            img:'/ourCare3.webp',
            name:'Our Values',
            detail:'Our residents families can rest assured that their loved ones are in a safe, caring and homely environment and that their dignity, respect, happiness and identities are in safe hands.'
        }

    ]
  return (
    <>
      <Navbar/>
      <div className='w-full h-[500px]' style = {{backgroundImage:'url(/oldAge2.jpg)'}}></div>
      <div className='bg-green-800 container mx-auto py-7 flex flex-row items-center justify-center'>
        <div className='bg-yellow-100 flex flex-col items-center max-w-[500px] py-5 px-10 rounded-xl'>
            <div className='font-bold text-[40px] text-green-700'>Our Mission</div>
            <p className='font-semibold text-green-500'>We promise to share our caring nature with all our residents and stakeholders, making them feel as homely, comfortable and safe as possible in our care.</p>
        </div>
      </div>
      <div className='bg-yellow-100 grid grid-cols-3 place-items-center py-10'>
           {
            data.map((element,idx)=> {
                return <div className='flex flex-col items-center' key = {idx}>
                <h1 className='font-semibold text-[34px] text-green-700'>{element.name}</h1>
                <img src={element.img} alt="" className='w-52 h-52'/>
            </div>
            })
           }             
      </div>

      <div className='py-10 container- mx-auto flex flex-row  justify-center gap-10'>
    {
        ourCare.map((element,idx)=> {
            return <div className='flex flex-col items-center gap-4'>
                <div className='w-[200px] h-[200px] rounded-full drop-shadow-2xl'>
            <img src={element.img} alt="" className='box-shadow-xl'/>
            </div>
            <h1 className='text-gray-500  font-bold text-[30px]'>{element.name}</h1>
            <div className='max-w-[300px] text-gray-500'>{element.detail}</div>
        </div>
        })
    }        
      </div>
<div className='bg-green-800 py-5 text-center font-bold text-[40px] text-white'>
    Our Philosophy of Care
</div>
<div className='py-5 flex flex-row justify-center'>
    <div className='bg-yellow-100 p-4 border border-green-800 rounded-xl w-[800px]'>
        <div className='text-[20px] text-green-800'>All the Mauricare Homes work under a philosophy of care that dictates that all residents shall live in a safe and comfortable environment, where they are treated with respect and equality, irrespective of their needs and backgrounds and in an environment of trust and familiarity.</div>
        <br />
        <div className='text-green-700'>We believe it’s extremely important to promote independence and understand that all of our residents should be treated as individuals, so each member has a plan of care designed around their requirements and preferences, granting them choice in aspects of their daily routine. We also welcome regular visits from family and friends.
<br /><br />
To ensure that our high standard of care is maintained, an independent quality assurance system is in place.</div>
    </div>
</div>
<div className='py-3 flex flex-row items-center justify-center bg-yellow-100 gap-20'>
<div className='w-[600px] h-[400px] rounded-2xl shadow-2xl drop-shadow-2xl'>

    <img src="/staff.webp" alt="" className='w-full h-full rounded-2xl'/>
</div>
<div className='w-[500px]'>
    <h1 className='font-bold text-gray-500 text-[35px]'>Our Staff</h1>
    <div className='text-gray-500'>
All our staff are employed under a rigorous process which enables us to find the best candidates for the job. All our care staff have, or at least are working towards an QCF (formerly NVQ) Level 2 qualification in Health and Social Care. Like wise our catering staff all have QCF (formerly NVQ) Level 2 in catering and hospitality.
<br />
We are committed to keeping our staff up to date with changing procedure and legislation using a continuous staff training programme.</div>
<br />
<div className='text-white text-center bg-green-800 rounded-xl cursor-pointer hover:bg-green-900 p-3'>Have you got what takes to join our team? Find out about jobs at SBH</div>
    
</div>
</div>

<Footer/>

    </>
  )
}

export default page
