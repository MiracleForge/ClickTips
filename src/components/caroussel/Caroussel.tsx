"use client"
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slidesData = {
  slides: [
    {
      "src": "/assets/images/bannertest.png",
      "alt": "image picture 1"
    },
    {
      "src": "/assets/images/SonnenLogo.png",
      "alt": "image picture 2"
    },
    {
      "src": "/assets/images/bannertest.png",
      "alt": "image picture 3"
    }
  ]
};

const Caroussel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.slides.length) % slidesData.slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.slides.length);
  };

  useEffect(() => {
    const IntervalId = setInterval(() => {
      handleNextClick();
    },3000);

    return () => clearInterval(IntervalId);

  }, [currentSlide]);

  return (
    <figure className='relative w-full'>
        <div className=' h-auto  rounded-lg'>
        {slidesData.slides.map((slide, index) => (
          <div key={index} className={`absolute top-0 object-cover duration-300 ease-in-out h-56 ${index === currentSlide ? 'block -translate-x-0' : ' opacity-0 translate-x-96'}`}>
            <Image src={slide.src} className=''
            width={15778}
            height={500}
            alt={slide.alt} />
          </div>
        ))}
      </div>
      
      <button onClick={handlePrevClick} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={handleNextClick} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </figure>
  )
}

export default Caroussel