import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DroneCard = ({
  drone,
  setMenu,
  menu,
  info,
  setInfo,
  setSelectedDrone,
}) => {
  const [color, setColor] = useState("");
  const getRandomColor = () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  }, []);

  return (
    <div className="border-b-2 border-[#eee] p-2 hover:bg-gray-200 duration-300 transition-all lg:rounded-md">
      <div
        onClick={() => setMenu((prev) => !prev)}
        className="flex items-center justify-between px-2 lg:cursor-pointer"
      >
        <div className="flex items-center gap-x-2">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            className="w-8 h-8"
          >
            <path
              style={{ fill: color }}
              d="M46.4,10.5c-9.4,1.8-16.9,5.8-23.7,12.7c-6,6-9.8,12.8-11.9,21.1c-1.1,4.4-1.1,15.4,0,19.8c2.2,8.6,5.9,15.2,12.3,21.5c4.7,4.6,9.2,7.6,14.8,9.9c5.7,2.2,8.9,2.8,16.1,2.8c8.4,0,10.3-0.4,20.6-4.7c0.6-0.2,8.7,10.7,10,13.7c1,2,1,2.8,1,20.8c0,18,0,18.8-1,20.8c-1.3,3-9.4,13.9-10,13.7c-10.3-4.2-12.2-4.7-20.6-4.7c-9.4,0-15.9,1.8-23.6,6.6c-4.4,2.7-11.2,9.5-13.9,13.9c-4.8,7.7-6.6,14.1-6.6,23.6c0,7.4,0.6,10.5,3,16.6c4.3,10.9,13.9,20.4,24.9,24.7c5.7,2.2,8.9,2.8,16.1,2.8c9.4,0,15.9-1.8,23.6-6.6c4.4-2.7,11.2-9.5,13.9-13.9c4.8-7.7,6.6-14.1,6.6-23.6c0-8.4-0.4-10.3-4.7-20.6c-0.2-0.6,10.6-8.6,13.4-9.9c2.8-1.2,6.8-1.8,10.9-1.3c4.4,0.5,15.9,0.5,20.3,0c4.1-0.4,8.1,0.1,10.9,1.3c1.1,0.5,4.7,2.8,7.8,5.1c4.5,3.3,5.7,4.4,5.4,5c-3.7,8.5-5,15-4.7,22.4c0.6,11.7,4.9,21.2,13.4,29.6c6,5.9,12.7,9.6,20.9,11.6c4.4,1.1,15.4,1.1,19.8,0c8.4-2.1,15.1-5.9,21.3-12.1c6.1-6.2,9.9-12.9,12.1-21.3c1.1-4.4,1.1-15.4,0-19.8c-2.1-8.2-5.8-14.9-11.6-20.9c-8.4-8.5-17.8-12.8-29.6-13.4c-7.5-0.4-14,1-22.4,4.7c-0.6,0.3-1.7-1-5-5.4c-2.3-3.1-4.6-6.7-5.1-7.8c-1.2-2.8-1.7-6.8-1.3-11.2c0.5-4.8,0.5-15.1,0-19.9c-0.4-4.4,0.1-8.4,1.3-11.2c1.2-2.8,9.2-13.6,9.9-13.4c10.3,4.2,12.2,4.7,20.6,4.7c9.4,0,15.9-1.8,23.6-6.6c4.4-2.7,11.2-9.5,13.9-13.9c4.8-7.7,6.6-14.1,6.6-23.6c0-9.3-1.5-14.8-6.1-22.9c-2.7-4.7-9.6-11.7-14.4-14.6c-7.7-4.8-14.1-6.6-23.6-6.6s-15.9,1.8-23.6,6.6c-4.4,2.7-11.2,9.5-13.9,13.9c-4.8,7.7-6.6,14.1-6.6,23.6c0,8.4,0.4,10.3,4.7,20.6c0.2,0.6-10.7,8.7-13.7,10c-2,0.9-2.9,1-20.8,1s-18.8,0-20.8-1c-3-1.3-13.9-9.4-13.7-10c4.2-10.3,4.7-12.2,4.7-20.6c0-7.2-0.6-10.4-2.8-16.1c-2.2-5.5-5.3-10.2-9.7-14.6c-6.2-6.3-12.6-10.1-21-12.2C60.2,9.9,51,9.6,46.4,10.5z M62.9,18.3c4.6,1.3,7.8,2.6,11.2,4.9C88.7,32.8,94.6,50.5,88.7,67c-0.9,2.5-1.6,3.7-1.9,3.5c-0.3-0.2-5.3-3.7-11-7.9c-9.2-6.7-10.5-7.8-10.5-8.8c0-0.7-0.2-1.9-0.5-2.7c-0.5-1.4-0.4-1.5,2.9-5c4.1-4.4,7.2-8.5,8.4-11.1c0.8-1.8,0.8-2.1,0.2-2.7c-0.6-0.6-0.9-0.6-2.7,0.2c-2.7,1.2-6.7,4.2-11.1,8.4c-3.5,3.3-3.6,3.4-5,2.9c-3.7-1.3-7.6-0.2-10.8,3c-3.2,3.2-4.2,7.1-3,10.8c0.5,1.4,0.4,1.5-2.9,5c-4.1,4.4-7.2,8.5-8.4,11.1c-0.8,1.8-0.8,2.1-0.2,2.7c0.6,0.6,0.9,0.6,2.7-0.2c2.7-1.2,6.7-4.2,11.1-8.4c3.5-3.3,3.6-3.4,5-2.9c0.8,0.3,2,0.5,2.7,0.5c1.1,0,2.2,1.3,8.8,10.5c4.2,5.8,7.8,10.8,7.9,11.1c0.2,0.3-1,1-3.5,1.9c-16.5,6-34.2,0.1-43.8-14.6c-8.8-13.4-7.6-31.4,2.8-43.7c5.5-6.5,12.6-10.7,21.2-12.5C50.9,17.1,59.3,17.3,62.9,18.3z M210.7,18.3c7,1.9,12.5,5,17.3,9.8c14.4,14.4,14.4,37.6,0,52.1c-8.6,8.6-21,12.5-32.6,10.3c-4.5-0.9-10.2-3-9.7-3.7c0.1-0.3,3.7-5.2,7.9-11c6.7-9.1,7.8-10.5,8.8-10.5c0.7,0,1.9-0.2,2.7-0.5c1.4-0.5,1.5-0.4,5,2.9c4.4,4.1,8.5,7.2,11.1,8.4c1.8,0.8,2.1,0.8,2.7,0.2s0.6-0.9-0.2-2.7c-1.2-2.7-4.2-6.7-8.4-11.1c-3.3-3.5-3.4-3.6-2.9-5c1.3-3.7,0.2-7.6-3-10.8c-3.2-3.2-7.1-4.2-10.8-3c-1.4,0.5-1.5,0.4-5-2.9c-4.4-4.1-8.5-7.2-11.1-8.4c-1.8-0.8-2.1-0.8-2.7-0.2s-0.6,0.9,0.2,2.7c1.2,2.7,4.2,6.7,8.4,11.1c3.3,3.5,3.4,3.6,2.9,5c-0.3,0.8-0.5,2-0.5,2.7c0,1.1-1.3,2.2-10.4,8.8c-5.8,4.2-10.7,7.7-11,7.9c-0.7,0.5-2.8-4.9-3.7-9.7c-2-10.6,1-21.9,8.1-30.3c5.5-6.5,12.6-10.7,21.2-12.5C198.7,17.1,207.1,17.3,210.7,18.3z M60.7,165.6c4.8,0.9,10.2,3,9.7,3.7c-0.2,0.3-3.7,5.3-7.9,11c-6.7,9.1-7.8,10.4-8.8,10.4c-0.7,0-1.9,0.2-2.7,0.5c-1.4,0.5-1.5,0.4-5-2.9c-4.4-4.1-8.5-7.2-11.1-8.4c-1.8-0.8-2.1-0.8-2.7-0.2s-0.6,0.9,0.2,2.7c1.2,2.7,4.2,6.7,8.4,11.1c3.3,3.5,3.4,3.6,2.9,5c-2.8,7.9,5.9,16.5,13.8,13.8c1.4-0.5,1.5-0.4,5,2.9c4.4,4.1,8.5,7.2,11.1,8.4c1.8,0.8,2.1,0.8,2.7,0.2c0.6-0.6,0.6-0.9-0.2-2.7c-1.2-2.7-4.2-6.7-8.4-11.1c-3.3-3.5-3.4-3.6-2.9-5c0.3-0.8,0.5-2,0.5-2.7c0-1.1,1.3-2.2,10.5-8.8c5.8-4.2,10.7-7.8,11-7.9c0.7-0.4,2.8,5.2,3.7,9.7c2.2,11.6-1.7,24-10.3,32.6c-12.3,12.3-31.6,14.4-46,4.9c-14.5-9.6-20.5-27.2-14.7-43.6C25.4,172.6,43.3,162.3,60.7,165.6z M210.7,166.1c7,1.9,12.5,5,17.3,9.8c12.1,12.1,14.3,30.8,5.4,45.3c-10.8,17.6-34.2,23-51.4,11.8c-14.7-9.6-20.6-27.3-14.6-43.8c0.9-2.5,1.6-3.7,1.9-3.5c0.3,0.2,5.3,3.7,11.1,7.9c9.2,6.7,10.5,7.8,10.5,8.8c0,0.7,0.2,1.9,0.5,2.7c0.5,1.4,0.4,1.5-3,5.2c-4,4.2-7.3,8.7-8.4,11.3c-0.6,1.5-0.6,1.8,0,2.4c0.6,0.6,0.9,0.6,2.7-0.2c2.7-1.2,6.7-4.2,11.1-8.4c3.5-3.3,3.6-3.4,5-2.9c3.7,1.3,7.6,0.2,10.8-3c3.2-3.2,4.2-7.1,3-10.8c-0.5-1.4-0.4-1.5,2.9-5c4.1-4.4,7.2-8.5,8.4-11.1c0.8-1.8,0.8-2.1,0.2-2.7c-0.6-0.6-0.9-0.6-2.4,0c-2.5,1.1-7,4.4-11.3,8.4c-3.6,3.4-3.8,3.5-5.2,3c-0.8-0.3-2-0.5-2.7-0.5c-1.1,0-2.2-1.3-8.8-10.5c-4.2-5.8-7.8-10.7-7.9-11c-0.4-0.6,5-2.7,9.4-3.7C198.7,164.9,207.1,165.1,210.7,166.1z"
            />
          </svg>
          <h2 className="uppercase font-bold">{drone.uav_id}</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <div
            className={`w-6 h-6 rounded-full ${
              drone.state.state === "4"
                ? "bg-green-500"
                : drone.state.state === "5"
                ? "bg-yellow-500"
                : ""
            }`}
          ></div>
          <div className="w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center p-4">
            <FontAwesomeIcon icon={faVideo} className="" />
          </div>
        </div>
      </div>
      <div
        className={`hidden py-3 duration-300 transition-all lg:flex items-center justify-end gap-x-5`}
      >
        <button className="bg-[#00b4d8] text-white font-semibold px-4 py-1 rounded-md capitalize text-sm lg:px-2">
          get location
        </button>
        <button
          onClick={() => {
            setInfo(true);
            setSelectedDrone(drone);
          }}
          className="bg-[#00b4d8] text-white font-semibold px-4 py-1 rounded-md capitalize text-sm lg:px-2"
        >
          get infos
        </button>
      </div>
      <div
        className={`${
          menu ? "opacity-100 " : "opacity-0"
        } py-3 duration-300 transition-all flex items-center justify-end gap-x-5 lg:hidden`}
      >
        <button className="bg-[#00b4d8] text-white font-semibold px-4 py-1 rounded-md capitalize text-sm lg:px-2">
          get location
        </button>
        <button
          onClick={() => setInfo(drone)}
          className="bg-[#00b4d8] text-white font-semibold px-4 py-1 rounded-md capitalize text-sm lg:px-2"
        >
          get infos
        </button>
      </div>
    </div>
  );
};

export default DroneCard;
