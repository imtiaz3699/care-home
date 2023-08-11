
'use client'
import React,{useState} from 'react'
import Image from "next/image";
import Link from 'next/link';



export default function Navbar () {
    const [dropDown,setDropDown] = useState(false);
    const navData = [
        {
            name:'Home',
            url:'/',
        },
        {
            name:'About Us',
            url:'/about',
        },
        {
            name:'Join The Team',
            url:'/join_team',
        },
        {
            name:'Contact Us',
            url:'/contact_us',
        },
    ]

    
    return <div >

      <div className='bg-blue-900 hidden xl:flex flex-row items-center py-3 justify-center text-white md:px-20 md:gap-[100px] '>
        <div className='flex flex-row items-center gap-[40px]'>
        <div>
          <span className=''>Open Hours:</span> Mon-Fri 8:00 am-6:00Pm
        </div>
        <div>
          <span>Phone:</span>074-82112-058
        </div>
        <div><span>Email:</span>contact@sbhhealthcare.com</div>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <div>Social:</div>
          <div className='flex flex-row items-center justify-center gap-5  border-r-white'>
            <img src="/icons-facebook.png" alt="" className=' cursor-pointer w-[30px] h-[30px]'/>
            <img src="/icons-linkedin.png" alt="" className=' cursor-pointer w-[30px] h-[30px]'/>
            <img src="/icons-twitter.png" alt="" className=' cursor-pointer w-[30px] h-[30px]'/>
          </div>
        </div>
      </div>


      <div className='bg-green-800'>

        <div className='flex flex-row items-center justify-between container mx-auto bg-green-800 px-3 md:px-20 text-white py-3 '>
          <div className='bg-white rounded-xl flex flex-row items-center justify-betweeen '>
              <img src="/logo.png" alt="" className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
          </div>
          <div className='hidden md:flex flex-row gap-10'>
            {
              navData.map((element,idx)=> {
                return <>
                      <Link href={element.url}>
                      <div className=''>{element.name}</div>
                      </Link>
                      </>
              })
            }
          </div>

          <div className='md:hidden' onClick={()=> setDropDown(!dropDown)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
          </div>
          {
            dropDown && <div className='flex flex-col px-5 gap-5 absolute left-0 top-[73px] py-4 text-left bg-green-800 w-full z-10'>
            {
              navData.map((element,idx)=> {

                return <Link href={element.url}>
                  <div className='hover:bg-green-400 py-1 px-3 rounded-xl'>{element.name}</div>
                </Link> 
              })
            }
        </div>
          }
          </div>

          </div>
    </div>




    // <div className='flex flex-row items-center justify-between relative bg-green-800 text-white w-full px-5 md:px-10 py-2'>
    //     <div className="bg-white rounded-xl flex flex-row items-center">'
    
    // <img src="/logo.png" alt="Picture of the author" className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
    // </div>
    //     <div className="hidden md:flex flex-row items-center gap-5  ">
    //     {
    //   navData.map((product,idx) =>  {
    //     return (        
    //      <Link href={product.url} key = {idx}> <div  className="font-bold text-[18px] flex flex-row items-center gap-2 cursor-pointer hover:text-blue-500 transition delay-100 duration-300 ease-in-out " onClick={idx === 1 ? ()=> setDropDown(!dropDown) : ()=> setDropDown(false)}>
    //         {product.name} {
    //             product.name === 'Our Homes' && idx === 1 &&
    //             <span>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 md:w-6 md:h-6">
    //                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    //             </svg>
    //         </span>
    //         }    
    //       </div>       
    //       </Link>
    //     )
    //     })     
    //   }
      
    //     </div>

    //     <div className='md:hidden cursor-pointer' onClick = {()=> setDropDown(!dropDown)}>
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ">
    //     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //     </svg>
    //     </div>

    //     {
    //      dropDown && <div className='bg-green-800  flex flex-col absolute z-10 w-full left-0 top-[65px] md:hidden px-5 gap-3 py-5 '>
    //      {navData.map((element,idx)=> {
            
    //        return <Link key = {idx} href={element.url}>
    //        <div className='hover:bg-green-500 py-1 px-3 rounded-md w-full'>{element.name}</div>
    //        </Link> 
    //      })
    //      } 
    //   </div>   
    //     }


    // </div>
}
