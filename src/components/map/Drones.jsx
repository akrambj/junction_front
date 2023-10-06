import { useEffect, useState } from "react";
import PopUpContent from "./PopUpContent";

const Drones = () => {
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [drons, setDrons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDrons = async () => {
      try {
        const response = await fetch("http://10.16.26.47:3001/uav-list");

        // Debugging step
        const textData = await response.text();
        console.log(textData);

        // Check if response was successful
        if (response.ok) {
          setDrons(JSON.parse(textData));
        } else {
          setError(
            `Server responded with ${response.status}: ${response.statusText}`
          );
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getDrons();
  }, []);

  return (
    <>
      {error && <h2>{error}</h2>}
      {drons && (
        <div className="h-[60vh] bg-white">
          <h2 className="text-2xl font-bold text-[#00B4D8] p-4">UAV{"'"}S</h2>
          <div className="flex flex-col items-start mt-5 px-4  gap-y-3">
            {drons.map((drone) => (
              <button
                key={drone.uav_id}
                onClick={() => setSelectedDrone(drone.uav_id)}
                className="border-2 border-[#00B4D8] px-14 py-1 rounded-xl uppercase font-semibold"
              >
                {drone.uav_id}
              </button>
            ))}
          </div>
          <div className="relative">
            {selectedDrone && (
              <>
                <div className="h-[80vh] bg-white py-5 z-40 rounded-t-[30px] fixed w-full left-0 bottom-0 ">
                  <PopUpContent selectedData={selectedDrone} />
                </div>
                <div className="fixed top-0 left-0 right-0 bottom-0 overlayBg"></div>
              </>
            )}
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-[#00B4D8]">Filters</h2>
            <div className="flex gap-2">
              <input type="radio" />
              <label>home</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              <label>home</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Drones;
