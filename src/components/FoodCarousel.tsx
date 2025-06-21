"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import "../app/globals.css";

const FullPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

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
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
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

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-screen w-full">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Red Pagination Dots */}
      <div className="custom-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2" />

      {/* Styles for Red Dots */}
      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background-color: #fca5a5; /* red-300 */
          cursor: pointer;
          margin: 0 4px;
        }
        .custom-bullet-active {
          background-color: #dc2626; /* red-600 */
        }
        .swiper-pagination-bullet {
          background-color: #fca5a5; /* red-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #dc2626; /* red-600 */
        }
      `}</style>
    </div>
  );
};

export default FullPageCarousel;
