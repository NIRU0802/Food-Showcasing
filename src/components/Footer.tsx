import React from "react";
import {
  Box,
  Typography,
  Link as MuiLink,
  Divider,
  Container,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: "Company",
      links: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "Refund Policy", path: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "College Road, Nashik", path: "#" },
        { label: "info@foodie.com", path: "mailto:info@foodie.com" },
        { label: "+91 12345 67890", path: "tel:+911234567890" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000814",
        color: "#fff",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={6}
          flexWrap="wrap"
        >
          {/* Brand Section */}
          <Box flex="1 1 250px">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Foodie
            </Typography>
            <Typography variant="body2" color="gray">
              Delivering delicious food with love since 2010. Quality meals,
              quick delivery.
            </Typography>
            <Box mt={2} display="flex" gap={2}>
              <MuiLink href="#" color="inherit">
                <FacebookIcon />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <InstagramIcon />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <TwitterIcon />
              </MuiLink>
            </Box>
          </Box>

          {/* Link Sections */}
          {linkSections.map((section, idx) => (
            <Box key={idx} flex="1 1 150px">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <Box key={i} mb={1}>
                  <Link href={link.path} passHref legacyBehavior>
                    <MuiLink
                      sx={{
                        color: "#ccc",
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  </Link>
                </Box>
              ))}
            </Box>
          ))}

          {/* Newsletter */}
          <Box flex="1 1 300px">
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="gray">
              Subscribe to get updates on new dishes and special offers.
            </Typography>
            <Box display="flex" mt={2}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "4px 0 0 4px",
                  "& input": { padding: "8px" },
                }}
              />
              <Button
                variant="contained"
                color="error"
                sx={{
                  borderRadius: "0 4px 4px 0",
                  px: 3,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography
          variant="body2"
          align="center"
          color="rgba(255, 255, 255, 0.6)"
        >
          © {new Date().getFullYear()} Foodie. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
