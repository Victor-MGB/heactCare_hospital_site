import React, { useState, useEffect } from 'react';
import { GiOverdose, GiSwirlString } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Doses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 sm:px-8 mt-[4rem] lg:px-12 shadow-md rounded-md'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {loading ? (
          Array(3).fill().map((_, index) => (
            <div key={index} className='flex flex-col items-center p-4 bg-blue-50 rounded-md shadow-sm'>
              <Skeleton circle={true} height={60} width={60} className='mb-4' />
              <Skeleton height={30} width={100} />
              <Skeleton height={20} width={150} className='mt-2' />
            </div>
          ))
        ) : (
          <>
            <div className='flex flex-col items-center p-4 bg-blue-50 rounded-md shadow-sm'>
              <GiOverdose className='text-5xl text-blue-600 mb-4' />
              <h2 className='text-4xl font-bold text-gray-900'>
                <CountUp end={73000} duration={2.5} />
              </h2>
              <p className='text-lg text-gray-700'>Full Doses Taken</p>
            </div>

            <div className='flex flex-col items-center p-4 bg-blue-50 rounded-md shadow-sm'>
              <GiSwirlString className='text-5xl text-blue-600 mb-4' />
              <h2 className='text-4xl font-bold text-gray-900'>
                <CountUp end={90000} duration={2.5} />
              </h2>
              <p className='text-lg text-gray-700'>First Doses Taken</p>
            </div>

            <div className='flex flex-col items-center p-4 bg-blue-50 rounded-md shadow-sm'>
              <IoCheckmarkDoneCircleSharp className='text-5xl text-blue-600 mb-4' />
              <h2 className='text-4xl font-bold text-gray-900'>
                <CountUp end={49} suffix='%' duration={2.5} />
              </h2>
              <p className='text-lg text-gray-700'>Vaccination Done</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Doses;
