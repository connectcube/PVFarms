import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import OutgrowerProgram from "./components/OutgrowerProgram";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* Tempo routes for development */}
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      {/* Main application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outgrower-program" element={<OutgrowerProgram />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Tempo routes for production */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
