import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import PopUp from "../components/maps/PopUp";
import * as mqtt from "mqtt/dist/mqtt.min";
import Drones from "../components/map/Drones";

const MapPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const [drons, setDrons] = useState([]);
  const [error, setError] = useState(false);

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
    <section className="w-full h-[100vh] overflow-x-hidden">
      {error && <h2>error</h2>}
      {drons && (
        <div className="relative w-full h-[40%]">
          <Map
            mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN}
            initialViewState={{
              longitude: 65,
              latitude: -15,
              zoom: 2,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {drons.map((drone) =>
              drone.lat && drone.lon ? (
                <Marker
                  longitude={drone.lon}
                  latitude={drone.lat}
                  key={drone.uav_id}
                >
                  <h1 className="text-sm text-green-600">{drone.uav_id}</h1>
                </Marker>
              ) : null
            )}
          </Map>
          <div className="">
            <Drones drons={drons} />
          </div>
          {showPopUp && <PopUp setShowPopUp={setShowPopUp} />}
        </div>
      )}
    </section>
  );
};

export default MapPage;
