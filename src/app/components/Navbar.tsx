
'use client'
import React,{useState} from 'react'
import Image from "next/image";



export default function Navbar () {
    const [dropDown,setDropDown] = useState(false);
    const navData = [
        {
            name:'Home',
            url:'',
        },
        {
            name:'Our Homes',
            url:'',
        },
        {
            name:'About Us',
            url:'',
        },
        {
            name:'Join The Team',
            url:'',
        },
        {
            name:'Contact Us',
            url:'',
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
    
    return <div className='flex flex-row items-center justify-between bg-green-500  w-full px-10 py-2'>
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
          <div className="font-bold text-[18px] flex flex-row items-center gap-2 cursor-pointer hover:text-blue-500 transition delay-100 duration-300 ease-in-out " onClick={(e)=> setDropDown(!dropDown)}>
            {product.name} {
                product.name === 'Our Homes' && idx === 1 &&
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
            }    
          </div>       
        )
        })     
      }
      {
        dropDown && <div className='bg-green-700 rounded-xl absolute right-[10%] top-[10%] px-5 py-5 flex flex-col gap-5 '>
        {
            dropDownData.map(element => {
                return <div className='cursor-pointer hover:text-blue-700'>{element.name}</div>
            })
        }
        </div>
      }
    
        </div>

    </div>
}
