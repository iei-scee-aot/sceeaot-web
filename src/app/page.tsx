import React from "react";
import ImageSlider from "@/components/layout/ImageSlider";

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
      <div>
        <ImageSlider slides={slides} />
      </div>
    </main>
  );
};

export default Apps;
