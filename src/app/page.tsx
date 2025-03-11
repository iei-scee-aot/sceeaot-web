import React from "react";
import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Divider from "./_components/Divider";
import Footer from "./_components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Fixed Divider and Header */}
      <div className="fixed top-[0.9375rem] w-full z-50 bg-black">
        <Divider />
        <div className="w-full flex justify-between items-center border-b-2">
          <div className="px-3 h-12"></div>
          <Header />
          <div className="px-3 h-12"></div>
        </div>
        <Divider />
      </div>

      {/* Navbar remains normal */}
      <Navbar />

      {/* Footer at exact 41.653125rem distance */}
      <div className="mt-[41.653125rem]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
