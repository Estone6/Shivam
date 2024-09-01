import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import LaunchingSoon from "@/components/LaunchingSoon";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Unicorn Academy: Empowering IT Careers with Expert Training",
  description: "Join Tech Unicorn Academy for expert-led online courses in IT, including programming, web development, and data science. Unlock your potential with flexible learning options and career support. Enroll today to take your first step towards a successful tech career.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <LaunchingSoon />
      {/* <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
