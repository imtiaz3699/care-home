'use client'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";

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
      height={"100vh"}
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
        <div className="relative w-full h-full">
        <div className="w-full h-full bg-black opacity-25 flex flex-col px-10 justify-center text-black z-10 absolute">
          <div className="font-bold text-[35px] md:text-[50px] text-white  md:ml-28">Welcome to SBH Healthcare</div>
          <div className="max-w-[1000px] text-white text-[18px]  md:ml-28">
At OptiCare Health Center, we don't just offer healthcare; we provide you with a healthcare home—a haven where we join forces in your wellness journey.
Every step of the way, count on us to wholeheartedly support and guide you towards a healthier, 
more fulfilling life.Your well-being is not just a goal; it's our unwavering commitment.
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

      

      {/* <MenuNav /> */}
    </HeroSlider>
  );
}
