// src/components/AboutHeroSection.js

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutHeroSection = ({ isLoading, title, description, buttonText, imageUrl }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100">
      {isLoading ? (
        <div className="text-center text-white">
          <Skeleton height={60} width={300} className="mb-4 mx-auto" />
          <Skeleton height={30} width={600} className="mb-6 mx-auto" />
          <Skeleton height={50} width={200} className="mx-auto" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative text-center px-4 py-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-transform transform hover:scale-105">
              {title}
            </h1>
            <p className="text-lg md:text-2xl text-white mb-6 transition-transform transform hover:scale-105">
              {description}
            </p>
            <a
              href="#contact"
              className="bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-400 transition duration-300 transform hover:scale-105"
            >
              {buttonText}
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutHeroSection;
