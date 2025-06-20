"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "#menu" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#d90429" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="/" passHref>
            <Box className="flex items-center cursor-pointer">
              <FastfoodIcon sx={{ color: "white", fontSize: 28 }} />
              <span className="ml-2 text-xl font-bold text-white">Foodie</span>
            </Box>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-yellow-300 font-medium transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
          className="bg-dark h-full"
        >
          <List>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemText primary={item.name} className="text-white" />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
