const HeroSearchBar = () => {
  return (
    <div className="flex lg:hidden w-full gap-2 mb-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search Meals"
          className="w-full h-10 pl-4 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ff6e00] text-base"
        />
      </div>
      <button className="bg-primary h-10 text-white px-6 rounded-lg hover:bg-[#e66300]">
        Search
      </button>
    </div>
  );
};

export default HeroSearchBar;
