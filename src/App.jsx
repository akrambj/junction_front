import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Track from "./pages/Track";
import Stream from "./components/map/Stream";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<MapPage />} />
          <Route path="track" element={<Track />} />
          <Route path="stream/:uav_id" element={<Stream uavNumber={1} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
