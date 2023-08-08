import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import CookieConsent from './components/cookie-consent/CookieConsent'

export default function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CookieConsent/>
    </>
  )
}
