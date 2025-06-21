"use client";
import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ContactSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center px-4" id="contact"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* 📬 Contact Form on Top */}
      <div className="relative z-10 w-full h-[500px] left-100 max-w-3xl flex justify-center md:justify-end">
        <div className="w-full md:w-[400px] p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20 text-white">
          <Typography
            variant="h5"
            fontWeight="bold"
            className="text-red-500 mb-6 text-center uppercase"
          >
            📞 Contact Us
          </Typography>
          <br />

          <form>
            {/* 👤 Name Field */}
            <TextField
              label="Your Name"
              fullWidth
              variant="outlined"
              required
              color="error"
              className="mb-4"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            {/* 📧 Email Field */}
            <TextField
              label="Your Email"
              fullWidth
              variant="outlined"
              type="email"
              required
              color="error"
              className="mb-4"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            {/* 💬 Message Field */}
            <TextField
              label="Your Message"
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              required
              color="error"
              className="mb-4"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            {/* 🚀 Submit Button */}
            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="error" size="large">
                Send Message
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
