import React, { useState, useEffect } from 'react';
import { FaAsterisk } from "react-icons/fa";
import { ImMug } from "react-icons/im";
import { MdOutlineVaccines } from "react-icons/md";
import { Transition } from "@headlessui/react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Vaccination1 from '../comonents/Vaccination1'

function Vaccination() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleShowMore1 = () => setShowMore1(!showMore1);
  const toggleShowMore2 = () => setShowMore2(!showMore2);
  const toggleShowMore3 = () => setShowMore3(!showMore3);

  if (loading) {
    return (
      <section className="p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <Skeleton height={30} width={250} className="mb-4" />
          <Skeleton height={20} count={3} className="mb-6" />
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Skeleton height={30} width={30} className="mb-2" />
              <Skeleton height={20} width={150} className="mb-2" />
              <Skeleton height={20} count={3} className="mb-2" />
              <Skeleton height={20} width={80} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Skeleton height={30} width={30} className="mb-2" />
              <Skeleton height={20} width={150} className="mb-2" />
              <Skeleton height={20} count={3} className="mb-2" />
              <Skeleton height={20} width={80} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Skeleton height={30} width={30} className="mb-2" />
              <Skeleton height={20} width={150} className="mb-2" />
              <Skeleton height={20} count={3} className="mb-2" />
              <Skeleton height={20} width={80} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
    <section className="p-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Why do you have to be <span className='text-blue-700'>vaccinated?</span></h3>
        <p className="mb-6">
          Vaccinations are a crucial aspect of hospital management, ensuring the health and safety of patients and staff by preventing the spread of infectious diseases.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-customGreen p-4 rounded-lg shadow-md">
            <FaAsterisk className="text-blue-500 text-2xl mb-2" />
            <h4 className="text-xl text=black-500 font-semibold mb-2">Lower risk of spreading viruses</h4>
            <p className="mb-2">
              Getting vaccinated against diseases can lower the risk of getting and spreading viruses and diseases that cause illness. Vaccines can also help to prevent serious illness and complications.
              <Transition
                show={showMore1}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span> Regular vaccination helps in maintaining herd immunity, protecting those who cannot be vaccinated due to medical reasons.</span>
              </Transition>
            </p>
            <button onClick={toggleShowMore1} className="text-blue-500 hover:underline">
              {showMore1 ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <ImMug className="text-blue-500 text-2xl mb-2" />
            <h4 className="text-xl font-semibold mb-2">Build immunity against the viruses</h4>
            <p className="mb-2">
              While all the above-mentioned tips will definitely help, the need of the hour is a quick boost to your immune system to keep fighting viruses.
              <Transition
                show={showMore2}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span> Immunization strengthens your body’s natural defenses and prepares it to fight infections more effectively.</span>
              </Transition>
            </p>
            <button onClick={toggleShowMore2} className="text-blue-500 hover:underline">
              {showMore2 ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <MdOutlineVaccines className="text-blue-500 text-2xl mb-2" />
            <h4 className="text-xl font-semibold mb-2">Vaccines will help you to stay healthy</h4>
            <p className="mb-2">
              Vaccinate throughout your life to protect against many infections. If you skip vaccines, you leave yourself vulnerable to illness and critical diseases.
              <Transition
                show={showMore3}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span> Regular vaccinations can prevent outbreaks of diseases and contribute to overall public health safety.</span>
              </Transition>
            </p>
            <button onClick={toggleShowMore3} className="text-blue-500 hover:underline">
              {showMore3 ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </section>

    <Vaccination1/>
    </>
  );
}

export default Vaccination;
