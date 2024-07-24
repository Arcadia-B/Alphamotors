import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import Sports from "./Components/Sports/Sports";
import Cruiser from "./Components/Cruiser/Cruiser";
import Offroad from "./Components/Offroad/Offroad";
import Footer from "./Components/Footer/Footer";
import Brands from "./Components/Brands/Brands";
import MotorCycle from "./Components/MotorCycle/MotorCycle";
import Scooter from "./Components/Scooter/Scooter";
import Costume from "./Components/Costume/Costume";
import Accessory from "./Components/Accessory/Accessory";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import Support from "./Components/Support/Support";
import Models from "./Components/Models/Models";
import Cross from "./Components/Cross/Cross";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/motorcycle" element={<MotorCyclePage />} />
        <Route path="/scooter" element={<ScooterPage />} />
        <Route path="/costume" element={<CostumePage />} />
        <Route path="/accessory" element={<AccessoryPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/cross" element={<CrossPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <Category />
      <Sports />
      <Cruiser />
      <Offroad />
      <Brands />
    </div>
  );
}

function MotorCyclePage() {
  return (
    <div>
      <MotorCycle />
    </div>
  );
}

function ScooterPage() {
  return (
    <div>
      <Scooter />
    </div>
  );
}

function CostumePage() {
  return (
    <div>
      <Costume />
    </div>
  );
}

function AccessoryPage() {
  return (
    <div>
      <Accessory />
    </div>
  );
}

function SupportPage() {
  return (
    <div>
      <Support />
    </div>
  );
}

function ModelsPage() {
  return (
    <div>
      <Models />
    </div>
  );
}

function CrossPage() {
  return (
    <div>
      <Cross />
    </div>
  );
}

export default App;
