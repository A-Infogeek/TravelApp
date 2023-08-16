import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plan from "./components/Plan/Plan";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
