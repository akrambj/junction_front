// import { useState, useEffect } from 'react';
// import Map, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import * as mqtt from 'mqtt/dist/mqtt.min'
// import PopUp from './PopUp';


// function App() {

//   const [showPopUp, setShowPopUp] = useState(null)

//   // States for two drones
//   const [positionUAV1, setPositionUAV1] = useState({ longitude: 115.47, latitude: -8.75 });
//   const [positionUAV2, setPositionUAV2] = useState({ longitude: 15.2, latitude: -24.7 });
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     // Connect to the MQTT broker
//     const client = mqtt.connect('ws://13.38.173.241:9001');

//     client.on('connect', () => {
//       console.log('Connected to MQTT broker');
//       client.subscribe('+/gps/+');
//     });

//     client.on('message', (topic, message) => {
//       // Parse the received message
//       const data = parseFloat(message.toString());
//       // Update drone positions based on the topic
//       switch (topic) {
//         case 'uav1/gps/lat':
//           setPositionUAV1(prev => ({ ...prev, latitude: data }));
//           break;
//         case 'uav1/gps/lon':
//           setPositionUAV1(prev => ({ ...prev, longitude: data }));
//           break;
//         case 'uav2/gps/lat':
//           setPositionUAV2(prev => ({ ...prev, latitude: data }));
//           break;
//         case 'uav2/gps/lon':
//           setPositionUAV2(prev => ({ ...prev, longitude: data }));
//           break;
//         default:
//           break;
//       }
//     });

//     // Cleanup on component unmount
//     return () => {
//       client.end();
//     };

//   }, []);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://10.16.26.47:3001/uav-data?uavId=uav1&startTimestamp=2023-10-06T08:50:32.001Z&endTimestamp=2023-10-06T08:50:33.023Z');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const jsonData = await response.json();

//         setData(jsonData);
//         console.log(data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty array means this effect runs once after the initial render


//   return (
//     <div style={{ position: 'relative' }}>
//       <Map
//         mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN}
//         initialViewState={{
//           longitude: 65,
//           latitude: -15,
//           zoom: 2
//         }}
//         style={{ width: "100vw", height: "100vh" }}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//       >
//         {/* Marker for UAV1 */}
//         <Marker longitude={positionUAV1.longitude} latitude={positionUAV1.latitude} anchor="bottom">
//           <button onClick={() => { setShowPopUp(true) }} style={{ color: "red" }}>
//             UAV1
//           </button>
//         </Marker>
//         {/* Marker for UAV2 */}
//         <Marker longitude={positionUAV2.longitude} latitude={positionUAV2.latitude} anchor="bottom">
//           <button onClick={() => { setShowPopUp(true) }} style={{ color: "blue" }}>
//             UAV2
//           </button>
//         </Marker>
//       </Map>
//       {showPopUp && <PopUp setShowPopUp={setShowPopUp} />}
//     </div>
//   );

// }

// export default App;





