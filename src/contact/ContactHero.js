// components/HeroSection.js
import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included
import Header from '../navbar/Header';
import ContactForm from './ContactForm';

const ContactHero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    <Header />
    <section className="relative h-[400px] bg-gray-800 text-white flex items-center justify-center">
      <img
        src="https://i.pinimg.com/564x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg" // Replace with your image URL
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch With Us</h1>
        <p className="text-lg mb-6">
          {showMore
            ? "We are here to assist you with any inquiries or issues. Our team of experts is always ready to provide you with the best possible service. Feel free to reach out to us at any time. Our commitment to your satisfaction is our top priority."
            : "We are here to assist you with any inquiries or issues. Reach out to us for prompt support."}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </section>

    <ContactForm />
    </>
  );
};

export default ContactHero;
