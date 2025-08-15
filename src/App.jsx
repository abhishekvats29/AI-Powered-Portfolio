import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing page
import Home from "./Home";

// import Home from "./pages/Home";



// Personal section
import Personal from "./pages/Personal";
import NavbarPersonal from "./pages/NavbarPersonal";
import FooterPersonal from "./pages/FooterPersonal";

// Professional section
import Professional from "./components/Professional";
import NavbarProfessional from "./components/NavbarProfessional";
import FooterProfessional from "./components/FooterProfessional";

function App() {
  return (
    <Routes>
      {/* Home - No navbar or footer */}
      <Route path="/" element={<Home />} />

      {/* Personal Page - Only Personal navbar and footer */}
      <Route
        path="/personal"
        element={
          <>
            <NavbarPersonal />
            <Personal />
            <FooterPersonal />
          </>
        }
      />

      {/* Professional Page - Only Professional navbar and footer */}
      <Route
        path="/professional"
        element={
          <>
            <NavbarProfessional />
            <Professional />
            <FooterProfessional />
          </>
        }
      />
    </Routes>
  );
}

export default App;
