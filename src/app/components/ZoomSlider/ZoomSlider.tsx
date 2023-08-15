'use client'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Link from "next/link";
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
const data = [
  '/slider1.jpg','/slider2.jpg','/slider3.jpg'
]
export default function ZoomSlider() {
  return (
    <HeroSlider
      height={"700px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay className="">
        <div className="w-full h-full relative">
        <div className="relative w-full h-full">
  {/* Overlay with opacity */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
  
  {/* Inner container */}
  <div className="relative bg-transparent w-full h-full flex flex-col px-10 justify-center z-20">
    {/* Text content */}
    <div className="font-bold text-[35px] md:text-[50px] text-white md:ml-28">
      Welcome to SBH Healthcare
    </div>
    <div className="max-w-[709px] text-white text-[18px] md:ml-28">
      At SBH Healthcare, we don't just offer healthcare we provide you with a haven where we join forces in your wellness journey.
      Every step of the way, count on us to wholeheartedly support and guide you towards a healthier, more fulfilling life.
      Your well-being is not just a goal, it's our unwavering commitment.
    </div>
    
    {/* Button */}
    <Link href='/contact_us'>
      <button className="bg-blue-900 md:ml-28 absolute px-4 py-3 text-white mt-5">
        Learn more...
      </button>
    </Link>
  </div>
</div>

        </div>
      </Overlay>
      {
        data.map((element,idx)=> {
          return  <Slide
        background={{
            backgroundImageSrc: element
        }}
      />
      })
    }
    </HeroSlider>
  );
}
