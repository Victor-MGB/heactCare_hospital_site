import React, { useState, useEffect } from 'react';
import Header from '../navbar/Header';
import HeroSection from '../comonents/HeroSection';
import Vaccination from '../comonents/Vaccination';
import Doses from '../comonents/Doses';
import Testimonial from '../comonents/Testimonial';
import Article from '../comonents/Ariticle';
import FAQ from '../comonents/FAQ';
import Footer from '../comonents/Footer';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <>
    <Header />
    <HeroSection
        isLoading={isLoading}
        title="Welcome to Our Hospital Management System"
        description="Streamline your healthcare management with our comprehensive solutions designed for efficiency and care."
        buttonText="Explore Services"
        imageUrl="https://i.pinimg.com/236x/8b/e0/f2/8be0f209bc6f23aacffb27aa3c2b2e2d.jpg" // Replace with your image URL
      />
      <Vaccination />
        <Doses />
        <Testimonial />
        <Article />
        <FAQ />
        <Footer />
    </>
  )
}

export default Home