import Map, { Marker, Source, Layer, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import Stream from './Stream';

function Track() {
    const [hist, setHist] = useState([]);
    const [uavId, setUavId] = useState('uav1');
    const [startTimestamp, setStartTimestamp] = useState('2023-10-06T08:50:33.001Z');
    const [endTimestamp, setEndTimestamp] = useState('2023-10-06T08:50:40.023Z');
    const [viewPort, setViewPort] = useState({
        longitude: 115,
        latitude: 0,
        zoom: 10,
        width: "100vw",
        height: "90vh"
    })





    useEffect(() => {
        const apiUrl = `http://10.16.26.47:3001/uav-data?uavId=${uavId}&startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}`;
        const getHistory = async () => {
            const data = await fetch(apiUrl);
            const history = await data.json();
            setHist(history.slice(100));
            setViewPort({
                longitude: history[history.length - 1].lon,
                latitude: history[history.length - 1].lat,
                zoom: 13,
                width: "100vw",
                height: "100vh"
            })
        };
        getHistory();

        console.log('fetch')
    }, [uavId, startTimestamp, endTimestamp]);

    useEffect(() => { console.log('ttbdl') }, [viewPort])


    const coordinates = hist.map(place => [parseFloat(place.lon), parseFloat(place.lat)]);

    return (
        <div style={{ position: 'relative', display: "flex" }}>
            <div style={{ padding: "20px ", display: "flex", justifyContent: "center", gap: "20px", flexDirection: "column" }}>
                <div>
                    <label style={{ fontWeight: 600 }} htmlFor="uavId">UAV ID: </label>
                    <input
                        type="text"
                        id="uavId"
                        value={uavId}
                        onChange={e => setUavId(e.target.value)}
                    />
                </div>
                <div>
                    <label style={{ fontWeight: 600 }} htmlFor="duration">Start Timestamp: </label>
                    <select name="duration" id='duration'>
                        <option value="5">last 5 min</option>
                        <option value="10">last 10 min</option>
                        <option value="15">last 15 min</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="GO">
                        <button style={{ fontWeight: 600, borderRadius: "10px", backgroundColor: "#00B4D8", color: "white", border: "none", padding: "15px" }} onClick={() => {
                            setStartTimestamp(new Date(new Date() - 1000 * 60 * 15).toISOString()); setEndTimestamp(new Date().toISOString())
                        }}>
                            Show Roadmap
                        </button>
                    </label>
                </div>

            </div>

            <Map
                mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN}
                dragPan={true}
                dragRotate={true}
                initialViewState={{
                    longitude: 40,
                    latitude: 20,
                    zoom: 3,
                }}
                {...viewPort}
                onPitch={({ viewState }) => setViewPort(viewState)}
                onDrag={({ viewState }) => setViewPort(viewState)}
                onRotate={({ viewState }) => setViewPort(viewState)}
                onZoom={({ viewState }) => setViewPort(viewState)}
                on={({ viewState }) => setViewPort(viewState)}
                onViewportChange={() => { console.log('change') }}
                style={{ width: "100vw", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Source id="route" type="geojson" data={{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: coordinates
                    }
                }}>
                    <Layer
                        id="route"
                        type="line"
                        source="route"
                        layout={{ "line-join": "round", "line-cap": "round" }}
                        paint={{ "line-color": "black", "line-width": 4 }}
                    />
                </Source>

                {hist.map((place, index) => {
                    if (index === 0) {
                        // This is the starting point
                        return (
                            <Marker key={index} longitude={place.lon} latitude={place.lat}>
                                <h2 style={{ color: "green" }}>O</h2>
                            </Marker>
                        );
                    } else if (index === hist.length - 1) {
                        // This is the ending point
                        return (
                            <Marker key={index} longitude={place.lon} latitude={place.lat}>
                                <h2 style={{ color: "red" }}>O</h2>
                            </Marker>
                        );
                    } else return null;
                })}
                <ScaleControl unit='metric' position='top-right' />
            </Map>
        </div >
    );
}

export default Track;
