import Map, { Marker, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import PopUp from "../components/maps/PopUp";
import * as mqtt from "mqtt/dist/mqtt.min";
import Drones from "../components/map/Drones";
import droneIcon from "../assets/imgs/droneIcon.svg";
import PopUpContent from "../components/map/PopUpContent";

const MapPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const [drons, setDrons] = useState([]);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const getDrons = async () => {
      try {
        const response = await fetch("http://10.16.26.47:3001/uav-list");

        const textData = await response.text();

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

  useEffect(() => {
    const client = mqtt.connect("ws://13.38.173.241:9001");

    client.on("connect", () => {
      client.subscribe("+/gps/+");
    });

    client.on("message", (topic, message) => {
      const data = parseFloat(message.toString());
      const id = topic.slice(0, topic.indexOf("/"));

      setDrons((prev) => {
        const newDrons = [...prev];
        const i = newDrons.findIndex((item) => item.uav_id === id);

        switch (topic) {
          case `${id}/gps/lat`:
            newDrons[i] = { ...newDrons[i], lat: data };
            break;
          case `${id}/gps/lon`:
            newDrons[i] = { ...newDrons[i], lon: data };
            break;
          default:
            break;
        }
        return newDrons;
      });
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <section
      className={`w-full h-[100vh] overflow-x-hidden sm:bg-red-300 xs:bg-red-950 xs2:bg-blue-3 md:bg-green-300`}
    >
      {error && <h2>error</h2>}
      {drons && (
        <div className="relative w-full h-[100vh]">
          <Map
            mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN}
            initialViewState={{
              longitude: 65,
              latitude: -15,
              zoom: 1,
              width: "100vw",
              height: "100vh",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {drons.map((drone) =>
              drone.lat && drone.lon ? (
                <>
                  <Marker
                    longitude={drone.lon}
                    latitude={drone.lat}
                    key={drone.uav_id}
                  >
                    <img src={droneIcon} className="w-10 h-auto" alt="" />
                  </Marker>
                  {info && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 overlayBgMap z-40">
                      <PopUpContent selectedDrone={drone} setInfo={setInfo} />
                    </div>
                  )}
                </>
              ) : null
            )}

            <ScaleControl unit="metric" position="top-right" />
          </Map>
          <div className="">
            <Drones drons={drons} info={info} setInfo={setInfo} />
          </div>
          {showPopUp && <PopUp setShowPopUp={setShowPopUp} />}
        </div>
      )}
    </section>
  );
};

export default MapPage;
