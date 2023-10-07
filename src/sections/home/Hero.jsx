import hero from "../../assets/imgs/hero.svg";

const Hero = () => {
  return (
    <div className="w-[97%] lg:h-[100vh] lg:overflow-hidden mx-auto flex flex-col justify-center gap-y-7 sm:flex-col-reverse py-10">
      <img className="md:w-[60%] mx-auto object-cover" src={hero} alt="" />
      <div className="flex flex-col sm:items-center sm:justify-center gap-5 py-4 sm:gap-y-4 md:w-[70%] md:mx-auto">
        <h1 className="text-xl font-bold xs:w-[90%] xs2:text-2xl sm:w-full sm:text-center md:text-3xl">
          Explore New <span className="text-[#00B4D8]">Fleet</span> Management
          System,Manage and Track The
          <span className="text-[#00B4D8]">Transportation.</span>
        </h1>
        <div className="text-left">
          <button className="bg-[#00B4D8] text-white px-7 py-1 text-lg font-bold rounded-md">
            Try It
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
