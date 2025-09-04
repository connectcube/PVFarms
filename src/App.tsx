import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import OutgrowerProgram from "./components/OutgrowerProgram";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  // Check if we're in Tempo environment and tempo-routes is available
  if (import.meta.env.VITE_TEMPO === "true") {
    try {
      const routes = require("tempo-routes").default;
      return (
        <Suspense fallback={<div>Loading...</div>}>
          {useRoutes(routes)}
        </Suspense>
      );
    } catch (error) {
      // Fallback to regular routes if tempo-routes is not available
      console.log("Tempo routes not available, using regular routes");
    }
  }

  // Regular routes for both production and development fallback
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outgrower-program" element={<OutgrowerProgram />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
