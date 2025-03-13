import React from "react";
import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Divider from "./_components/Divider";
import Footer from "./_components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Fixed Divider and Header */}
      <div className="top-[0.9375rem] w-full z-50 bg-black">
        <Divider />
        <div className="w-full flex justify-between items-center border-b-2">
          <div className="px-3 h-12"></div>
          <Header />
          <div className="px-3 h-12"></div>
        </div>
        <Divider />
      </div>

      {/* Content Wrapper (Flex-grow to fill space) */}
      <div className="flex-grow p-6 text-white"> {/* mb-10 = 2.5rem */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio minus fugit consectetur optio voluptatem ab quasi. 
        Quia atque obcaecati ex maxime vero quos incidunt quidem? Non architecto tenetur ducimus. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maiores culpa dolorem sunt aliquid cum, expedita maxime voluptas, asperiores nisi et sint, necessitatibus omnis! 
        Cum provident temporibus voluptatem laboriosam. Accusamus, exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique omnis dolorem atque, animi molestias dignissimos minima porro reiciendis dolorum sapiente quasi aliquam voluptatibus 
        molestiae laudantium qui debitis alias non pariatur?
      </div>

      {/* Navbar remains normal */}
      <Navbar />

      {/* Footer (No extra margins) */}
      <footer className="mb-20 mt-5 w-full bg-[#0e0c0c] border-t border-[#747474]/30">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
