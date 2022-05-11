import "./App.css";
import "./index.css";
import "./components/Navbar/navbar.css";

import Home from "./components/home/Home.js";
import City from "./components/city/City.js";
import Navbar from "./components/Navbar/navbar";
import TourDetails from "./components/TourDetails/TourDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
