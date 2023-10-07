import { useState } from "react";
import PopUpContent from "./PopUpContent";
import DroneCard from "./DroneCard";
import AddDronPopUp from "./AddDronPopUp";

const Drones = ({ drons }) => {
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [addDronPopUp, setAddDronPopUp] = useState(false);
  const closePopUp = () => {
    setIsPopUpOpen(false);
    setSelectedDrone(null);
  };

  return (
    <>
      <div className=" bg-white py-2">
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
          {drons.map((drone) => {
            return (
              <div
                key={drone.uav_id}
                className="w-full py-1"
                onClick={() => {
                  setSelectedDrone(drone);
                  setIsPopUpOpen(true);
                  console.log("clicked");
                }}
              >
                <DroneCard drone={drone} />
                {isPopUpOpen && selectedDrone && (
                  <>
                    <div
                      className={`h-[60vh] bg-white py-5 z-40 rounded-t-[35px] fixed w-full left-0 bottom-0 ${
                        isPopUpOpen ? "block" : "hidden"
                      }`}
                    >
                      <PopUpContent
                        selectedDrone={selectedDrone}
                        closePopUp={closePopUp}
                      />
                    </div>
                    <div className="fixed top-0 left-0 right-0 bottom-0 overlayBgMap"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Drones;
