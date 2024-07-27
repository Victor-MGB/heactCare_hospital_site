import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MdBloodtype } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { TbVaccine } from "react-icons/tb";
import { SiGooglechronicle } from "react-icons/si";
import { GiNightSleep } from "react-icons/gi";

function Vaccination1() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 shadow-md rounded-md'>
      {loading ? (
        <>
          <div className='mb-12 text-center'>
            <Skeleton height={36} width={250} />
            <Skeleton height={24} width={400} style={{ marginTop: '16px' }} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-10'>
              {Array(3).fill().map((_, index) => (
                <div key={index} className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                  <Skeleton circle={true} height={48} width={48} className='mr-6' />
                  <div>
                    <Skeleton height={20} width={100} />
                    <Skeleton height={28} width={200} style={{ marginTop: '8px' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className='space-y-10'>
              {Array(3).fill().map((_, index) => (
                <div key={index} className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                  <Skeleton circle={true} height={48} width={48} className='mr-6' />
                  <div>
                    <Skeleton height={20} width={100} />
                    <Skeleton height={28} width={200} style={{ marginTop: '8px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='mb-12 text-center'>
            <h3 className='text-4xl font-extrabold text-gray-800'>
              Prepare for Your <span className='text-blue-600'>Vaccination</span>
            </h3>
            <p className='mt-4 text-lg text-gray-700'>
              Follow these important steps to ensure you are fully prepared and healthy for your vaccination.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-10'>
              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <MdBloodtype className='text-5xl text-red-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Check your</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Blood Pressure</span>
                </div>
              </div>

              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <GiMedicines className='text-5xl text-green-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Check your</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Medicine Problems</span>
                </div>
              </div>

              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <FaBabyCarriage className='text-5xl text-yellow-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Check your</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Minimum Age</span>
                </div>
              </div>
            </div>

            

            <div className='space-y-10'>
              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <TbVaccine className='text-5xl text-blue-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Check your</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Vaccines</span>
                </div>
              </div>

              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <SiGooglechronicle className='text-5xl text-purple-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Check your</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Chronic Diseases</span>
                </div>
              </div>

              <div className='flex items-center p-4 bg-white rounded-md shadow-sm'>
                <GiNightSleep className='text-5xl text-indigo-500 mr-6' />
                <div>
                  <small className='text-sm text-gray-600'>Get</small>
                  <span className='block text-2xl font-semibold text-gray-900'>Plenty of Sleep</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Vaccination1;
