const About = ({ image, anotherImage, title, texts, responsiveFlex }) => {
  const getFlexDirection = () => {
    if (responsiveFlex === "reverse") {
      return "flex-col md:flex-row-reverse";
    }
    return "flex-col md:flex-row";
  };
  return (
    <section className="w-full  py-5 overflow-hidden">
      <div
        className={`w-[95%] ${getFlexDirection()} mx-auto flex flex-col justify-center gap-10  sm:flex-row sm:items-center`}
      >
        <div className="sm:w-[45%] sm:flex sm:flex-col sm:justify-center sm:gap-10">
          <img src={anotherImage} alt="" />
          <img src={image} className="lg:w-[70%] mx-auto" alt="" />
        </div>
        <div className="sm:w-[50%]">
          <h2 className="text-[#00B4D8] text-3xl">{title}</h2>
          <p className="pt-1 text-sm xs2:text-base sm:text-sm md:text-lg">
            {texts}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
