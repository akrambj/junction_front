import Map, { Marker, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import Drones from "../components/map/Drones";
import droneIcon from "../assets/imgs/droneIcon.svg";
import PopUpContent from "../components/map/PopUpContent";

const MapPage = () => {
  const [drons, setDrons] = useState([]);
  const [error, setError] = useState(false);
  const [isInfoShown, setIsInfoShown] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [viewPort, setViewPort] = useState({
    longitude: 115,
    latitude: 0,
    zoom: 10,
    width: "100vw",
    height: "90vh",
  });

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
      className={`w-full h-[100vh] lg:flex overflow-x-hidden  lg:flex-row-reverse`}
    >
      {error && <h2>error</h2>}
      {drons && (
        <div className="relative w-full h-[100vh] lg:w-[80%] lg:ml-auto ">
          <Map
            mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN}
            initialViewState={{
              longitude: 65,
              latitude: -15,
              zoom: 1,
              width: "100vw",
              height: "100vh",
            }}
            {...viewPort}
            onPitch={({ viewState }) => setViewPort(viewState)}
            onDrag={({ viewState }) => setViewPort(viewState)}
            onRotate={({ viewState }) => setViewPort(viewState)}
            onZoom={({ viewState }) => setViewPort(viewState)}
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
                  {isInfoShown && (
                    <div
                      key={drone.uav_id}
                      className="absolute  top-0 left-0 right-0 bottom-0 overlayBgMap z-40"
                    >
                      <PopUpContent
                        selectedDrone={selectedDrone}
                        setIsInfoShown={setIsInfoShown}
                      />
                    </div>
                  )}
                </>
              ) : null
            )}

            <ScaleControl unit="metric" position="top-right" />
          </Map>
          <div className="lg:hidden">
            <Drones
              setSelectedDrone={setSelectedDrone}
              drons={drons}
              info={isInfoShown}
              setInfo={setIsInfoShown}
            />
          </div>
        </div>
      )}
      <div className="w-[20%] h-full">
        <div className="hidden lg:block">
          <Drones
            drons={drons}
            info={isInfoShown}
            setInfo={setIsInfoShown}
            setSelectedDrone={setSelectedDrone}
          />
        </div>
      </div>
    </section>
  );
};

export default MapPage;
