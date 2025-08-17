import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing page
import Home from "./Home";

// Personal section
import Personal from "./pages/Personal";
import NavbarPersonal from "./pages/NavbarPersonal";
import FooterPersonal from "./pages/FooterPersonal";

// Professional section
import Professional from "./components/Professional";
import NavbarProfessional from "./components/NavbarProfessional";
import FooterProfessional from "./components/FooterProfessional";

// Import ViewReviews from src folder (not pages)
import ViewReviews from "./ViewReviews";

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

      {/* Reviews Page */}
      <Route path="/reviews" element={<ViewReviews />} />
    </Routes>
  );
}

export default App;
