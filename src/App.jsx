import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import WatchLater from "./pages/WatchLater";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/video/:id"
          element={<VideoDetails />}
        />

        <Route
          path="/watchlater"
          element={<WatchLater />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;