import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing page
import Home from "./pages/Home";

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
      {/* Home - No navbars or footers */}
      <Route path="/" element={<Home />} />

      {/* Personal Page - Shows only Personal navbar/footer */}
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

      {/* Professional Page - Shows only Professional navbar/footer */}
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
