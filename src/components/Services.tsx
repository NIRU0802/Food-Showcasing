"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpaIcon from "@mui/icons-material/Spa";
import LockIcon from "@mui/icons-material/Lock";

const Services: React.FC = () => {
  const services = [
    {
      icon: <LocalDiningIcon fontSize="large" color="error" />,
      title: "Quality Food",
      description: "We use only the finest ingredients to prepare our dishes",
    },
    {
      icon: <DeliveryDiningIcon fontSize="large" color="error" />,
      title: "Fast Delivery",
      description: "Get your food delivered quickly and still hot",
    },
    {
      icon: <EmojiFoodBeverageIcon fontSize="large" color="error" />,
      title: "Diverse Menu",
      description: "Wide variety of dishes to satisfy all tastes",
    },
    {
      icon: <SupportAgentIcon fontSize="large" color="error" />,
      title: "Customer Support",
      description: "24/7 support for all your food-related queries",
    },
    {
      icon: <SpaIcon fontSize="large" color="error" />,
      title: "Healthy Options",
      description: "Nutritious meals tailored to your lifestyle",
    },
    {
      icon: <LockIcon fontSize="large" color="error" />,
      title: "Secure Payments",
      description: "Your transactions are encrypted and safe",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" id="services">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 6,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            color="black"
            sx={{ textTransform: "uppercase" }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            color="black"
            sx={{ maxWidth: "md", mb: 4, textTransform: "capitalize" }}
          >
            We provide excellent food services with the highest quality
            standards
          </Typography>
        </Box>

        {/* Services Cards Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #f8f9fa, #fff0f0)",
                borderRadius: 2,
                boxShadow: 1,
                width: "100%",
                maxWidth: 300,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
            >
              <Box sx={{ mb: 3, color: "black" }}>{service.icon}</Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                color="black"
                sx={{ textTransform: "uppercase" }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" color="black">
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
