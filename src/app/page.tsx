import Image from "next/image";
import Navbar from "../components/Navbar";
import FoodCarousel from "../components/FoodCarousel";
import FoodMenu from "@/components/FoodMenu";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Navbar />
    <FoodCarousel />
    <FoodMenu />
    <Services />
    <Testimonials />
    <ContactSection />
    <Footer />
    </>
  );
}
