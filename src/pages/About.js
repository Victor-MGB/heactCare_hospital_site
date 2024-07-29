import React,{useState,useEffect} from 'react'
import AboutHeroSection from '../comonents/AboutHeroSection'
import WelcomeUs from '../comonents/WelcomeUs';
import Header from '../navbar/Header';
import Footer from '../comonents/Footer';

function About() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <>
    <Header />
        <div className="About">
      <AboutHeroSection
        isLoading={isLoading}
        title="About Our Hospital"
        description="Learn more about our commitment to providing exceptional healthcare services to our community."
        buttonText="Contact Us"
        imageUrl="https://i.pinimg.com/236x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg" // Replace with your image URL
      />
      </div>
      <WelcomeUs />

      <Footer />
    </>
  )
}

export default About