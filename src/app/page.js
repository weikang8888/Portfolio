"use client";
import { useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
// import Team from '@/components/Team'
// import Pricing from '@/components/Pricing'
// import Video from '@/components/Video'
// import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Education from '@/components/Education'
import ProgressScrolltop from '@/components/ProgressScrolltop'
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";

const Index = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return (
    <>
      <ParallaxProvider>
        <Preloader />
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Education/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <ProgressScrolltop/>
      </ParallaxProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        outerStyle={{
          border: "1px solid #ff2f00",
        }}
        innerStyle={{
          backgroundColor: "#ff2f00",
        }}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
    </>
  );
};
export default Index;
