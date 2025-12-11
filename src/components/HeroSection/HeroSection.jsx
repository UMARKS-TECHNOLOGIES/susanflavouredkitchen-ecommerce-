import { heroSlides } from "Data-center/heroSlidesData";
import HeroSearchBar from "./HeroSearchBar";
import HeroSlider from "./HeroSlider";


const HeroSection = () => {
  return (
    <section className="w-full lg:w-[95%] mt-16 lg:mt-20 mx-auto relative px-4 lg:px-0">
      <HeroSearchBar />
      <HeroSlider heroSlides={heroSlides} />
    </section>
  );
};

export default HeroSection;
