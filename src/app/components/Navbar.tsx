
'use client'
import React,{useState} from 'react'
import Image from "next/image";
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface NavbarProps {
  handleModal? : (param : any) => void;
  showModal? : boolean;
}
 const Navbar: React.FC<NavbarProps> = ({handleModal,showModal})=> {
  const pathname = usePathname();
  console.log(pathname)
 

    const [dropDown,setDropDown] = useState(false);

    const navData = [
        {
            name:'Home',
            url:'/',
        },
        {
          name:'Services',
          url:'/services',
        },
        {
            name:'About Us',
            url:'/about',
        },
        {
          name:'Gallery',
          url:'',
        },
        {
            name:'Contact Us',
            url:'/contact_us',
        },
    ]

    
    return <div >

      <div className='bg-[#133d66] hidden xl:flex flex-row items-center py-3 justify-between text-white md:px-20 md:gap-[100px] '>
        <div className='flex flex-row items-center gap-[40px]'>
        <div>
          <span className=''>Open Hours:</span> Mon-Fri 8:00 am-6:00Pm
        </div>
        <div>
          <span>Phone : </span>0791 678 9486
        </div>
        <div><span>Email : </span>Info@sbhhealthcare.co.uk</div>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <div>Social:</div>
          <div className='flex flex-row items-center justify-center gap-5  border-r-white'>
            
            <svg xmlns="http://www.w3.org/2000/svg"  fill="white" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="-143 145 512 512" >
            <g>
	          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"/>
	          <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3   c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"/>
            </g>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 192 192" fill="transparent"><rect width="132" height="132" x="30" y="30" stroke="white" stroke-width="12" rx="16"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M66 86v44"/><circle cx="66" cy="64" r="8" fill="white"/><path stroke="white" stroke-linecap="round" stroke-width="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" preserveAspectRatio="xMidYMid" width="31.812" height="26" viewBox="0 0 31.812 26">
    <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413 2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,-0.000 L20.877,-0.000 Z"/>
</svg>
         </div>
        </div>
      </div>


      <div className='bg-white '>

        <div className=' flex flex-row items-center justify-between container mx-auto bg-white  px-3 lg:px-20 text-black py-3 '>
          <div className='bg-white rounded-xl flex flex-row items-center justify-betweeen '>
              <img src="/logo.png" alt="" className='w-[70px] h-[40px] md:w-[120px] md:h-[80px]'/>
          </div>
          <div className='hidden lg:flex flex-row gap-10'>
            {
              navData.map((element,idx)=> {
                return <>
                      <Link href={element.url}>
                      <div className={pathname === element.url ? 'text-[18px] text-blue-700' : 'text-[18px] hover:text-blue-700'}>{element.name}</div>
                      </Link>
                      </>
              })
            }
          </div>

          <div className='lg:hidden' onClick={()=> setDropDown(!dropDown)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
          </div>
          {
            dropDown && <div className='lg:hidden flex flex-col px-5 gap-5 absolute left-0 top-[60px]  md:top-[70px] py-4 text-left bg-white w-full z-10'>
            {
              navData.map((element,idx)=> {

                return <Link href={element.url}>
                  <div className='hover:bg-green-800 py-1 px-3 rounded-xl hover:text-white'>{element.name}</div>
                </Link> 
              })
            }
        </div>
          }
          
          <div className = "hidden lg:flex py-3 px-4 text-center shadow-2xl hover:bg-[#133d66] border border-[#39b54a] text-[#39b54a] hover:text-white" onClick ={handleModal}>Book Appointment</div>
          
          </div>

          </div>
    </div>
}
export default Navbar;