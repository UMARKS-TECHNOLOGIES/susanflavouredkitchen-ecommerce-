import { Button } from '../../../components/ui/button';

const CateringContent = ({ headline, description, buttonText }) => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[70%] text-center lg:text-left">
      <div className="lg:px-10 flex flex-col items-center lg:items-start">
        <h2 className="font-bold text-white text-3xl lg:text-5xl leading-tight text-center lg:text-left">
          {headline}
        </h2>

        <p className="my-4 leading-snug lg:leading-tight text-white font-medium text-base lg:text-lg w-full lg:w-[560px] text-center lg:text-left opacity-90 lg:opacity-100">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center lg:justify-center mt-4 lg:mt-0">
        <Button
          className="bg-orange-600 rounded-br-lg rounded-tl-lg hover:bg-orange-500 text-white font-medium px-8 py-6 lg:px-4 lg:py-2"
          size="lg"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CateringContent;
