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

function HeroSection() {
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
      img:'/dementia.webp',
      name:'Dementia Care',
    },
    {
      img:'/nursing-care.webp',
      name:'Nursing Care',
    },
    {
      img:'physical-disabilities.webp',
      name:'Physical Disabilities',
    },
    {
      img:'respite-care.webp',
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
    review:'A haven of warmth and care. The staff at this old age home go above and beyond to make each resident feel cherished and valued. I m so grateful for the compassionate environment they provide'
  },
  {
    name:'George Anderson',
    review:'A true blessing for our seniors. The facilities are top-notch, and the organized activities keep everyone engaged and lively. This old age home sets a shining example for others.',
  },
  {
    name:'Margaret Hughes',
    review:'Home away from home. The staffs dedication is heartwarming. They ensure that our loved ones are not just cared for, but they flourish with genuine affection.',
  },
  {
    name:'William Parker',
    review:'Exceptional support for seniors needs. This old age homes commitment to providing personalized attention is commendable. Our family is at peace knowing our relative is in such capable hands.',
  },
  {
    name:'Lily Foster',
    review:'A treasure for the elderly. The cheerful atmosphere and the constant companionship make it a joyous community. Its evident that the staff here are driven by a deep passion for caregiving.',
  },
  {
    name:'Samuel Wright',
    review:'A place of respect and honor for seniors. The old age homes commitment to maintaining residents dignity while offering top-quality care is truly inspiring.',
  },
  {
    name:' Olivia Patel',
    review:'An old age home that feels like family. The warm and friendly ambiance, along with the well-planned recreational activities, creates an environment where seniors can thrive.',
  },
  {
    name:'Henry Carter',
    review:'Exceptional attention to detail. The staffs unwavering dedication to meeting each residents unique needs sets this old age home apart. Our family is deeply appreciative.',
  },
  {
    name:'Amelia Turner',
    review:'A haven of tranquility for our loved ones. The picturesque surroundings combined with the staffs genuine care provide a safe and peaceful retreat for seniors.',
  },
  {
    name:'Charles Hughes',
    review:'A remarkable establishment. The commitment to fostering an environment of companionship and vitality is truly commendable. Our dear ones are in the best hands here.',
  },
]

  return (

<>
    <div className="w-full h-[700px] overflow-hidden">  
{/* <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative]} className="w-full h-full">
       {
        sliderImage.map((element,idx)=> {
            return <SwiperSlide className="w-full h-full" key = {idx}>

<div style={{ backgroundImage: `url(${element.img})` }} className="w-full h-full bg-cover relative">
  <div className="w-full h-full bg-black absolute opacity-50"></div>
  <div className="flex flex-col justify-center h-full ml-5 md:ml-20 px-3 text-white relative z-10">
    <p className="text-green-800 text-[30px] font-bold">Change the World</p>
    <p className="text-[25px] md:text-[75px]">{element.text}</p>
    <p className="text-[18px] md:text-[40px]">{element.text2}</p>
    <Link href ="/contact_us">
    <button className="bg-green-800 w-[175px] h-[60px] rounded-2xl font-bold text-[20px]">Contact Us</button>
    </Link>
  </div>
</div>
              
              </SwiperSlide>
        })
       } 
</Swiper> */}
<div>
  <ZoomSlider/>
</div>

</div>












{/* <div className="flex flex-col items-center justify-center bg-green-800 gap-4 sm:gap-10 py-5 md:py-20 md:px-10 md:px-0">
        <div className="flex flex-col items-center gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 42 41.9">
  <path fill="black" d="M38.5,30.25V14.15L28,6.8,17.5,14.15V20.6h-3V12.65L28,3l13.5,9.65v17.6ZM28,6.8ZM29,17h2V15H29Zm-4,0h2V15H25Zm4,4h2V19H29Zm-4,0h2V19H25Zm3.3,23.9L12.75,40.45V43.3H2V23.6H17.45L30.2,28.4a5.267,5.267,0,0,1,2.275,1.625A4.958,4.958,0,0,1,33.4,33.25h5.7a4.589,4.589,0,0,1,3.5,1.5A5.7,5.7,0,0,1,44,38.8v1.3ZM5,40.3H9.7V26.6H5Zm23.1,1.5,12.8-3.9a2.619,2.619,0,0,0-.75-1.3,1.661,1.661,0,0,0-1.05-.35H28.75a17.454,17.454,0,0,1-5.2-.75L19.5,34.25l1.1-2.9,3.65,1.2a13.807,13.807,0,0,0,2.375.55,30.135,30.135,0,0,0,3.575.15,3.2,3.2,0,0,0-.225-1.175,1.452,1.452,0,0,0-.775-.825L16.95,26.6h-4.2V37.3ZM9.7,33.45ZM30.2,33.25ZM9.7,33.45ZM12.75,33.45Z" transform="translate(-2 -3)"></path>
</svg>
          <p className="text-[36px] font-bold">Welcome to SBH Healthcare</p>
        </div>
        <div className="text-[20px] max-w-[1400px] sm:text-[25px] lg:text-[30px] px-3 text-black text-center ">Welcome to SBH Health Care,Where we understand that there are many care homes and nursing homes,
        and to choose the right one is a big decision that can often be stressful.
        Our team is here to alleviate as much of that stress as possible, and you can rest assured that we will do 
        whatever we can to assist you and your loved ones with settling into your new home. We warmly welcome prospective 
        residents and their loved ones to come and take a tour of our care.</div>
    </div> */}



    {/* <div className="bg-yellow-100 text-black px-5 md:px-20 flex justify-center py-20 flex flex-col items-center text-center ">
<div className="text-[16px] lg:text-[25px] max-w-[1000px] flex flex-col items-center justify-center"><span className="text-[25px] md:text-[35px] lg:text-[50px] font-bold">Who we are</span> 
   </div>
   <div className="max-w-[1000px] text-[30px]">
   Founded with a vision to redefine aging, SBH Health Care has been a trusted refuge for seniors seeking a safe and welcoming environment. Our legacy of care spans years, during which we have nurtured countless lives, forming lasting bonds and enriching the lives of each resident who becomes a part of our extended family.
   </div>
</div> */}



<div className="flex flex-col items-center justify-center py-20 bg-green-800">
        <div className="text-[20px] md:text-[36px] font-bold  text-center text-black">Our Care Services</div>
        <div className="text-[16px] md:text-[30px] px-3 md:px-0 md:w-[50%] text-center ">"We collaborate intimately with our residents, their cherished ones, and every invested party to ensure that we provide unwavering assistance for individuals to reside with us as integral members of our extended kinship."</div>
        <div className="px-3 grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-3 md:gap-20 py-10">
           {
            ourServices.map((element,idx)=> {
              return <div  className=" flex flex-col items-center gap-5" key = {idx}>
                <img src={element.img} alt="" className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"/>
                <div className="text-green-500 text-center text-[16px]">{element.name}</div>
              </div>
            })
            
           } 
        </div>
       </div>

    
    <div className="flex flex-col items-center pb-10 gap-5 lg:gap-10">
      <h1 className="text-[25px] sm:text-[35px] text-center font-bold text-blue-800 mt-10">Why Choose us</h1>
      <div className="flex flex-col-reverse lg:flex-row px-3 sm:px-0 items-center gap-2 lg:gap-10">
        <div className="w-full h-full sm:w-[500px] sm:h-[400px] drop-shadow-2xl border-4 border-blue-800 rounded-xl shadow-slate-800">
          <img src="/careworkout.webp" alt="" className="w-full h-full   rounded-lg"/>
        </div>
        <div className="flex flex-col w-full sm:w-[500px] lg:w-[450px] gap-2">
          <h1 className="font-bold text-[20px] gap-3 text-blue-800">Personalized Care:</h1>
          <p>Within our establishment, we hold a steadfast belief in the distinct and individual needs of each resident.
            To address this, our approach involves meticulously tailored care plans that prioritize personal preferences and requirements.
            Our dedicated team is committed to ensuring that every resident receives the attentive and specialized care they merit.
            This personalized approach extends beyond medical necessities, encompassing a resident's unique hobbies, interests, and background.
            By upholding this philosophy, we create an environment where every individual is valued and their well-being is at the forefront of our care.</p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-center py-5 px-3 sm:px-0 gap-2 lg:gap-10 mt-0 lg:mt-20 bg-green-800 w-full">
      <div className="flex flex-col  w-full sm:w-[500px] lg:w-[450px] gap-3">
          <h1 className="font-bold text-[20px] text-blue-800">Engaging Activities:</h1>
          <p>
Life at SBH is a tapestry of vitality and connection. Our diverse activities, from arts to fitness and outings, keep residents engaged and joyful. These thoughtfully curated experiences foster creativity and holistic well-being. Beyond our walls, captivating outings offer a window to the world. Within our community, friendships flourish, creating a vibrant and supportive atmosphere. As the day ends, residents retire content, embodying the enriching power of genuine human connections.</p>
        </div>
        <div className="w-full h-full sm:w-[500px] sm:h-[400px] drop-shadow-2xl border-4 border-blue-800 rounded-xl shadow-slate-800">
          <img src="/engage.jpg" alt="" className="w-full h-full bg-cover rounded-lg"/>
        </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row px-3 sm:px-0 items-center gap-2 lg:gap-10 mt-0 lg:mt-20">
        <div className="w-full h-full sm:w-[500px] sm:h-[400px] drop-shadow-2xl border-4 border-blue-800 rounded-xl shadow-slate-800">
          <img src="/dining.jpg" alt="" className="w-full h-full   rounded-lg"/>
        </div>
        <div className="flex flex-col w-full sm:w-[500px] lg:w-[450px] gap-2">
          <h1 className="font-bold text-[20px] gap-3 text-blue-800">Delicious Dining:</h1>
          <p>At our esteemed old age home, we recognize the pivotal role of nourishment in well-being. Accomplished chefs curate nutritious and delectable meals, tailored to diverse dietary needs, ensuring that each dining moment is a source of joy. Our culinary experts blend health and flavor seamlessly, crafting a variety of dishes that cater to individual preferences. Beyond sustenance, we view dining as a cherished experience, fostering both communal connections and personal comfort. With a commitment to excellence, we prioritize the residents' dietary requirements while elevating their culinary journey.</p>
        </div>
      </div>


      
      <div className="flex flex-col lg:flex-row items-center px-3 sm:px-0 gap-2 lg:gap-10 mt-0 lg:mt-20 py-5 bg-green-800 w-full justify-center">
      <div className="flex flex-col w-full sm:w-[500px] lg:w-[450px] gap-3">
          <h1 className="font-bold text-[20px] text-blue-800">Safe and Secure:</h1>
          <p>
          At the heart of our commitment lies the utmost importance placed on the safety and security of our residents. Our modern facility boasts a range of cutting-edge safety features, seamlessly integrated to provide a secure living space. Complemented by our dedicated and compassionate staff, who are accessible round-the-clock, we ensure a serene and protected environment that promotes a high quality of life. From advanced surveillance systems to secure access protocols, every detail is meticulously designed to safeguard our residents' well-being.</p>
        </div>
        <div className="w-full h-full sm:w-[500px] sm:h-[400px] drop-shadow-2xl border-4 border-blue-800 rounded-xl shadow-slate-800">
          <img src="/elderly-patients.jpg" alt="" className="w-full h-full bg-cover rounded-lg"/>
        </div>
      </div>
      </div>


    
    

       

<div className="flex flex-col items-center py-5 px-3 md:py-10 md:px-20">
  <div className="flex flex-col items-center gap-3 md:gap-3 justify-center  text-center">
        <div className="font-bold text-green-800 text-[20px] md:text-[30px] ">Book an Appointment</div>
        <div className="font-semibold text-green-800 text-[18px] md:text-[25]">We would love to hear from if you you're a resident or a relative.</div>
        <div className="md:w-[700px] text-gray-500 text-[16px] md:text-[20px]">''Our transparent and approachable leadership group encourages staff, residents, and family members to openly express any apprehensions or suggestions. To directly reach our central administration, kindly utilize the provided form. Regarding internal inquiries about our care home, please get in touch with the specific facility. <br />Or You can directly call us on the numbers below</div>
        </div>

        <div className="flex flex-row items-center gap-5 mt-5">
        <div className="bg-green-800 p-2 py-3  px-4 rounded-xl font-bold text-[15px]">Samina Bhatti :<span>0791-678-9486</span></div>
        <div className="bg-green-800 py-3  px-4 rounded-xl font-bold text-[15px]">Yusuf Ahmed :<span>0748-211-2058</span></div>
        </div>
</div>
<div className="flex flex-col items-center xl:flex-row justify-center gap-10 xl:gap-20  bg-green-800 pb-5 xl:pb-0">
  <div className="w-full xl:w-[60%] xl:h-[500px]">
<img src="/design.jpg" alt=""  className="bg-cover w-full h-full"/>
</div>
<div className="flex flex-col items-center justify-center w-full xl:w-[40%] px-3 xl:px-0 xl:pr-10 text-center xl:text-left">
  <h1 className="font-bold text-white text-[25px] xl:text-[30px]">Our Philosophy</h1>
  <div className="text-white text-[18px]">At our care home, families can trust that their loved ones are in a safe,
   nurturing, and homely environment. We prioritize dignity, respect, 
   and happiness for each resident, valuing their unique identities. 
   Our dedicated team fosters a warm and supportive atmosphere, encouraging independence and engagement in fulfilling activities.
   Open communication with staff, residents, and families is vital to us,
   as we continuously improve our services. Safety is paramount, and our well-trained staff ensures a secure environment.
   Regular social events strengthen our close-knit community.
   Our care home is a place of comfort, love, and joy, where residents thrive and families are always welcomed.</div>
</div>
</div>





<div className="flex flex-col items-center justify-center py-10">
  <div className="flex flex-col items-center gap-2 pb-5">
    <div className="font-bold text-green-500 text-[20px] md:text-[30px] text-center">What Residents and Families Says</div>
    <div className=" text-[18px] md:text-[20px] text-center">Here are some of our latest reviews from CareHome.co.uk,<br /> the leading care home review web site.</div>
  </div>
      <div className="flex flex-row gap-20 items-center">
        
        <Swiper
          freeMode={true}
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
            spaceBetween: 30,
          },
        }}
        style = {{paddingRight:'40px',paddingLeft:'40px',paddingTop:'20px',paddingBottom:'20px'}} 
      >
              {testimonials.map((element,idx)=> {
                return <SwiperSlide style = {{margin:0}} key = {idx} className="text-white py-20 flex flex-col w-[300px] sm:w-[400px] gap-3 h-[500px] items-center justify-center text-center rounded-xl px-3 py-5  bg-green-800 ">
                      <div className="">{element.review}</div>
                      <h1 className="font-bold text-[20px] ">{element.name}</h1>
</SwiperSlide>
              })}        
        
      </Swiper>
        </div>
  



</div>
<Footer/>
    </>

  )
}

export default HeroSection
