'use client'
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
    <div className='absolute top-[65px] md:top-[85px] left-0 right-0 w-full z-10 mx-auto bg-green-800 py-10'>
        <div className="text-white p-4 text-center">
          <p>This website uses cookies to improve your experience.</p>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            onClick={handleConsent}
          >
            Accept
          </button>
        </div>
      
    </div>
    )}
    </>
  );
};

export default CookieConsent;
