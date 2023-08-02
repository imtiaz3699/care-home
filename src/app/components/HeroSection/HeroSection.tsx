'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function HeroSection() {
    const images =['/oldAge.jpg','/oldAge2.jpg','/oldAge3.jpg'];
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



  return (

<>
    <div className="w-full h-[600px]">
        
<Swiper className="mySwiper w-full h-full relative">
       {
        images.map((element,idx)=> {
            return <SwiperSlide className="w-full h-full"><img src={element} alt="" className="object-contained w-full h-full"/></SwiperSlide>
        })
       } 
</Swiper>
    <div className="flex flex-row justify-between w-full px-12 bg-white">
    <div className="font-bold text-[35px]">Quality Care Your Loved Ones Deserve</div>
    <div className="bg-green-500  py-5 px-5 rounded-t-lg">Call Us Today: <span>01162251632</span></div>
    </div>        
      
    </div>

       <div className="flex flex-col items-center py-5 bg-yellow-100">
        <div className="flex flex-col items-center border-b pb-5 border-gray-500">
        <h2 className="font-semi-bold text-green-500 text-[25px]">Find a Mauricare Home</h2>
        <h2>Established over a decade ago, Mauricare is a group of Residential and Nursing Homes offering compassionate and person centered care for the elderly nationwide.</h2>
        </div>
        <div className="pt-5 flex flex-row items-center px-28">
        {
          houseAddress.map((element,idx)=> {
            return <div>{element.name}</div>
          })
        }  
        </div>
       </div>

       <div className="flex flex-col items-center justify-center py-5">
        <div className="text-[25px] text-green-500">Our Care Services</div>
        <div className="text-[16px] w-[50%] text-center">We work closely with our residents, their loved ones and all stakeholders to ensure that we support people to live with us as part of our extended family.</div>
        <div className="flex flex-row items-center justify-between gap-20 py-10">
           {
            ourServices.map((element,idx)=> {
              return <div  className="flex flex-col items-center gap-5">
                <img src={element.img} alt="" />
                <div className="text-green-500">{element.name}</div>
              </div>
            })
            
           } 
        </div>
       </div>
<div className="bg-green-700 py-5">
  <div className="flex flex-row items-center px-20 gap-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[25px] ">Our Homes</h1>
        <h1>Our Homes are designed to be a "home from home" in every sense, with delightful surroundings, beautifully furnished rooms, excellent food and, most importantly, a standard of care which is second to none.</h1>
      </div>

      <div className="w-full h-[200px] overflow-hidden"><img src="/house.jpg" alt="" /></div>
      </div>

      <div className="pt-5 flex flex-row items-center px-28">
        {
          houseAddress.map((element,idx)=> {
            return <div>{element.name}</div>
          })
        }  
        </div>


</div>

<div className="flex flex-col items-center py-10 px-20">
  <div className="flex flex-col items-center gap-5 justify-center  text-center">
        <div className="font-bold text-green-500 text-[20px]">Make an Inquiry</div>
        <div className="font-semibold text-green-500 text-[18px]">We would love to hear from if you you're a resident or a relative.</div>
        <div className="w-[700px] text-gray-500">Our open and friendly management team allows staff, residents and family members to share any concerns or ideas freely. To contact our head office directly please use the form below. For internal care home enquiries please contact the individual home.</div>
        </div>
</div>

<div className="flex flex-row items-center justify-center px-10 py-10 gap-20"> 
<div className="flex flex-col items-center justify-center w-[500px] border border-green-500 gap-5 px-10 py-10">
<div className="flex flex-col gap-3 w-full"> 
  <label htmlFor="">Your Name</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">Your Email Address</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">Telephone Number (Optional)</label>
  <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/>
</div>
<div className="flex flex-col gap-3 w-full">
<label htmlFor="">What would you like to discuss?</label>
  {/* <input type="text" className="w-full h-[30px] rounded-lg outline-none border border-gray-500 "/> */}
  <textarea name="" id="" cols="30" rows="10" className="outline-none border border-gray-500"></textarea>
</div>
<button className="bg-green-800 px-3 py-3 rounded-xl text-white">Send Inquiry</button>
</div>

<div className="p-2 gap-5 flex flex-col gap-5">
  <div className="border border-gray-500 w-[300px] h-[300px]"></div>
  <div className="border border-gray-500 w-[300px] h-[300px]"></div>
</div>


</div>

<div className="flex flex-row justify-center items-center gap-20  bg-pink-100">
<img src="/design.jpg" alt="" className="w-[60%] h-[300px]"/>
<div className="flex flex-col items-center w-[40%] pr-10">
  <h1 className="font-bold text-green-500 text-[25px]">Our Philosophy</h1>
  <div className="text-gray-500">Our residents' families can rest assured that their loved ones are in a safe, caring and homely environment and that their dignity, respect, happiness and identities are in safe hands.</div>
</div>

</div>

<div className="flex flex-col items-center justify-center">
  <div className="flex flex-col items-center gap-2 py-10">
    <div className="font-bold text-green-500">What Residents and Families Says</div>
    <div>Here are some of our latest reviews from CareHome.co.uk, the leading care home review web site.</div>
  </div>

  <div className="border border-gray-300 w-[500px] px-5 py-5">
        <h1>
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" width="312.25px" height="48.354px" viewBox="0 0 312.25 48.354" enable-background="new 0 0 312.25 48.354" >
<g>
	<g enable-background="new    ">
		<path fill="#214497" d="M59.815,34.135c-0.859,0.404-2.543,0.825-4.56,0.825c-5.02,0-8.29-3.233-8.29-8.218    c0-4.819,3.304-8.547,8.949-8.547c1.491,0,3.007,0.329,3.933,0.721l-0.726,3.068c-0.664-0.329-1.621-0.641-3.073-0.641    c-3.103,0-4.954,2.287-4.922,5.232c0,3.296,2.15,5.189,4.922,5.189c1.389,0,2.41-0.309,3.203-0.64L59.815,34.135z"/>
		<path fill="#214497" d="M75.305,30.778c0,1.44,0.066,2.862,0.263,3.852h-3.666l-0.298-1.771h-0.098    C70.547,34.114,68.864,35,66.748,35c-3.237,0-5.051-2.348-5.051-4.798c0-4.017,3.597-6.097,9.546-6.075v-0.269    c0-1.05-0.431-2.801-3.272-2.801c-1.586,0-3.235,0.494-4.326,1.193l-0.793-2.634c1.187-0.743,3.271-1.423,5.816-1.423    c5.15,0,6.638,3.254,6.638,6.796L75.305,30.778L75.305,30.778z M71.339,26.783c-2.875-0.041-5.615,0.556-5.615,2.99    c0,1.603,1.023,2.323,2.314,2.323c1.649,0,2.805-1.07,3.204-2.225c0.097-0.289,0.097-0.597,0.097-0.887V26.783L71.339,26.783z"/>
		<path fill="#214497" d="M79.598,23.735c0-2.184-0.034-3.77-0.131-5.189h3.501l0.165,3.048h0.097    c0.793-2.244,2.676-3.397,4.428-3.397c0.397,0,0.628,0.021,0.957,0.083v3.81c-0.362-0.062-0.725-0.104-1.219-0.104    c-1.915,0-3.272,1.216-3.635,3.069c-0.068,0.369-0.101,0.803-0.101,1.216v8.359h-4.063L79.598,23.735L79.598,23.735z"/>
		<path fill="#214497" d="M93.933,27.73c0.098,2.902,2.348,4.159,4.954,4.159c1.883,0,3.203-0.288,4.459-0.722l0.596,2.781    c-1.389,0.589-3.305,1.01-5.614,1.01c-5.219,0-8.294-3.192-8.294-8.115c0-4.469,2.708-8.648,7.863-8.648    c5.221,0,6.94,4.284,6.94,7.825c0,0.763-0.07,1.34-0.134,1.71H93.933L93.933,27.73z M101.001,24.889    c0.037-1.482-0.628-3.935-3.337-3.935c-2.507,0-3.566,2.286-3.731,3.935H101.001z"/>
		<path fill="#214497" d="M108.336,11.172h2.904v10.01h0.065c0.46-0.823,1.191-1.563,2.081-2.08    c0.861-0.494,1.882-0.781,2.972-0.781c2.151,0,5.583,1.317,5.583,6.796v9.515h-2.906v-9.185c0-2.575-0.958-4.717-3.697-4.717    c-1.884,0-3.336,1.317-3.902,2.883c-0.165,0.413-0.195,0.845-0.195,1.38v9.639h-2.904L108.336,11.172L108.336,11.172z"/>
		<path fill="#214497" d="M141.13,26.515c0,5.91-4.121,8.484-7.959,8.484c-4.294,0-7.661-3.171-7.661-8.217    c0-5.334,3.532-8.464,7.929-8.464C138.021,18.319,141.13,21.655,141.13,26.515z M128.484,26.681c0,3.501,1.979,6.136,4.82,6.136    c2.775,0,4.859-2.614,4.859-6.198c0-2.719-1.358-6.116-4.797-6.116C129.968,20.502,128.484,23.674,128.484,26.681z"/>
		<path fill="#214497" d="M144.793,22.974c0-1.688-0.062-3.008-0.123-4.325h2.532l0.145,2.616h0.083    c0.905-1.524,2.389-2.945,5.065-2.945c2.142,0,3.789,1.317,4.489,3.212h0.063c0.494-0.927,1.152-1.585,1.813-2.101    c0.969-0.721,1.998-1.111,3.502-1.111c2.16,0,5.291,1.379,5.291,6.938v9.371h-2.842v-9.02c0-3.09-1.152-4.924-3.459-4.924    c-1.689,0-2.944,1.235-3.48,2.615c-0.124,0.434-0.227,0.928-0.227,1.463v9.864h-2.843v-9.575c0-2.533-1.111-4.367-3.336-4.367    c-1.793,0-3.131,1.464-3.604,2.925c-0.165,0.392-0.228,0.907-0.228,1.422v9.597h-2.842L144.793,22.974L144.793,22.974z"/>
		<path fill="#214497" d="M173.952,27.175c0.073,3.934,2.553,5.541,5.497,5.541c2.08,0,3.357-0.353,4.427-0.825l0.517,2.081    c-1.018,0.473-2.801,1.028-5.354,1.028c-4.922,0-7.848-3.273-7.848-8.094c0-4.818,2.834-8.587,7.496-8.587    c5.252,0,6.604,4.551,6.604,7.496c0,0.597-0.034,1.028-0.096,1.358L173.952,27.175L173.952,27.175z M182.479,25.095    c0.041-1.813-0.763-4.695-4.026-4.695c-2.976,0-4.231,2.677-4.459,4.695H182.479z"/>
		<path fill="#214497" d="M187.791,32.92c0-1.193,0.834-2.08,1.996-2.08c1.152,0,1.938,0.865,1.938,2.08    c0,1.194-0.783,2.08-2.008,2.08C188.592,35,187.791,34.114,187.791,32.92z"/>
		<path fill="#214497" d="M206.727,34.073c-0.758,0.37-2.443,0.927-4.594,0.927c-4.83,0-7.962-3.273-7.962-8.154    c0-4.923,3.371-8.525,8.588-8.525c1.716,0,3.233,0.433,4.035,0.865l-0.662,2.202c-0.694-0.371-1.786-0.763-3.373-0.763    c-3.665,0-5.643,2.739-5.643,6.057c0,3.687,2.368,5.972,5.54,5.972c1.658,0,2.74-0.391,3.574-0.763L206.727,34.073z"/>
		<path fill="#214497" d="M224.396,26.515c0,5.91-4.135,8.484-7.965,8.484c-4.293,0-7.662-3.171-7.662-8.217    c0-5.334,3.535-8.464,7.931-8.464C221.292,18.319,224.396,21.655,224.396,26.515z M211.738,26.681c0,3.501,1.988,6.136,4.83,6.136    c2.769,0,4.849-2.614,4.849-6.198c0-2.719-1.347-6.116-4.78-6.116C213.232,20.502,211.738,23.674,211.738,26.681z"/>
		<path fill="#214497" d="M226.575,32.92c0-1.193,0.827-2.08,1.983-2.08c1.154,0,1.947,0.865,1.947,2.08    c0,1.194-0.793,2.08-2.015,2.08C227.365,35,226.575,34.114,226.575,32.92z"/>
		<path fill="#214497" d="M247.482,30.242c0,1.688,0.035,3.132,0.127,4.388h-2.575l-0.164-2.596h-0.063    c-0.726,1.277-2.449,2.966-5.291,2.966c-2.506,0-5.512-1.422-5.512-7.002v-9.35h2.91v8.813c0,3.048,0.952,5.128,3.564,5.128    c1.951,0,3.299-1.358,3.832-2.678c0.166-0.392,0.267-0.927,0.267-1.481v-9.782h2.905V30.242L247.482,30.242z"/>
		<path fill="#214497" d="M255.18,25.979h0.064c0.395-0.557,0.924-1.256,1.383-1.813l4.729-5.52h3.467l-6.143,6.568l7.037,9.412    h-3.57l-5.481-7.661l-1.483,1.647v6.014h-2.877V11.172h2.877v14.808H255.18z"/>
	</g>
	<g>
		<path fill="#14509B" stroke="#FFFFFF" stroke-width="2" d="M23.25,7.064c3.211,5.72,1.172,12.963-4.543,16.165    c-5.717,3.206-12.959,1.175-16.165-4.543C-0.668,12.97,1.371,5.73,7.088,2.524C12.804-0.69,20.046,1.346,23.25,7.064z"/>
		<path fill="#229BBD" stroke="#FFFFFF" stroke-width="2" d="M39.384,15.958c3.354,5.983,1.225,13.543-4.757,16.909    c-5.971,3.351-13.541,1.219-16.896-4.764c-3.353-5.973-1.229-13.539,4.75-16.897C28.457,7.857,36.023,9.982,39.384,15.958z"/>
		<path fill="#2A3988" stroke="#FFFFFF" stroke-width="2" d="M13.175,16.937c6.559,0,11.875,5.312,11.875,11.871    c0,6.549-5.316,11.882-11.875,11.882C6.619,40.689,1.3,35.356,1.3,28.808C1.3,22.249,6.619,16.937,13.175,16.937z"/>
	</g>
</g>
</svg>


        </h1>
        <div className="border border-b-gray-500 pb-2">the leading care home review website</div>
  </div>
  <div className="flex flex-col items-center">

  </div>



</div>


<div className="footer flex flex-row  bg-green-800 justify-center gap-20 py-10">
<div>
  <img src="/logo.png" alt="" className="w-[200px] h-[200px]"/>
  <div className="text-white">Mauricare Homes</div>
  <div className="text-white">362 London Road
Leicester
LE2 2PU</div>
</div>
<div>
<h1 className="text-white font-bold text-[35px]">Mauricare</h1>
<div className="flex flex-col gap-1">
        {
          footer1.map((element,idx)=> {
            return <div className="hover:underline cursor-pointer text-white">{element.name}</div>
          })
        }
</div>
</div>
<div className="flex flex-col gap-1">
  <h1 className="text-white font-bold text-[35px]">Our Homes</h1>
  {
    houseAddress.map((element,idx)=> {
      return <div className="hover:underline cursor-pointer text-white">{element.name}</div>
    })
  }
</div>
<div className="flex flex-col">
  <div className="text-white font-bold text-[35px]">Contact Us</div>
  <div className="text-white">Tel:01162251632</div>
  <div className="text-white">Email:contact@mauricare.com</div>
  <div className="mt-2">
  <div className="text-white font-normal text-[35px]">Follow Us</div>
  <div className="flex flex-row">
    <img src="/facebook.png" alt="" />
    <img src="/twitter.png" alt="" />
    <img src="/linked.png" alt="" />
  </div>
  </div>
</div>


</div>

    </>

  )
}

export default HeroSection
