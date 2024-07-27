import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IoIosPlayCircle } from "react-icons/io";
import { PiPhoneCall } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import ReactPlayer from 'react-player';
import moment from 'moment-timezone';
import { useSpring, animated } from '@react-spring/web';
import OurDoctors from './OurDoctors';

const WelcomeUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleVideo = () => setShowVideo(!showVideo);
  const togglePhoneNumber = () => setShowPhoneNumber(!showPhoneNumber);
  const toggleLocation = () => setShowLocation(!showLocation);
  const toggleTime = () => setShowTime(!showTime);

  const userTime = moment().format('HH:mm:ss');
  const userTimezone = moment.tz.guess();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating loading time
  }, []);

  const fadeIn = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(-20px)' : 'translateY(0)',
    config: { duration: 500 },
  });

  return (
    <>
    <section className="flex flex-col items-center justify-center p-8 bg-white">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mb-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          {loading ? (
            <Skeleton height={300} />
          ) : (
            <animated.img
              src="https://zwin.io/html/moristan/assets/img/about/11.png"
              alt="About"
              className="w-full rounded-lg shadow-lg"
              style={fadeIn}
            />
          )}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <>
              <animated.h6
                className="text-blue-600 text-lg font-semibold mb-2"
                style={fadeIn}
              >
                About Us
              </animated.h6>
              <animated.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                style={fadeIn}
              >
                Welcome to [Name] Hospital
              </animated.h1>
              <animated.p
                className="text-lg text-gray-700 mb-6"
                style={fadeIn}
              >
                Providing exceptional healthcare services to our community with compassion and care.
              </animated.p>
              <animated.button
                onClick={toggleVideo}
                className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                style={fadeIn}
              >
                <IoIosPlayCircle className="text-4xl mr-2" />
                Play this video
              </animated.button>
              {showVideo && (
                <animated.div
                  className="mt-6 w-full md:w-3/4 lg:w-1/2 relative pb-[56.25%] h-0"
                  style={fadeIn}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/embed/oHJR0zZ5uRU?autoplay=1"
                    controls={true}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                  />
                </animated.div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center space-x-8">
        <animated.button
          onClick={togglePhoneNumber}
          className="flex flex-col items-center text-2xl text-blue-600 hover:text-blue-800 transition duration-300"
          style={fadeIn}
        >
          <PiPhoneCall />
          {showPhoneNumber && (
            <animated.div
              className="text-center mt-2"
              style={fadeIn}
            >
              <p className="text-gray-700 text-sm">Call us at: (123) 456-7890</p>
            </animated.div>
          )}
        </animated.button>
        <animated.button
          onClick={toggleLocation}
          className="flex flex-col items-center text-2xl text-blue-600 hover:text-blue-800 transition duration-300"
          style={fadeIn}
        >
          <GoLocation />
          {showLocation && (
            <animated.div
              className="text-center mt-2"
              style={fadeIn}
            >
              <p className="text-gray-700 text-sm">123 Main St, Hometown, USA</p>
            </animated.div>
          )}
        </animated.button>
        <animated.button
          onClick={toggleTime}
          className="flex flex-col items-center text-2xl text-blue-600 hover:text-blue-800 transition duration-300"
          style={fadeIn}
        >
          <LuClock />
          {showTime && (
            <animated.div
              className="text-center mt-2"
              style={fadeIn}
            >
              <p className="text-gray-700 text-sm">Current Time: {userTime} ({userTimezone})</p>
            </animated.div>
          )}
        </animated.button>
      </div>
    </section>

    <OurDoctors/>
    </>
  );
};

export default WelcomeUs;
