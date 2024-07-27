import React from 'react';
import { FaUserPlus, FaClinicMedical } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SiDeutschebank } from "react-icons/si";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { FaFaceSmileBeam } from "react-icons/fa6";

function OtherReason({ isLoading }) {
  return (
    <>
    <section className="p-8 bg-gray-100">
      <h3 className="text-3xl font-semibold mb-6 text-center">Many Reasons to Choose Our Hospital</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton height={80} />
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="60%" />
          </div>
        ) : (
          <>
            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaUserPlus className="text-blue-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Qualified Doctors</h3>
                <p className="text-gray-600 mt-2">
                  Our doctors are highly qualified and experienced, providing top-notch care and expertise in various medical fields.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <AiFillLike className="text-green-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Emergency Services</h3>
                <p className="text-gray-600 mt-2">
                  We provide immediate assistance and critical care to handle any emergency situations efficiently.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <SiDeutschebank className="text-red-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Blood Bank</h3>
                <p className="text-gray-600 mt-2">
                  Our well-stocked blood bank ensures that we have the necessary resources for all our patients' needs.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <RiCustomerServiceFill className="text-yellow-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">24x7 Service</h3>
                <p className="text-gray-600 mt-2">
                  We offer round-the-clock service to ensure that we are always available to cater to our patients' needs.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaClinicMedical className="text-purple-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Modern Clinic</h3>
                <p className="text-gray-600 mt-2">
                  Our clinic is equipped with the latest technology and facilities to provide the best healthcare experience.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <MdHealthAndSafety className="text-teal-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Comprehensive Health Care</h3>
                <p className="text-gray-600 mt-2">
                  We provide a wide range of healthcare services to address all your medical concerns under one roof.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>

    <section className="p-8 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">Our Achievements</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg animate-pulse">
              <Skeleton circle={true} height={50} width={50} className="mr-4" />
              <div className="flex flex-col items-center">
                <Skeleton width={50} height={20} className="mb-2" />
                <Skeleton width={70} height={20} />
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg animate-pulse">
              <Skeleton circle={true} height={50} width={50} className="mr-4" />
              <div className="flex flex-col items-center">
                <Skeleton width={50} height={20} className="mb-2" />
                <Skeleton width={70} height={20} />
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg animate-pulse">
              <Skeleton circle={true} height={50} width={50} className="mr-4" />
              <div className="flex flex-col items-center">
                <Skeleton width={50} height={20} className="mb-2" />
                <Skeleton width={70} height={20} />
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg animate-pulse">
              <Skeleton circle={true} height={50} width={50} className="mr-4" />
              <div className="flex flex-col items-center">
                <Skeleton width={50} height={20} className="mb-2" />
                <Skeleton width={70} height={20} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaUser className="text-blue-500 text-4xl mr-4" />
              <div className="text-center">
                <h4 className="text-2xl font-bold">652</h4>
                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaHeart className="text-red-500 text-4xl mr-4" />
              <div className="text-center">
                <h4 className="text-2xl font-bold">7652</h4>
                <p className="text-gray-600 mt-2">Heart Transplants</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <BiSolidLike className="text-green-500 text-4xl mr-4" />
              <div className="text-center">
                <h4 className="text-2xl font-bold">52</h4>
                <p className="text-gray-600 mt-2">Years of Experience</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaFaceSmileBeam className="text-yellow-500 text-4xl mr-4" />
              <div className="text-center">
                <h4 className="text-2xl font-bold">7652</h4>
                <p className="text-gray-600 mt-2">Well-Smiley Faces</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
    </>
  );
}

export default OtherReason;