import React from "react";
import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Divider from "./_components/Divider";
import Footer from "./_components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col font-sans">
      {/* Fixed Divider and Header */}
      <div className="top-[0.9375rem] w-full z-50 bg-black">
        <Divider />
        <div className="w-full flex justify-between items-center border-b-2 border-white">
          <div className="px-3 h-12"></div>
          <Header />
          <div className="px-3 h-12"></div>
        </div>
      </div>

      <Divider />
<div className="w-full flex justify-center items-center border-b-2">
  <div className="px-3 border-r-[0.5px] min-h-56"></div>
  <div className=" flex-1 text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi saepe dolorem consequatur nobis hic culpa 
    veritatis cumque ipsa doloribus cum obcaecati quae, architecto maxime aliquam, dolore eum? Ratione, in!
  </div>

  <div className="px-3 border-l-[0.5px] min-h-56"></div>
</div>
<Divider />




      <div className="w-screen flex align-middle items-center border-b-2 min-h-56">
        <div className="px-3 border-r-[0.5px] min-h-56"></div>
        <div className="min-h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-11 border-b-[0.5px] overflow-y-hidden">
            <h1
              className="text-[49px] font-bold whitespace-nowrap text-ellipsis text-transparent bg-clip-text"
              style={{
                fontFamily: "KMR Apparat1",
                WebkitTextStroke: "1px #fec20c",
                lineHeight: "1.2",
              }}
            >
              About us
            </h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit text-[10px] ">
          <div className="w-screen border-b border-gray-300 ">
            <div className="bg-yellow-400 h-[3.125rem] w-[5.356875rem] text-center text-black py-2">
              MEET THE<br/>TEAM
            </div>
          </div>
          Welcome to the IEI Students' Chapter of Electrical Engineering! We may be the newest community on the block, but we’re definitely the most energetic and driven one. 

Our mission is to create a space where students can dive into both core and non-core topics, learn new skills, and push the limits of what they can achieve. We organize everything from hands-on workshops and ideathons to competitions and brainstorming sessions, all designed to spark creativity and innovation. 

It’s not just about textbooks here - it’s about real-world experiences and connecting with others who share the same passion for engineering. 

So, if you’re looking to learn, grow, and have a ton of fun, join us on this exciting journey! We can’t wait to see what we can achieve together.
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] min-h-56"></div>
        
      </div>
      <Divider />
    
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-11 border-b-[0.5px] overflow-y-hidden">
            <h1
              className="text-[49px] font-bold whitespace-nowrap text-ellipsis text-transparent bg-clip-text"
              style={{
                fontFamily: "KMR Apparat1",
                WebkitTextStroke: "1px #fec20c",
                lineHeight: "1.2",
              }}
            >
              Live Events
            </h1>
          </div>
          <div className=" flex flex-wrap justify-evenly h-fit ">
          <div className="w-screen border-b border-gray-300 ">
            <div className="bg-yellow-400 h-[3.125rem] w-[5.356875rem] text-center text-black text-[10px] py-2">
              VIEW ALL<br/>EVENTS
            </div>
          </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam soluta sequi ut exercitationem dicta
             reprehenderit quisquam animi, debitis sapiente at nihil! Quas, soluta voluptate error dolorem ad ipsa vero odio?
          </div>
        </div>
        <div className="px-3 border-l-[0.5px] min-h-56"></div>
        
      </div>
      <Divider />
    
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-11 border-b-[0.5px] overflow-y-hidden">
            <h1
              className="text-[49px] font-bold whitespace-nowrap text-ellipsis text-transparent bg-clip-text"
              style={{
                fontFamily: "KMR Apparat1",
                WebkitTextStroke: "1px #fec20c",
                lineHeight: "1.2",
              }}
            >
              From the HOD's Desk
            </h1>
          </div>

        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>
      <Divider />
    
      <div className="w-screen flex align-middle items-center border-b-2">
        <div className="px-3 border-r-[0.5px] h-56"></div>
        <div className="h-56 w-screen overflow-hidden text-center flex flex-col mx-auto ">
          <div className="h-11 border-b-[0.5px] overflow-y-hidden">
            <h1
              className="text-[49px] font-bold whitespace-nowrap text-ellipsis text-transparent bg-clip-text"
              style={{
                fontFamily: "KMR Apparat1",
                WebkitTextStroke: "1px #fec20c",
                lineHeight: "1.2",
              }}
            >
              FAQs
            </h1>
          </div>

        </div>
        <div className="px-3 border-l-[0.5px] h-56"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <footer className="mb-20 mt-5 w-full bg-[#0e0c0c] border-t border-gray-700">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;