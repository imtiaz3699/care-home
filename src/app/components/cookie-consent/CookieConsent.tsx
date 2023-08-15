"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    <>
    {showBanner && (
    <div className='fixed bottom-0 left-0 right-0 w-full z-10 mx-auto bg-[#39b54a] py-3'>
        <div className="text-white p-4 text-center flex flex-col items-center justify-center">
          <p className="md:w-[600px]">We use cookies to enhance your browsing experience and provide personalized content. 
          By clicking "Accept," you consent to the use of cookies.
           You can learn more about how we handle your data in our <Link href = "/privacy-policy"> <span className='text-blue-800 hover:underline cursor-pointer'> Privacy Policy.</span></Link></p>
          <div className='flex flex-row items-center gap-5'>
          <button
            className="mt-2 bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded"
            onClick={handleConsent}
          >
            Accept
          </button>
          <button className="mt-2 bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded" onClick = {()=> setShowBanner(false)}>Reject</button>
          </div>
          
        </div>
      
    </div>
    )}
    </>
  );
};

export default CookieConsent;
