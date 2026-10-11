import { Routes, Route } from "react-router-dom";
import LandingPage from "./comps/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
