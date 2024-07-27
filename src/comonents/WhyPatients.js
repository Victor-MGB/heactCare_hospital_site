import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GrStatusGood } from "react-icons/gr";
import { useSpring, animated } from '@react-spring/web';
import OtherReason from './OtherReason';

const reasons = [
  "Expert and compassionate care",
  "State-of-the-art facilities",
  "24/7 emergency services",
  "Highly skilled medical staff",
  "Personalized patient care"
];

const WhyPatients = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(-20px)' : 'translateY(0)',
    config: { duration: 500 },
  });

  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          {loading ? (
            <Skeleton height={300} className="rounded-lg" />
          ) : (
            <animated.img
              src="https://i.pinimg.com/236x/02/46/4e/02464e91ee41cf31a268885a7b323d89.jpg"
              alt="Why Patients Choose Our Hospital"
              className="w-full rounded-lg shadow-lg"
              style={fadeIn}
            />
          )}
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          {loading ? (
            <div className="space-y-4">
              <Skeleton height={30} width={200} />
              <Skeleton count={5} height={20} />
            </div>
          ) : (
            <animated.div style={fadeIn}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Patients Choose Our Hospital
              </h2>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <GrStatusGood className="text-blue-700 text-2xl mr-4" />
                    <p className="text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </animated.div>
          )}
        </div>
      </div>
    </section>

    <OtherReason />
    </>
  );
}

export default WhyPatients;
