"use client";
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { menuData } from "../Data/menuData";

const FoodMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Pizza");
  const [currentSlide, setCurrentSlide] = useState<number>(0); // Track active slide

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
    setCurrentSlide(0); // reset slide on category change
  };

  const getCurrentItems = () =>
    menuData[activeCategory as keyof typeof menuData] || [];

  const items = getCurrentItems();

  return (
    <div className="py-12 bg-white" id="menu">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Typography
          variant="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="black"
          sx={{ textTransform: "uppercase" }}
        >
          Our Menu
        </Typography>
        <p className="text-center text-gray-600 mb-8 capitalize">
          Select a category to view items
        </p>

        {/* Category Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {Object.keys(menuData).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "contained" : "outlined"}
              onClick={() => handleCategoryChange(category)}
              sx={{
                textTransform: "Uppercase",
                fontWeight: "bold",
                fontSize: "1rem",
                px: 3,
                py: 1,
                color: activeCategory === category ? "white" : "error.main",
                borderColor: "error.main",
                ...(activeCategory === category && {
                  bgcolor: "error.main",
                  "&:hover": { bgcolor: "error.dark" },
                }),
                "&:hover": {
                  borderColor: "error.dark",
                  color: "black",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Mobile View: Carousel with arrows and manual pagination */}
        <div className="relative block md:hidden">
          <Carousel
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
            showThumbs={false}
            showStatus={false}
            showIndicators={false} // hide default indicators
            infiniteLoop
            autoPlay
            interval={3500}
            swipeable
            emulateTouch
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute -left-0 top-1/2 z-10 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
                >
                  ❮
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute -right-0 top-1/2 z-10 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
                >
                  ❯
                </button>
              )
            }
          >
            {items.map((item) => (
              <div key={item.id} className="px-4">
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 3,
                      "& .MuiTypography-root": {
                        color: "black",
                        fontWeight: "bold",
                      },
                    },
                    border: "1px solid",
                    borderColor: "error.light",
                  }}
                >
                  <CardMedia sx={{ position: "relative", height: 200 }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </CardMedia>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6">{item.name}</Typography>
                      <Chip
                        label={`₹${item.price.toFixed(2)}`}
                        color="error"
                        size="small"
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button fullWidth variant="contained" color="error">
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              </div>
            ))}
          </Carousel>

          {/* 🔴 Manual Pagination Outside the Carousel */}
          <div className="flex justify-center mt-6">
            {items.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-colors ${
                  currentSlide === index ? "bg-red-600" : "bg-red-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Grid Layout */}
        <Box
          className="hidden md:grid"
          sx={{
            gridTemplateColumns: {
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: 3,
          }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 3,
                },
                "&:hover .item-name": {
                  fontWeight: "bold",
                  color: "black",
                },
                "&:hover .item-price": {
                  fontWeight: "bold",
                },
                "&:hover .item-description": {
                  fontWeight: 400,
                  color: "black",
                },
                border: "1px solid",
                borderColor: "error.light",
              }}
            >
              <CardMedia sx={{ position: "relative", height: 180 }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </CardMedia>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" className="item-name">
                    {item.name}
                  </Typography>
                  <Chip
                    label={`₹${item.price.toFixed(2)}`}
                    color="error"
                    size="small"
                    className="item-price"
                  />
                </Box>
                <Typography
                  className="item-description"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {item.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "error.main",
                    color: "white",
                    fontWeight: "normal",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "error.main",
                      fontWeight: "bold",
                      border: "1px solid",
                      borderColor: "error.main",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default FoodMenu;
