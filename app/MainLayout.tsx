/** @format */

import React from "react";
import Navbar from "./components/navbar"; // Import the Navbar component
import Footer from "./components/footer"; // Import the Footer component

interface MainLayoutProps {
  children: React.ReactNode; // This prop will contain the content of each specific page
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Render the Navbar component */}
      <main className="flex-grow">{children}</main>{" "}
      {/* Inject the content of each specific page */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default MainLayout;
