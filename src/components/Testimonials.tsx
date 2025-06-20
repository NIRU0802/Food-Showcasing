"use client";
import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Testimonial data
const testimonials = [
  {
    name: "Aarav Mehta",
    message: "Absolutely delicious food and fast delivery!",
    rating: 5,
    avatar: "/avatars/avatar1.jpg",
  },
  {
    name: "Sara Ali",
    message: "Great experience. Loved the taste and quality.",
    rating: 4,
    avatar: "/avatars/avatar2.jpg",
  },
  {
    name: "Devansh Rao",
    message: "Affordable, tasty, and very satisfying.",
    rating: 5,
    avatar: "/avatars/avatar3.jpg",
  },
  {
    name: "Meera Kapoor",
    message: "Truly top-notch service and food quality!",
    rating: 5,
    avatar: "/avatars/avatar4.jpg",
  },
  {
    name: "Ananya Joshi",
    message: "Fresh, hygienic, and flavorful. Love it!",
    rating: 4,
    avatar: "/avatars/avatar5.jpg",
  },
  {
    name: "Karan Singh",
    message: "Very reliable and tasty. Would order again.",
    rating: 5,
    avatar: "/avatars/avatar6.jpg",
  },
  {
    name: "Riya Sharma",
    message: "The best food delivery I've used recently.",
    rating: 5,
    avatar: "/avatars/avatar7.jpg",
  },
  {
    name: "Ishaan Desai",
    message: "Fantastic customer support and service!",
    rating: 4,
    avatar: "/avatars/avatar8.jpg",
  },
];

// Utility to group testimonials into 4 per slide
const groupTestimonials = (arr: typeof testimonials, size: number) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const grouped = groupTestimonials(testimonials, 4);

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to right, #fff5f5, #ffe9e9)",
      }}
      id="testimonials"
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color="black"
        sx={{ mb: 6, textTransform: "uppercase" }}
      >
        Customer Reviews
      </Typography>

      <Box className="relative">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={6000}
          swipeable
          emulateTouch
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
              >
                ❮
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
              >
                ❯
              </button>
            )
          }
        >
          {grouped.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8"
            >
              {group.map((t, i) => (
                <Box
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 border border-red-100 hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                >
                  {/* Avatar */}
                  <Avatar
                    src={t.avatar}
                    alt={t.name}
                    sx={{ width: 70, height: 70, mb: 2 }}
                  />

                  {/* Name */}
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="error"
                    className="mb-1"
                  >
                    {t.name}
                  </Typography>

                  {/* Star Rating */}
                  <Box className="flex justify-center mb-2 text-red-500 text-lg">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx}>{idx < t.rating ? "★" : "☆"}</span>
                    ))}
                  </Box>

                  {/* Message */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic", fontWeight: 500 }}
                  >
                    “{t.message}”
                  </Typography>
                </Box>
              ))}
            </div>
          ))}
        </Carousel>

        {/* Red Pagination Dots */}
        <Box className="flex justify-center mt-6">
          {grouped.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all ${
                currentSlide === idx
                  ? "bg-red-600"
                  : "bg-red-300 hover:bg-red-500"
              }`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
