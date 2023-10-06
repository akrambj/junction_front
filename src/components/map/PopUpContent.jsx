import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUpContent = ({ selectedDrone, closePopUp, drone }) => {
  return (
    <div>
      <FontAwesomeIcon onClick={closePopUp} icon={faXmark} />
      <h2 className="text-[#00B4D8] text-center text-2xl font-semibold">
        UAV Informations
      </h2>
      <div className="p-5">
        <h3>Battery Info:</h3>
        <h3>
          id: <span>02125</span>
        </h3>
        <h3>
          Voltage: <span>02125</span>
        </h3>
        <h3>
          Status:: <span>02125</span>
        </h3>
      </div>
    </div>
  );
};

export default PopUpContent;
