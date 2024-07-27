import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaHeartbeat, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

function RegularCheckups() {
  const isLoading = false; // Toggle this to true to see the loading skeleton

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 bg-white shadow-md rounded-md'>
      {/* Header Section */}
      <div className='text-center mt-12'>
        {isLoading ? (
          <Skeleton height={40} width={300} className='mx-auto' />
        ) : (
          <h1 className='text-4xl font-extrabold text-gray-800'>
            Importance of Regular Checkups
          </h1>
        )}
        {isLoading ? (
          <Skeleton height={20} width={500} className='mx-auto mt-4' />
        ) : (
          <p className='mt-4 text-lg text-gray-700'>
            Regular checkups are essential for maintaining your overall health and well-being. They help in the early detection of potential health issues and ensure that you are on track with preventive measures.
          </p>
        )}
      </div>

      {/* Checkups Overview */}
      <div className='grid grid-cols-1 mt-[4rem] md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {/* Card 1 */}
        <div className='bg-blue-50 p-6 rounded-md shadow-md'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaHeartbeat className='text-4xl text-blue-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={200} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-xl font-semibold text-gray-800 text-center'>
              Heart Health
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-700'>
              Regular heart checkups help in monitoring your cardiovascular health and preventing heart-related issues.
            </p>
          )}
        </div>

        {/* Card 2 */}
        <div className='bg-blue-50 p-6 rounded-md shadow-md'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaCalendarCheck className='text-4xl text-green-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={200} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-xl font-semibold text-gray-800 text-center'>
              Annual Exams
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-700'>
              Annual exams are crucial for assessing overall health and catching any emerging health concerns early.
            </p>
          )}
        </div>

        {/* Card 3 */}
        <div className='bg-blue-50 p-6 rounded-md shadow-md'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaClipboardList className='text-4xl text-yellow-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={200} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-xl font-semibold text-gray-800 text-center'>
              Routine Screenings
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-700'>
              Routine screenings like blood tests and imaging are vital for tracking health changes and managing chronic conditions.
            </p>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className='mt-12 text-center'>
        {isLoading ? (
          <Skeleton height={40} width={250} className='mx-auto' />
        ) : (
          <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Schedule Your Checkup
          </button>
        )}
      </div>
    </section>
  );
}

export default RegularCheckups;
