const Effect = ({ image, title, texts }) => {
  return (
    <div className="w-full  p-2 md:w-[45%] h-[200px]">
      <div className="flex items-center gap-x-4">
        <div className="bg-[#00B4D8] p-2 rounded-full">
          <img src={image} className="w-10 md:w-5" alt="" />
        </div>
        <h3 className="text-[#0077B6] font-bold lg:text-sm">{title}</h3>
      </div>
      <p className="text-sm p-2  text-[#101010]">{texts}</p>
    </div>
  );
};

export default Effect;
