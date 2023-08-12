'use client'
import React , {useState} from 'react';
import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import CookieConsent from './components/cookie-consent/CookieConsent'

export default function Home() {
  const [showModal,setShowModal] = useState<boolean>(false);
  const handleModal = () => {
    setShowModal(!showModal)
  };
  return (
    <>
        <Navbar showModal={showModal} handleModal = {handleModal}/>
        <HeroSection showModal={showModal} handleModal = {handleModal}/>
        <CookieConsent/>
    </>
  )
}
