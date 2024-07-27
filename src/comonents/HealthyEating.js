import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaAppleAlt, FaCarrot, FaLeaf, FaFish } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

function HealthyEating() {
  const isLoading = false; // Toggle this to true to see the loading skeleton

  return (
    <section className='max-w-6xl mx-auto py-12 px-6 sm:px-8 lg:px-12 bg-gray-100 shadow-lg rounded-md'>
      {/* Header Section */}
      <div className='text-center mb-10'>
        {isLoading ? (
          <Skeleton height={40} width={300} className='mx-auto' />
        ) : (
          <h1 className='text-3xl font-bold text-blue-800'>
            Healthy Eating for Optimal Health
          </h1>
        )}
        {isLoading ? (
          <Skeleton height={20} width={400} className='mx-auto mt-4' />
        ) : (
          <p className='mt-4 text-lg text-gray-600'>
            Adopting a balanced diet is essential for overall well-being. Explore practical tips and meal plans to support your health journey.
          </p>
        )}
      </div>

      {/* Healthy Eating Tips */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Tip 1 */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaAppleAlt className='text-4xl text-green-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={180} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800 text-center'>
              Eat More Fruits
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-600'>
              Include a variety of fruits to boost vitamin intake and improve overall health.
            </p>
          )}
        </div>

        {/* Tip 2 */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaCarrot className='text-4xl text-orange-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={180} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800 text-center'>
              Include Vegetables
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-600'>
              Vegetables are rich in essential nutrients and should be included in your daily meals.
            </p>
          )}
        </div>

        {/* Tip 3 */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaLeaf className='text-4xl text-green-700 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={180} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800 text-center'>
              Choose Whole Grains
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-600'>
              Opt for whole grains instead of refined grains to improve fiber intake and support digestion.
            </p>
          )}
        </div>

        {/* Tip 4 */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          {isLoading ? (
            <Skeleton circle={true} height={60} width={60} className='mx-auto' />
          ) : (
            <FaFish className='text-4xl text-blue-600 mx-auto' />
          )}
          {isLoading ? (
            <Skeleton height={30} width={180} className='mt-4 mx-auto' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800 text-center'>
              Eat Lean Proteins
            </h3>
          )}
          {isLoading ? (
            <Skeleton count={2} className='mt-4' />
          ) : (
            <p className='mt-2 text-gray-600'>
              Include lean proteins like fish and poultry to support muscle health and maintain energy levels.
            </p>
          )}
        </div>
      </div>

      {/* Detailed Meal Plans */}
      <div className='mt-10'>
        {isLoading ? (
          <Skeleton height={40} width={250} className='mx-auto' />
        ) : (
          <h2 className='text-2xl font-semibold text-gray-800'>
            Detailed Meal Plans
          </h2>
        )}
        <div className='mt-6'>
          {isLoading ? (
            <Skeleton height={30} width={300} className='mt-4' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800'>Breakfast</h3>
          )}
          {isLoading ? (
            <Skeleton count={3} className='mt-2' />
          ) : (
            <ul className='list-disc pl-5 mt-2 text-gray-600'>
              <li>Oatmeal with fresh berries and a sprinkle of nuts.</li>
              <li>Greek yogurt with honey and chia seeds.</li>
              <li>Whole grain toast with avocado and a side of fruit.</li>
            </ul>
          )}
        </div>

        <div className='mt-6'>
          {isLoading ? (
            <Skeleton height={30} width={300} className='mt-4' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800'>Lunch</h3>
          )}
          {isLoading ? (
            <Skeleton count={3} className='mt-2' />
          ) : (
            <ul className='list-disc pl-5 mt-2 text-gray-600'>
              <li>Grilled chicken salad with a variety of veggies.</li>
              <li>Quinoa and black bean bowl with avocado.</li>
              <li>Turkey and spinach wrap with a side of fruit.</li>
            </ul>
          )}
        </div>

        <div className='mt-6'>
          {isLoading ? (
            <Skeleton height={30} width={300} className='mt-4' />
          ) : (
            <h3 className='text-lg font-semibold text-gray-800'>Dinner</h3>
          )}
          {isLoading ? (
            <Skeleton count={3} className='mt-2' />
          ) : (
            <ul className='list-disc pl-5 mt-2 text-gray-600'>
              <li>Salmon with steamed broccoli and sweet potatoes.</li>
              <li>Lentil soup with a side of whole grain bread.</li>
              <li>Stuffed bell peppers with lean ground turkey.</li>
            </ul>
          )}
        </div>
      </div>

      {/* Healthy Eating Checklist */}
      <div className='mt-10'>
        {isLoading ? (
          <Skeleton height={40} width={250} className='mx-auto' />
        ) : (
          <h2 className='text-2xl font-semibold text-gray-800'>
            Healthy Eating Checklist
          </h2>
        )}
        {isLoading ? (
          <Skeleton count={5} className='mt-4' />
        ) : (
          <div className='mt-4 text-gray-600'>
            <ul className='list-disc pl-5'>
              <li className='flex items-center'>
                <MdCheckCircle className='text-green-500 mr-2' />
                Drink plenty of water throughout the day.
              </li>
              <li className='flex items-center mt-2'>
                <MdCheckCircle className='text-green-500 mr-2' />
                Include a variety of colorful fruits and vegetables.
              </li>
              <li className='flex items-center mt-2'>
                <MdCheckCircle className='text-green-500 mr-2' />
                Choose whole grains over refined grains.
              </li>
              <li className='flex items-center mt-2'>
                <MdCheckCircle className='text-green-500 mr-2' />
                Limit processed foods and added sugars.
              </li>
              <li className='flex items-center mt-2'>
                <MdCheckCircle className='text-green-500 mr-2' />
                Incorporate lean proteins into your meals.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default HealthyEating;
