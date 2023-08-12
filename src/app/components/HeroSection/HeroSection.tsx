'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { EffectCreative,Autoplay,EffectFade,FreeMode,Pagination,Navigation } from 'swiper/modules';
import { test } from "node:test";
import Footer from "../footer/Footer";
import CookieConsent from "../cookie-consent/CookieConsent";
import Link from "next/link";
import ZoomSlider from "../ZoomSlider/ZoomSlider";
import Modal from "../Modal/Modal";

function HeroSection() {
  const [showModal ,setShowModal] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const images =['/oldAge.jpg','/oldAge2.jpg','/oldAge3.jpg'];
    const sliderImage = [
       
      {
        img:'/hero1.jpg',
        text:'Celebrating Lifes Journey',
        text2:'Nurturing Seniors with Love and Respect',
      },
      {
        img:'/hero2.jpg',
        text:'Celebrating Lifes Journey',
        text2:'Nurturing Seniors with Love and Respect',
      },
      {
        img:'/hero3.jpg',
        text:'Celebrating Lifes Journey',
        text2:'Nurturing Seniors with Love and Respect',
      },
      {
        img:'/hero4.jpg',
        text:'Celebrating Lifes Journey',
        text2:'Nurturing Seniors with Love and Respect',
      },
      {
        img:'/hero5.jpg',
        text:'Celebrating Lifes Journey',
        text2:'Nurturing Seniors with Love and Respect',
      },
    ]


  const houseAddress = [
    {
      name:'Ashby Lodge wakefield',
      url:'',
    },
    {
      name:'Ashfield House, Conventry',
      url:'',
    },
    {
      name:'As Care Leicester',
      url:'',
    },
    {
      name:'Ashview House, Stoke-on-Trent',
      url:'',
    },
    {
      name:'Old Vicarage Workshop',
      url:'',
    },
    {
      name:'Ashton Court Rotherham',
      url:'',
    },
    {
      name:'Aston Manor Dewsbury',
      url:'',
    },
    {
      name:'Ashford House Liecestershire',
      url:'',
    },
    {
      name:'London Road Specialist Nursing Home,Leicester',
      url:'',
    },
    
  ]
  const ourServices = [
    {
      img:'/mental-health.png',
      name:'Dementia Care',
    },
    {
      img:'/nursing.png',
      name:'Nursing Care',
    },
    {
      img:'wheelchair.png',
      name:'Physical Disabilities',
    },
    {
      img:'care.png',
      name:'Respite Care',
    },
  ]
const footer1 = [
  {
    name:'About Us',
    url:'',
  },
  {
    name:'Our Philosophy',
    url:'',
  },
  {
    name:'History',
    url:'',
  },
  {
    name:'Testimonials',
    url:'',
  },
]


const testimonials = [
  {
    name:'Emily Truner',
    review:'A haven of warmth and care. The staff at this old age home go above and beyond to make each resident feel cherished and valued.',
    img:'/face.jpg'
  },
  {
    name:'George Anderson',
    review:'A true blessing for our seniors. The facilities are top-notch, and the organized activities keep everyone engaged and lively. This old age home sets a shining example for others.',
    img:'/face.jpg'
  },
  {
    name:'Margaret Hughes',
    review:'Home away from home. The staffs dedication is heartwarming. They ensure that our loved ones are not just cared for, but they flourish with genuine affection.',
    img:'/face.jpg'
  },
  {
    name:'William Parker',
    review:'Exceptional support for seniors needs. This old age homes commitment to providing personalized attention is commendable. Our family is at peace knowing our relative is in such capable hands.',
    img:'/face.jpg'
  },
  {
    name:'Lily Foster',
    review:'A treasure for the elderly. The cheerful atmosphere and the constant companionship make it a joyous community. Its evident that the staff here are driven by a deep passion for caregiving.',
    img:'/face.jpg'
  },
  {
    name:'Samuel Wright',
    review:'A place of respect and honor for seniors. The old age homes commitment to maintaining residents dignity while offering top-quality care is truly inspiring.',
    img:'/face.jpg'
  },
  {
    name:' Olivia Patel',
    review:'An old age home that feels like family. The warm and friendly ambiance, along with the well-planned recreational activities, creates an environment where seniors can thrive.',
    img:'/face.jpg'
  },
  {
    name:'Henry Carter',
    review:'Exceptional attention to detail. The staffs unwavering dedication to meeting each residents unique needs sets this old age home apart.',
    img:'/face.jpg'
  },
  {
    name:'Amelia Turner',
    review:'A haven of tranquility for our loved ones. ',
    img:'/face.jpg'
  },
  {
    name:'Charles Hughes',
    review:'A remarkable establishment. The commitment to fostering an environment of companionship and vitality is truly commendable.',
    img:'/face.jpg'
  },
]

const help = [
  {
    img:'/hospital-01.png',
    name:'Medical Care',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum!',
  },
  {
    img:'/nursing-01.png',
    name:'Skilled Nursing',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum!',
  },
  {
    img:'/sneaker-01.png',
    name:'Fitness Center',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum!',
  },
  {
    img:'/support-01.png',
    name:'Daily Support',
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum!',
  },
]

  return (

<div className="w-full h-full relative">


    <div className="w-full h-[700px] overflow-hidden">


<div>
  <ZoomSlider/>
</div>

</div>

    <div className=" text-black px-5 md:px-20  py-10 flex flex-col items-center justify-center text-center ">
    <span className="text-[25px] md:text-[35px] lg:text-[50px] font-normal">How can we help</span>
    <div className = "text-[16px]">Understand  the unique needs and concerns of seniors.</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-5 mt-10">
     {
       help.map((element,idx)=> {
            return <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
              <img src={element.img} alt="" className="w-[50px] h-[50px]"/>
              <p className="text-[25px] font-semibold">{element.name}</p>
              <p>{element.text}</p>
            </div>
       }) 
     } 
    </div>
    </div>


      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <div className="text-[20px] md:text-[36px] font-bold  text-center text-black">Our Care Services</div>
        <div className="text-[16px] md:text-[25px] px-3 md:px-0 md:w-[70%] text-center ">"We collaborate intimately with our residents, their cherished ones, and every invested party to ensure that we provide unwavering assistance for individuals to reside with us as integral members of our extended kinship."</div>
        <div className="px-3 grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-3 md:gap-20 py-10">
           {
            ourServices.map((element,idx)=> {
              return <div  className=" flex flex-col items-center gap-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md shadow-2xl py-10 px-5 rounded-2xl backdrop-saturate-150" key = {idx}>
                <img src={element.img} alt="" className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"/>
                <div className="text-green-500 text-center text-[16px]">{element.name}</div>
              </div>
            })
            
           } 
        </div>
       </div>

    
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 pb-10 gap-5 lg:gap-10">
      <div className="flex flex-col items-center lg:items-start max-w-[600px] px-3 text-center lg:text-left">
        <h1 className="font-semibold text-[25px]">WHY CHOOSE US</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae neque harum  incidunt quisquam iusto saepe,
          <br /><br /> Doloremque ut optio iure ipsa sapiente aperiam corrupti, eveniet earum quod iste vel laudantium!</p>
        <button className="bg-[#39b54a] py-2 px-3 text-white mt-5">Getting Started</button>
      </div>
      <div className="flex flex-col items-center gap-5">
          <div className="px-2 py-3 border-2 border-[#39b54a] w-[250px]">1. Convenient Speciality Care</div>
          <div className="px-2 py-3 border-2 border-[#39b54a] w-[250px]">2. Attention to Quality of Life</div>
          <div className="px-2 py-3 border-2 border-[#39b54a] w-[250px]">3. Medical Health Care</div>
      </div>

      </div>


    
    

       

        <div className="flex flex-col items-center py-5 px-3 md:py-10 md:px-20">
        <div className="flex flex-col items-center gap-3 md:gap-3 justify-center  text-center">
        <div className="font-bold  text-[20px] md:text-[30px] ">Book an Appointment</div>
        <div className="font-semibold  text-[18px] md:text-[25]">We would love to hear from if you you're a resident or a relative.</div>
        <div className="max-w-[900px] text-gray-500 text-[16px] md:text-[20px]">Our transparent and approachable leadership group encourages staff, residents, and family members to openly express any apprehensions or suggestions. To directly reach our central administration, kindly utilize the provided form.</div>
        </div>

        <div className="flex flex-row items-center gap-5 mt-5">
        <button onClick = {openModal}
 className="bg-[#39b54a] hover:bg-[#306f38] px-2 py-3 text-white rounded-sm" >Book An Appointment</button>
        </div>

        
      </div>
             
    <Modal isOpen ={isModalOpen} onClose ={closeModal}>
      <div className="text-black w-[700px] h-[400px] flex flex-row items-center">
        <div className="w-[50%] h-full flex flex-col justify-center pl-5 gap-5">
          <h1 className="text-[25px] font-bold ">Booking Request</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, ducimus! Ab rem laborum provident error corporis repudiandae, aperiam nobis nihil.</p>
          <div className="flex flex-row items-center gap-5">
              <img src="/phone.png" alt="" className="w-[50px] h-[50px]"/>
              <div>074-82112-058</div>
          </div>
          <div className="flex flex-row items-center gap-5">
              <img src="/email.png" alt="" className="w-[50px] h-[50px]"/>
              <div>074-82112-058</div>
          </div>
        </div>
        <div className="w-[50%] bg-[#39b54a] h-full px-3 py-2 ">
            <div className="w-full flex flex-row justify-end cursor-pointer  " onClick={closeModal}><div className="bg-white rounded-full"><img src="/close.png" alt="" className="w-[30px] h-[30px]"/></div></div>
            <div className="px-5 flex flex-col items-center gap-3 mt-4">
              <input type="text" placeholder="Name" className="bg-white text-black py-2 px-2 w-full"/>
              <input type="text" placeholder="Email" className="bg-white text-black py-2 px-2 w-full"/>
              <input type="text" placeholder="Phone" className="bg-white text-black py-2 px-2 w-full"/>
              <textarea name="" id="" cols={4} rows={4} placeholder="Message" className="bg-white text-black py-2 px-2 w-full"></textarea>
              <button className="bg-transparent border-2 border-white px-4 py-1 text-white">Book Appointment</button>
            </div>
        </div>
      </div>
    </Modal>




<div className="flex flex-col items-center justify-center py-10">
  <div className="flex flex-col items-center gap-2 pb-5">
    <div className="font-bold text-green-500 text-[20px] md:text-[30px] text-center">What Residents and Families Says</div>
    <div className=" text-[18px] md:text-[20px] text-center">Here are some of our latest reviews from CareHome.co.uk,<br /> the leading care home review web site.</div>
  </div>

  <Swiper freeMode={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        className="mySwiper w-[300px] sm:w-[400px]  md:w-[700px]  lg:w-[900px] h-[300px] px-5 gap-10"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}>
{
  testimonials.map((element,idx)=> {
    return <SwiperSlide>
      <div className=" bg-white/30 bg-opacity-50 border-2 border-[#39b54a] backdrop-filter backdrop-blur-lg p-4  shadow-lg h-[400px] flex flex-col items-center px-3 py-3  rounded-xl">
        <h1 className="font-bold text-[20px]">{element.name}</h1>
        <div className="h-[150px] overflow-hidden mt-3">{element.review}</div>
        <img src={element.img} alt="" className="w-[70px] h-[70px] rounded-full"/>
      </div>
    </SwiperSlide>
  })
}
  </Swiper>   
    </div>
    <Footer/>
    </div>

  )
}

export default HeroSection
