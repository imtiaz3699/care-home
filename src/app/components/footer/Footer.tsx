import React from 'react'

function Footer() {
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
  return (
    <>
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

export default Footer
