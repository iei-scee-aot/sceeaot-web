import React from "react";
import ImageSlider from "@/components/layout/ImageSlider";
import { Button } from "@/components/ui/button";

const Apps = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/desqmyb7h/image/upload/v1727869068/imageslider-1_g9lkde.jpg",
      title: "Test",
    },
    {
      url: "https://res.cloudinary.com/desqmyb7h/image/upload/v1727869386/imageslider-2_jyhrtt.jpg",
      title: "Test",
    },
    {
      url: "https://res.cloudinary.com/desqmyb7h/image/upload/v1727869068/imageslider-1_g9lkde.jpg",
      title: "Test",
    },
    {
      url: "https://res.cloudinary.com/desqmyb7h/image/upload/v1727869386/imageslider-2_jyhrtt.jpg",
      title: "Test",
    },
    {
      url: "https://res.cloudinary.com/desqmyb7h/image/upload/v1727869068/imageslider-1_g9lkde.jpg",
      title: "Test",
    },
  ];
  return (
    <main className="pt-24">
      <div className="w-full flex justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-yellow-400">
          Home to the COOLEST Students&#x2019; Chapter of all Time
        </h1>
      </div>
      <div>
        <ImageSlider slides={slides} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="p-20 w-[1200px]">
          <p className="text-sm">
            Welcome to the IEI Students&#x2019; Chapter of EE AOT! We&#x2019;re
            all about innovation, tech vibes, and leveling up the skills. Join
            us for cool workshops, epic events, and a community that&#x2019;s as
            electric as you are! Let&#x2019;s make waves together! ⚡
          </p>
        </div>
        <div className="mr-20 flex">
          <Button className="mr-5">Join Us</Button>
          <Button variant="outline">Explore Events</Button>
        </div>
      </div>
    </main>
  );
};

export default Apps;
