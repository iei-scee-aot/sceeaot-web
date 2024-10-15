"use client"; 

import React, { useState, useEffect } from "react";

const EventsPage = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === 3 ? 0 : prevDots + 1));
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  
  const text = `Coming Soon${'.'.repeat(dots)}`;

  return (
    <div className="w-full min-h-screen flex justify-center items-center text-center">
      <div className="font-bold text-yellow-300 text-3xl">
        {text}
      </div>
    </div>
  );
};

export default EventsPage;
