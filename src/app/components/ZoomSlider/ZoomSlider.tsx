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
        <div className="flex flex-col ml-28 justify-center h-full text-black">
          <div className="font-bold text-[50px] text-green-800">Welcome to SBH Healthcare</div>
          <div className="max-w-[1000px] text-[20px]">
At OptiCare Health Center, we don't just offer healthcare; we provide you with a healthcare home—a haven where we join forces in your wellness journey.
Every step of the way, count on us to wholeheartedly support and guide you towards a healthier, 
more fulfilling life.Your well-being is not just a goal; it's our unwavering commitment. Discover the difference of a true healthcare partnership at OptiCare Health Center,
 where you're not just a patient – you're a cherished member of our healthcare family.
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
