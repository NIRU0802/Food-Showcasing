import React from "react";
import {
  Typography,
  Link as MuiLink,
  Divider,
  Box,
  TextField,
  Button,
  Container,
} from "@mui/material";
import {Grid} from "@mui/material/Grid";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#"  },
        { name: "Refund Policy", path: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "College Road, Nashik", path: "#" },
        { name: "info@foodie.com", path: "mailto:info@foodie.com" },
        { name: "+1 (0123) 123-4567", path: "tel:+0123456789" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000814", //darker blue
        color: "black",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" mb={4} color="white">
              Foodie
            </Typography>
            <Typography variant="body1" mb={4} color="white">
              Delivering delicious food with love since 2010. Our mission is to
              provide quality meals that satisfy your cravings.
            </Typography>
            <Box display="flex" gap={2}>
              <MuiLink href="#" color="inherit" sx={{ color: "white" }}>
                <FacebookIcon fontSize="medium" />
              </MuiLink>
              <MuiLink href="#" color="inherit" sx={{ color: "white" }}>
                <InstagramIcon fontSize="medium" />
              </MuiLink>
              <MuiLink href="#" color="inherit" sx={{ color: "white" }}>
                <TwitterIcon fontSize="medium" />
              </MuiLink>
            </Box>
          </Grid>

          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={4}
                color="white"
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex} mb={1.5}>
                    <Link href={link.path} passHref legacyBehavior>
                      <MuiLink
                        color="inherit"
                        sx={{
                          textDecoration: "none",
                          color: "white",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {link.name}
                      </MuiLink>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid item xs={12} sm={4} md={2}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={4}
              color="white"
            >
              Newsletter
            </Typography>
            <Typography variant="body1" mb={4} color="white">
              Subscribe to get updates on new dishes and special offers.
            </Typography>
            <Box display="flex">
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                sx={{
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "background.paper",
                    borderRadius: "4px 0 0 4px",
                  },
                }}
              />
              <Button
                variant="contained"
                color="error"
                sx={{
                  borderRadius: "0 4px 4px 0",
                  px: 3,
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, bgcolor: "rgba(255,255,255,0.1)" }} />

        <Typography variant="body2" textAlign="center" color="rgba(255, 255, 255, 0.6)">
          © {new Date().getFullYear()} Foodie. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
