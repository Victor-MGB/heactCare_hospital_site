// src/components/HeroSection.js

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeroSection = ({ isLoading, title, description, buttonText, imageUrl }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Skeleton height={60} width={300} className="mb-4 mx-auto" />
          <Skeleton height={30} width={600} className="mb-6 mx-auto" />
          <Skeleton height={50} width={200} className="mx-auto" />
        </div>
      ) : (
        <>
          <img
            src={imageUrl}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <div className="text-center px-4 py-8 bg-black bg-opacity-60 top-[20rem] absolute rounded-lg shadow-lg">
              <h1 className="text-1xl md:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-sm md:text-1xl font-bold mb-6">{description}</p>
              <a
                href="#contact"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-400 transition duration-300"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
