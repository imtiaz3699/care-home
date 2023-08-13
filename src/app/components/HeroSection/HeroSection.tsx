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

interface HeroSectionProps {
  showModal: boolean;
  handleModal: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({ showModal, handleModal }) => {
  // const [showModal ,setShowModal] = React.useState(false);
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
      img:'/respite-care.png',
      name:'Respite Care',
    },
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
      img:'/respite-care.png',
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
    name:'Amelia',
    review:'A true blessing for our seniors. The facilities are top-notch, and the organized activities keep everyone engaged and lively. This old age home sets a shining example for others.',
    img:'/face1.jpg'
  },
  {
    name:'Margaret Hughes',
    review:'Home away from home. The staffs dedication is heartwarming. They ensure that our loved ones are not just cared for, but they flourish with genuine affection.',
    img:'/face2.jpg'
  },
  {
    name:'Freya Parker',
    review:'Exceptional support for seniors needs. This old age homes commitment to providing personalized attention is commendable. Our family is at peace knowing our relative is in such capable hands.',
    img:'/face3.jpg'
  },
  {
    name:'Joseph Foster',
    review:'A treasure for the elderly. The cheerful atmosphere and the constant companionship make it a joyous community. Its evident that the staff here are driven by a deep passion for caregiving.',
    img:'/face4.jpg'
  },
  {
    name:'Samuel Wright',
    review:'A place of respect and honor for seniors. The old age homes commitment to maintaining residents dignity while offering top-quality care is truly inspiring.',
    img:'/face5.jpg'
  },
  {
    name:'Alexander Patel',
    review:'An old age home that feels like family. The warm and friendly ambiance, along with the well-planned recreational activities, creates an environment where seniors can thrive.',
    img:'/face6.jpg'
  },
  {
    name:'Henry Carter',
    review:'Exceptional attention to detail. The staffs unwavering dedication to meeting each residents unique needs sets this old age home apart.',
    img:'/face7.jpg'
  },
  {
    name:'Benjamin Turner',
    review:'A haven of tranquility for our loved ones. ',
    img:'/face8.jpg'
  },
  {
    name:'Charles Hughes',
    review:'A remarkable establishment. The commitment to fostering an environment of companionship and vitality is truly commendable.',
    img:'/face9.jpg'
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
const ourCare = [
  {
      img:'/ourCare1.webp',
      name:'Our Care',
      detail:'Above all, our fundamental purpose revolves around not merely sustaining, but elevating the quality of life for our inhabitants. We firmly hold the view that advancing in years should be a jubilant commemoration of accumulated wisdom and experiences'
  },
  {
      img:'/ourCare2.webp',
      name:'Our Homes',
      detail:'Our living spaces are thoughtfully designed to create a genuine sense of comforting familiarity, featuring delightful surroundings, beautifully decorated rooms, outstanding meals, and most importantly, an unmatched level of care.',
  },
  {
      img:'/our-values.jpg',
      name:'Our Values',
      detail:
      'The families of our residents can find solace in the knowledge that their cherished ones are ensconced within a secure, compassionate, and inviting milieu. Their pride, esteem, well-being, and individualities are entrusted to capable guardianship.' 
  }
]

  return (

<div className="w-full h-full relative">
    <div className="w-full h-[700px]">

  <ZoomSlider/>
</div>

    <div className=" text-black px-5 md:px-20 py-20 flex flex-col items-center justify-center text-center  ">
    <h1 className="text-[25px] md:text-[35px] lg:text-[50px] font-normal">Welcome to SBH</h1>
    <p className="text-[16px] md:text-[20px] px-3 md:px-0  text-center">At <strong className = "text-blue-900">SBH</strong> , our mission is to provide compassionate care and support to our beloved seniors. In the 'How Can We Help' section, we offer a range of services tailored to meet the unique needs of each resident. From personalized care plans and recreational activities to medical assistance and emotional companionship, we're dedicated to enhancing the quality of life for our cherished residents.</p>
    <div className='py-10 container- mx-auto flex flex-col md:flex-row px-3  justify-center gap-20'>
    {
        ourCare.map((element,idx)=> {
            return <div className='flex flex-col items-center gap-4'>
                <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full drop-shadow-2xl shadow-2xl overflow-hidden'>
            <img src={element.img} alt="" className='box-shadow-xl w-full h-full'/>
            </div>
            <h1 className='text-gray-500  font-bold text-[30px]'>{element.name}</h1>
            <div className='max-w-[300px] text-gray-500 text-justify'>{element.detail}</div>
        </div>
        })
    }        
      </div>
    </div>


      <div className="flex flex-col items-center justify-center px-5 md:px-20 py-20 bg-gray-100">
        <h1 className="text-[25px] md:text-[35px] lg:text-[50px] font-normal">Our Care Services</h1>
        <p className="text-[16px] md:text-[20px] px-3 md:px-0  text-center">"We collaborate intimately with our residents, their cherished ones, and every invested party to ensure that we provide unwavering assistance for individuals to reside with us as integral members of our extended kinship."</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-[120px]  mt-10">
           {
            ourServices.map((element,idx)=> {
              return <> <div  className=" flex flex-col items-center justify-center gap-5 bg-blue-600 backdrop-filter backdrop-blur-md shadow-2xl px-2 w-[250px] h-[225px] rounded-2xl backdrop-saturate-150" key = {idx}>
                <img src={element.img} alt="" className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"/>
                <div className="font-semibold text-center text-[16px] text-white">{element.name}</div>
              </div>
              
              </>
            })
            
           } 
            
        </div>
       </div>
       


    <div className="flex flex-col  lg:flex-row items-center justify-between py-20 md:px-20 px-3 ">


      <div className="flex flex-col items-center lg:items-start max-w-[800px] px-3 text-center lg:text-left">
        <h1 className="font-semibold text-[25px]">WHY CHOOSE US</h1>
        <br />
        <p>"Discover a higher standard of care with us. Our experienced team is dedicated to ensuring your loved one's comfort and well-being every day.
         <br /><br /> At SBH Healthcare, we blend personalized support with a welcoming community, creating a place they can truly call home. Trust us to provide the exceptional care your family deserves."</p>
        <button className="bg-[#39b54a] py-2 px-3 text-white mt-5">Getting Started</button>
      </div>



      
        <div className="flex flex-col w-full md:w-[400px] items-center gap-5">
          <div className="px-2 py-3 border-2 border-[#39b54a] w-full md:w-[400px]">1. Convenient Speciality Care</div>
          <div className="px-2 py-3 border-2 border-[#39b54a] w-full md:w-[400px]">2. Attention to Quality of Life</div>
          <div className="px-2 py-3 border-2 border-[#39b54a] w-full md:w-[400px]">3. Medical Health Care</div>
      </div>



      </div>





        <div className="flex flex-col items-center py-5 px-3 text-white md:py-10 md:px-20 bg-[#218e9e]" style ={{backgroundImage: "linear-gradient(to left, #051f46, #00256d, #002793, #0024b8, #1410da)"}}>
        <div className="flex flex-col items-center gap-3 justify-center text-center">
        <h1 className="text-[25px] md:text-[35px] lg:text-[50px] font-normal">Book an Appointment</h1>
        <div className=" text-[18px] md:text-[25] mt-[-15px]">We would love to hear from if you you're a resident or a relative.</div>
        <p className="text-[16px] md:text-[20px] px-3 md:px-0  text-center">Our transparent and approachable leadership group encourages staff, residents, and family members to openly express any apprehensions or suggestions. To directly reach our central administration, kindly utilize the provided form.</p>
        </div>

        <div className="flex flex-row items-center gap-5 mt-5">
        <button onClick = {handleModal}
 className="bg-[#39b54a] hover:bg-[#306f38] px-2 py-3 text-white rounded-sm" >Book An Appointment</button>
        </div>
      </div>
             
    <Modal showModal ={showModal} handleModal ={handleModal}>
      <div className="text-black w-[700px] h-[400px] flex flex-row items-center">
        <div className="w-[50%] h-full flex flex-col justify-center pl-5 gap-5">
          <h1 className="text-[25px] font-bold ">Booking Request</h1>
          <p>If you have any urgent inquiries or need to reschedule your appointment, please contact us at Phone Number or Email Address.
</p>
          <div className="flex flex-row items-center gap-5">
              <img src="/phone.png" alt="" className="w-[50px] h-[50px]"/>
              <div>074 82112 058</div>
          </div>
          <div className="flex flex-row items-center gap-5">
              <img src="/email.png" alt="" className="w-[50px] h-[50px]"/>
              <div>contact@sbhhealthcare.com</div>
          </div>
        </div>
        <div className="w-[50%] bg-[#39b54a] h-full px-3 py-2 ">
            <div className="w-full flex flex-row justify-end cursor-pointer  " onClick={handleModal}><div className="bg-white rounded-full"><img src="/close.png" alt="" className="w-[30px] h-[30px]"/></div></div>
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




<div className="flex flex-col items-center justify-center md:px-20 py-10">
  <div className="flex flex-col items-center gap-2 pb-5">
    <h1 className="text-[25px] md:text-[35px] lg:text-[50px] font-normal text-center">What Residents and Families Says</h1>
  </div>

  <Swiper freeMode={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        className="mySwiper w-[300px] sm:w-[400px]  md:w-[700px]  lg:w-full h-[300px] px-5 gap-10"
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1499:{
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}>
{
  testimonials.map((element,idx)=> {
    return <SwiperSlide>
      <div className="  h-[500px] flex flex-col items-center">
        <div className="bg-blue-900 h-[200px] px-2 py-2 overflow-hidden flex flex-col items-center text-white">
        <h1 className="font-bold text-[18px]">{element.name}</h1>
            <div className="mt-3 text-[14px] ">{element.review}</div>
        </div>
        <img src={element.img} alt="" className="w-[70px] h-[70px] mt-5 rounded-full"/>
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
