
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
    const dropDownData = [
        {
            name:'Ashby Lodge, Wakefield',
            url:'',
        },
        {
            name:'Ashfield House, Coventry',
            url:'',
        },
        {
            name:'As Care, Leicester',
            url:'',
        },
        {
            name:'Ashiew House, Stoke-on-Trent',
            url:'',
        },
        {
            name:'Old Vicarage, Workshop',
            url:'',
        },
        {
            name:'Ashton Court, Rotherham',
            url:'',
        },
        {
            name:'Aston Manor, Dewsbury',
            url:'',
        },
        {
            name:'Ashford House, Leicestershire',
            url:'',
        },
        {
            name:'London Road Specialist Nursing Home, Leicester',
            url:'',
        },



    ]
    
    return <div className='flex flex-row items-center justify-between bg-green-800 text-white w-full px-10 py-2'>
        <div className="bg-white rounded-xl flex flex-row items-center">'
    <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    /></div>
        <div className="hidden md:flex flex-row items-center gap-5  ">
        {
      navData.map((product,idx) =>  {
        return (        
         <Link href={product.url}> <div className="font-bold text-[18px] flex flex-row items-center gap-2 cursor-pointer hover:text-blue-500 transition delay-100 duration-300 ease-in-out " onClick={idx === 1 ? ()=> setDropDown(!dropDown) : ()=> setDropDown(false)}>
            {product.name} {
                product.name === 'Our Homes' && idx === 1 &&
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
            }    
          </div>       
          </Link>
        )
        })     
      }
      
        </div>

    </div>
}
