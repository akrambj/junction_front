import { useState } from "react";

const AddDronPopUp = ({ setAddDronPopUp }) => {
  const [uavId, setUavId] = useState("");

  const handleCreateDrone = () => {
    fetch("http://10.16.26.47:3001/uav-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uav_id: uavId,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          setAddDronPopUp(false);
        } else {
          console.warn("Unexpected status code:", res.status);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateDrone();
  };

  return (
    <div className="overlayBg fixed top-0 left-0 z-50 right-0 bottom-0 flex justify-center items-center w-full h-[100vh]">
      <div className="w-[90%] rounded-lg mx-auto lg:w-[30%] h-[200px] bg-[#f8f3f3] flex flex-col items-center justify-center gap-4">
        <h2 className="text-[#0077B6] text-center text-xl font-semibold">
          Add UAV
        </h2>
        <p className="text-center text-xs text-[#C9C4C4]">
          You can add your UAV and track it by adding the id
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            className="px-2 w-[250px] ml-auto bg-white  py-2 rounded-md"
            type="text"
            placeholder="id"
            onChange={(e) => setUavId(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-4">
            <button
              type="submit"
              className="bg-[#00B4D8] text-white w-[100px] h-[30px] rounded-md font-semibold"
            >
              Add New
            </button>
            <button
              onClick={() => setAddDronPopUp(false)}
              className="border-2 border-[#C9C4C4] text-[#C9C4C4] w-[100px] h-[30px] rounded-md font-semibold"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDronPopUp;
