import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Play from "@/pages/Play";
import Lobbies from "./pages/Lobbies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/play" element={<Play />} />
        <Route path="/lobbies" element={<Lobbies />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
