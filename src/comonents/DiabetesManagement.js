import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function DiabetesManagement() {
  // Mock data for demonstration
  const isLoading = false; // Toggle this to true to see the loading skeleton

  return (
    <section className='max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 bg-white shadow-md rounded-md'>
      {/* Header Section */}
      <div className='mb-12 text-center'>
        {isLoading ? (
          <Skeleton height={40} width={300} className='mx-auto' />
        ) : (
          <h1 className='text-4xl font-extrabold text-gray-800'>
            Comprehensive Guide to Diabetes Management
          </h1>
        )}
        {isLoading ? (
          <Skeleton count={2} height={24} className='mt-4' />
        ) : (
          <p className='mt-4 text-lg text-gray-700'>
            Effective management of diabetes involves a holistic approach. Discover essential strategies, tips, and resources to help you manage your diabetes effectively.
          </p>
        )}
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Overview Section */}
        <div className='space-y-10'>
          {isLoading ? (
            <Skeleton height={200} className='rounded-md' />
          ) : (
            <img
              src='https://i.pinimg.com/236x/62/0a/b6/620ab66bc9955a135637c17151adaa89.jpg'
              alt='Diabetes Overview'
              className='w-full h-64 object-cover rounded-md'
            />
          )}

          <div className='bg-blue-50 p-6 rounded-md shadow-sm'>
            {isLoading ? (
              <Skeleton count={4} height={20} className='mb-4' />
            ) : (
              <>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  What is Diabetes?
                </h2>
                <p className='mt-2 text-gray-700'>
                  Diabetes is a chronic condition that affects how your body turns food into energy. It occurs when the body either doesn’t produce enough insulin or can’t use the insulin it produces effectively. Learn more about the different types of diabetes and their impacts.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Management Tips Section */}
        <div className='space-y-10'>
          <div className='bg-white p-6 rounded-md shadow-sm'>
            {isLoading ? (
              <Skeleton height={200} className='rounded-md' />
            ) : (
              <img
                src='https://i.pinimg.com/236x/c8/d1/bd/c8d1bd6019ef0f7386eff5f45dd1612a.jpg'
                alt='Management Tips'
                className='w-full h-64 object-cover rounded-md'
              />
            )}

            {isLoading ? (
              <Skeleton count={4} height={20} className='mt-4' />
            ) : (
              <div className='mt-4'>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  Effective Management Tips
                </h2>
                <ul className='list-disc pl-5 mt-4 text-gray-700'>
                  <li>Monitor blood glucose levels regularly</li>
                  <li>Follow a balanced diet rich in fiber and low in sugar</li>
                  <li>Exercise regularly to maintain a healthy weight</li>
                  <li>Take medications as prescribed by your healthcare provider</li>
                  <li>Attend regular medical check-ups</li>
                </ul>
              </div>
            )}
          </div>

          <div className='bg-blue-50 p-6 rounded-md shadow-sm'>
            {isLoading ? (
              <Skeleton count={4} height={20} className='mb-4' />
            ) : (
              <>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  Patient Testimonials
                </h2>
                <div className='mt-4'>
                  <blockquote className='italic text-gray-700'>
                    "Managing diabetes has been challenging, but with the right guidance and support, I’ve been able to control my blood sugar levels effectively."
                  </blockquote>
                  <footer className='mt-2 text-gray-500'>- John Doe</footer>
                </div>
                <div className='mt-4'>
                  <blockquote className='italic text-gray-700'>
                    "The tips and resources provided have made a significant difference in my daily routine. I feel more empowered to manage my diabetes."
                  </blockquote>
                  <footer className='mt-2 text-gray-500'>- Jane Smith</footer>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className='mt-12'>
        <div className='bg-white p-6 rounded-md shadow-sm'>
          {isLoading ? (
            <Skeleton height={200} className='rounded-md' />
          ) : (
            <h2 className='text-2xl font-semibold text-gray-800'>
              Frequently Asked Questions (FAQs)
            </h2>
          )}
          {isLoading ? (
            <Skeleton count={4} height={20} className='mt-4' />
          ) : (
            <div className='mt-4'>
              <h3 className='text-xl font-semibold text-gray-800'>
                What is the best way to monitor blood sugar levels?
              </h3>
              <p className='mt-2 text-gray-700'>
                The best way to monitor blood sugar levels is to use a glucose meter as recommended by your healthcare provider. Regular monitoring can help you keep track of your levels and make necessary adjustments to your management plan.
              </p>

              <h3 className='text-xl font-semibold text-gray-800 mt-6'>
                How often should I see my doctor?
              </h3>
              <p className='mt-2 text-gray-700'>
                It is generally recommended to visit your doctor every 3 to 6 months, or as advised by your healthcare provider. Regular check-ups help in managing and adjusting your treatment plan as needed.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Resources Section */}
      <div className='mt-12'>
        <div className='bg-blue-50 p-6 rounded-md shadow-sm'>
          {isLoading ? (
            <Skeleton count={4} height={20} className='mb-4' />
          ) : (
            <>
             {/* Resources Section */}
      <div className='mt-12'>
        <div className='bg-blue-50 p-6 rounded-md shadow-sm'>
          {isLoading ? (
            <Skeleton height={40} width={300} className='mx-auto' />
          ) : (
            <>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Additional Resources
              </h2>
              {isLoading ? (
                <Skeleton count={3} height={60} className='mt-4' />
              ) : (
                <div className='mt-4 space-y-6'>
                  {/* Resource Item 1 */}
                  <div className='bg-white p-6 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      Nutrition Guide for Diabetics
                    </h3>
                    <p className='mt-2 text-gray-700'>
                      A comprehensive guide on managing your diet to control blood sugar levels effectively.
                    </p>
                  </div>

                  {/* Resource Item 2 */}
                  <div className='bg-white p-6 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      Exercise Plans for Diabetes Management
                    </h3>
                    <p className='mt-2 text-gray-700'>
                      Explore various exercise routines to help maintain a healthy weight and manage diabetes.
                    </p>
                  </div>

                  {/* Resource Item 3 */}
                  <div className='bg-white p-6 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      Mental Health Support for Diabetics
                    </h3>
                    <p className='mt-2 text-gray-700'>
                      Access resources and support for managing the mental health aspects of living with diabetes.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DiabetesManagement;
