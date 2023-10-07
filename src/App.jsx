import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Track from "./pages/Track";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<MapPage />} />
          <Route path="track" element={<Track />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
