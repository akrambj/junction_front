import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUpContent = ({ selectedDrone, closePopUp }) => {
  return (
    <div>
      <FontAwesomeIcon
        className="absolute right-5 text-3xl top-5"
        onClick={closePopUp}
        icon={faXmark}
      />
      <h2 className="text-[#00B4D8] text-center text-2xl mt-7 font-bold">
        UAV Informations
      </h2>
      <div className="p-5">
        <h3 className="text-[#C9C4C4] text-xl font-bold">Battery Info:</h3>
        <h3 className="font-semibold">
          id:{" "}
          <span className="text-[#0077B6] uppercase">
            {selectedDrone.uav_id}
          </span>
        </h3>
        <h3 className="mt-1 font-semibold">
          Voltage:{" "}
          <span className="text-[#0077B6]">{selectedDrone.state.bat.vl}</span>
        </h3>
        <h3 className="mt-1 font-semibold">
          Power:{" "}
          <span className="text-[#0077B6]">{selectedDrone.state.bat.pt}</span>
        </h3>
      </div>
      <div className="py-2 px-5">
        <h3 className="text-[#C9C4C4] text-xl font-bold">UAV Status:</h3>
        <h3 className="font-semibold">
          UAV in Flight:{" "}
          <span className="text-[#0077B6] uppercase">
            {selectedDrone.state.in_air}
          </span>
        </h3>
        <h3 className="mt-1 font-semibold">
          Armed UAV:{" "}
          <span className="text-[#0077B6]">
            {selectedDrone.state.armed === "1"
              ? "TRUE"
              : selectedDrone.state.armed === "2"
              ? "FALSE"
              : ""}
          </span>
        </h3>
        <h3 className="mt-1 font-semibold">
          Current UAV status:{" "}
          <span
            className={`text-[#0077B6] ${
              selectedDrone.state.state === "4"
                ? "bg-green-500 text-white p-2"
                : selectedDrone.state.state === "5"
                ? "bg-yellow-500 text-white p-2"
                : ""
            }`}
          >
            {selectedDrone.state.state === "4"
              ? "GOOD"
              : selectedDrone.state.state === "5"
              ? "WEAK"
              : ""}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default PopUpContent;
