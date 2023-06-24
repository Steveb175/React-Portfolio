// Imports
import React, { useState } from "react";
import NavTabs from "./NavTabs.Js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

// Component
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
