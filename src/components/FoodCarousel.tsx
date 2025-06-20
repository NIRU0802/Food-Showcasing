"use client";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const FullPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80",
      title: "Big Burger",
      description: "Burger",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/close-up-chocolate-dessert-with-sugar-powder_23-2148628383.jpg",
      title: "Premium Lava Cake",
      description: "Lava Cake",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1656936632096-59fcacae533f?q=80",
      title: "Iced Tea",
      description: "Iced Lemon Tea",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg",
      title: "Pasta Bowl",
      description: "Pasta",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-screen">
      {/* Custom Arrows */}
      <button
        onClick={handlePrev}
        className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
      >
        ❯
      </button>

      {/* Carousel */}
      <Carousel
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={5000}
        stopOnHover={false}
        transitionTime={1000}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase">
                  {item.title}
                </h1>
                <p className="text-xl sm:text-2xl mb-8 capitalize">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-red-600" : "bg-red-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageCarousel;
