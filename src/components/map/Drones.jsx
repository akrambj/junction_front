import { useState } from "react";
import DroneCard from "./DroneCard";
import AddDronPopUp from "./AddDronPopUp";

const Drones = ({ drons, setInfo, info }) => {
  const [menu, setMenu] = useState(false);
  const [addDronPopUp, setAddDronPopUp] = useState(false);

  return (
    <>
      <div className="w-full h-[200px] absolute bottom-14 bg-white overflow-y-scroll">
        <div className="text-right px-6 py-2">
          <button
            onClick={() => setAddDronPopUp(true)}
            className="text-right bg-[#00B4D8] text-white py-2 px-4 rounded-xl "
          >
            Add New UAV
          </button>

          {addDronPopUp && (
            <AddDronPopUp
              addDronPopUp={addDronPopUp}
              setAddDronPopUp={setAddDronPopUp}
            />
          )}
        </div>

        <div className="flex flex-col items-start  px-4 gap-y-3  mt-5">
          <h2 className="text-xl capitalize font-semibold text-[#00B4D8]">
            list of all uavs:
          </h2>
          {drons.map((drone) => {
            return (
              <div key={drone.uav_id} className="w-full py-1">
                <DroneCard
                  drone={drone}
                  setMenu={setMenu}
                  menu={menu}
                  setInfo={setInfo}
                  info={info}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Drones;
