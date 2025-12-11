import { Button } from "components/UI_reusables/ui/button";
import { Link } from "react-router-dom";

const HeroSlideItem = ({ title, description, image }) => {
  return (
    <div className="bg-[#ff6e00] flex flex-col lg:flex-row py-8 lg:py-8 px-6 lg:px-12 rounded-2xl lg:rounded-lg gap-6 lg:gap-20 items-center min-h-[500px] lg:min-h-0">

      <div className="w-[250px] h-[250px] lg:w-[390px] lg:h-[390px] flex items-center justify-center shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="text-white max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start">
        <h2 className="text-[28px] lg:text-[50px] leading-tight font-bold max-w-2xl">
          {title}
        </h2>

        <p className="font-medium text-[14px] lg:text-[20px] my-4 lg:my-2 max-w-3xl opacity-90 lg:opacity-100">
          {description}
        </p>

        <div className="flex justify-center lg:justify-start items-center pt-2 lg:py-6 gap-3 w-full lg:w-auto">
          <Link to="/order-now" className="flex-1 lg:flex-none">
            <Button className="bg-white w-full lg:w-[100px] h-10 text-[#ff6e00] hover:bg-gray-100 font-semibold border border-white rounded-lg">
              Order Now
            </Button>
          </Link>

          <Link to="/book-us" className="flex-1 lg:flex-none">
            <Button className="bg-primary w-full lg:w-[140px] h-10 text-white hover:bg-white/10 font-semibold border border-white rounded-lg">
              Book Catering
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
