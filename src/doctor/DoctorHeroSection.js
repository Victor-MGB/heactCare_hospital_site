import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import DoctorsSection from './DoctorsSection';

const DoctorHeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an image load delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="relative w-full h-screen bg-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src="https://i.pinimg.com/236x/85/b4/61/85b46113f07f967e02cca151f7807d48.jpg"
            alt="Doctors"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        {isLoading ? (
          <>
            <Skeleton width={300} height={50} className="mb-4" />
            <Skeleton width={500} height={20} />
          </>
        ) : (
          <div>
            <h2 className="text-4xl md:text-6xl text-blue-700 uppercase font-bold mb-4">
              Meet Our Leading Specialists
            </h2>
            <p className="text-lg text-black font-bold md:text-xl">
              Our team of experienced doctors and medical professionals are here to provide top-notch care and support.
              Whether you need a routine check-up or specialized treatment, we are here to assist you every step of the way.
            </p>
          </div>
        )}
      </div>
    </section>

    <DoctorsSection />
    </>
  );
}

export default DoctorHeroSection;
