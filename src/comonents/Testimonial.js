import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Testimonial() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 mt-[4rem] sm:px-8 lg:px-12'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-extrabold text-gray-900'>
          What Our Patients Say
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Hear from those who have experienced our care firsthand.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {loading ? (
          Array(3).fill().map((_, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
              <Skeleton circle={true} height={60} width={60} className='mb-4 mx-auto' />
              <Skeleton height={20} width={150} className='mb-2 mx-auto' />
              <Skeleton count={3} />
            </div>
          ))
        ) : (
          <>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <img src='https://i.pinimg.com/236x/5c/e7/e8/5ce7e8ad29847881ae20f7c3f84e85ee.jpg' alt='Patient' className='w-16 h-16 rounded-full mr-4' />
                <div>
                  <h3 className='text-xl font-semibold text-blue-800'>John Doe</h3>
                  <p className='text-gray-600'>Patient</p>
                </div>
              </div>
              <p className='text-gray-700'>
                "The care I received was exceptional. The staff were professional, and the facilities were top-notch. I felt supported throughout my treatment."
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <img src='https://i.pinimg.com/236x/91/1f/8e/911f8eaab8304ab4a4f06b82bcb1f59a.jpg' alt='Patient' className='w-16 h-16 rounded-full mr-4' />
                <div>
                  <h3 className='text-xl font-semibold text-blue-800'>Jane Smith</h3>
                  <p className='text-gray-600'>Patient</p>
                </div>
              </div>
              <p className='text-gray-700'>
                "I was thoroughly impressed with the level of care and attention I received. The team was attentive and made me feel comfortable every step of the way."
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <img src='https://i.pinimg.com/236x/8f/d2/5f/8fd25ff2cafab74f15208633b1a625f1.jpg' alt='Patient' className='w-16 h-16 rounded-full mr-4' />
                <div>
                  <h3 className='text-xl font-semibold text-blue-800'>Alice Johnson</h3>
                  <p className='text-gray-600'>Patient</p>
                </div>
              </div>
              <p className='text-gray-700'>
                "A wonderful experience from start to finish. The medical team was caring and provided excellent support throughout my stay."
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Testimonial;
