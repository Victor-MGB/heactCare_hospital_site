import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Article() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 bg-white'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-extrabold text-gray-800'>
          Latest Articles
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Stay updated with the latest news and insights from our healthcare professionals.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {loading ? (
          Array(3).fill().map((_, index) => (
            <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <Skeleton height={200} />
              <div className='mt-4'>
                <Skeleton height={30} width={150} />
                <Skeleton count={3} className='mt-2' />
              </div>
            </div>
          ))
        ) : (
          <>
            <article className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <img src='https://i.pinimg.com/736x/9b/65/18/9b6518bde168feefa324db1fc088d5ef.jpg' alt='Article 1' className='w-full h-48 object-cover rounded-md' />
              <div className='mt-4'>
                <h3 className='text-2xl font-semibold text-gray-800'>Understanding Diabetes Management</h3>
                <p className='mt-2 text-gray-600'>
                  Diabetes management is crucial for maintaining overall health. Learn about the best practices and latest research in this comprehensive guide.
                </p>
                <Link to='/diabetes-management' className='mt-4 inline-block text-blue-600 hover:underline'>
                  Read More
                </Link>
              </div>
            </article>

            <article className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <img src='https://i.pinimg.com/736x/86/26/6d/86266dc2c4792a0905f8f9f4396d11b3.jpg' alt='Article 2' className='w-full h-48 object-cover rounded-md' />
              <div className='mt-4'>
                <h3 className='text-2xl font-semibold text-gray-800'>The Importance of Regular Check-ups</h3>
                <p className='mt-2 text-gray-600'>
                  Regular check-ups are essential for early detection and prevention of health issues. Discover why staying on top of your health matters.
                </p>
                <Link to='/regular-checkups' className='mt-4 inline-block text-blue-600 hover:underline'>
                  Read More
                </Link>
              </div>
            </article>

            <article className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <img src='https://i.pinimg.com/236x/a0/04/3e/a0043e49da863a0d0e75e72194f7942d.jpg' alt='Article 3' className='w-full h-48 object-cover rounded-md' />
              <div className='mt-4'>
                <h3 className='text-2xl font-semibold text-gray-800'>Healthy Eating for a Better Life</h3>
                <p className='mt-2 text-gray-600'>
                  Eating a balanced diet is key to maintaining good health. Explore tips and recipes to improve your eating habits.
                </p>
                <Link to='/healthy-eating' className='mt-4 inline-block text-blue-600 hover:underline'>
                  Read More
                </Link>
              </div>
            </article>
          </>
        )}
      </div>
    </section>
  );
}

export default Article;
