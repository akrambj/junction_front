// import Map, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { useState, useEffect } from 'react';
// import * as mqtt from 'mqtt/dist/mqtt.min'

// function App() {


//   useEffect(() => {
//     const client = mqtt.connect("13.38.173.241:1883");

//     client.on("connect", () => {
//       client.subscribe("presence", (err) => {
//         if (!err) {
//           client.publish("presence", "Hello mqtt");
//         }
//       });
//     });

//     client.on("message", (topic, message) => {
//       // message is Buffer
//       console.log(message.toString());
//     });

//     return () => {
//       // Disconnect the MQTT client when the component unmounts.
//       client.end();
//     };
//   }, []);


//   return (
//     <Map
//       mapboxAccessToken="pk.eyJ1IjoiYWtyYW1iajAxIiwiYSI6ImNsbmRmdGhxOTA1cWIyanF4dHlxM2lqNTkifQ.oHroqhHRfS3nEHaZof0H_g"
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 10
//       }}
//       style={{ width: "100vw", height: "100vh" }}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     >
//       <Marker longitude={-122.4} latitude={37.8} anchor="bottom" >
//         <h2 style={{color: "red"}}>
//             XXXXXX
//         </h2>
//       </Marker>
//       <Marker longitude={-121.9} latitude={37.8} anchor="bottom" >
//         <h2 style={{color: "red"}}>
//             XXXXXX
//         </h2>
//       </Marker>
//       <Marker longitude={-122.9} latitude={37.8} anchor="bottom" >
//         <h2 style={{color: "red"}}>
//             XXXXXX
//         </h2>
//       </Marker>
//     </Map>
//   );
// }
// export default App

// --------------------------------------------------------------------------------------------------------------------

import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mqtt from 'mqtt/dist/mqtt.min'
import Stream from './Stream'


function App() {
  // States for two drones
  const [positionUAV1, setPositionUAV1] = useState({ longitude: 115.47, latitude: -8.75 });
  const [positionUAV2, setPositionUAV2] = useState({ longitude: 15.2, latitude: -24.7 });

  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect('ws://13.38.173.241:9001');

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      // Subscribe to topics for both UAVs
      ['uav1/gps/lat', 'uav1/gps/lon', 'uav2/gps/lat', 'uav2/gps/lon'].forEach(topic => {
        client.subscribe(topic);
      });
    });

    client.on('message', (topic, message) => {
      // Parse the received message
      const data = parseFloat(message.toString());
      // Update drone positions based on the topic
      switch (topic) {
        case 'uav1/gps/lat':
          setPositionUAV1(prev => ({ ...prev, latitude: data }));
          break;
        case 'uav1/gps/lon':
          setPositionUAV1(prev => ({ ...prev, longitude: data }));
          break;
        case 'uav2/gps/lat':
          setPositionUAV2(prev => ({ ...prev, latitude: data }));
          break;
        case 'uav2/gps/lon':
          setPositionUAV2(prev => ({ ...prev, longitude: data }));
          break;
        default:
          break;
      }
    });

    // Cleanup on component unmount
    return () => {
      client.end();
    };

  }, []);

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYWtyYW1iajAxIiwiYSI6ImNsbmRmdGhxOTA1cWIyanF4dHlxM2lqNTkifQ.oHroqhHRfS3nEHaZof0H_g"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 8
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {/* Marker for UAV1 */}
        <Marker longitude={positionUAV1.longitude} latitude={positionUAV1.latitude} anchor="bottom">
          <h2 style={{ color: "red" }}>
            UAV1
          </h2>
        </Marker>
        {/* Marker for UAV2 */}
        <Marker longitude={positionUAV2.longitude} latitude={positionUAV2.latitude} anchor="bottom">
          <h2 style={{ color: "blue" }}>
            UAV2
          </h2>
        </Marker>
      </Map>
      <Stream />
    </>
  );

}

export default App;




// --------------------------------------------------------------------------------------------------------------------

