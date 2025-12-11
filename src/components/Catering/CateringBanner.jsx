const CateringBanner = ({ image, children }) => {
  return (
    <div
      className="w-full mt-4 lg:mt-10 h-[400px] lg:h-96 bg-cover bg-center bg-no-repeat rounded-lg lg:rounded-br-lg lg:rounded-tl-lg overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex w-full h-full bg-black/60 lg:bg-black/50 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CateringBanner;
