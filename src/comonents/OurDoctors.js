import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhyPatients from './WhyPatients';

const doctors = [
  {
    name: 'Roman Atkens',
    specialty: 'Neurologist',
    description: 'Dr Roman Atkinson one of the best Neurologists in Bangladesh, In the world, In the Galaxy. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. Dr Roman Atkinson is one of the best Neurologists in Bangladesh, In the world, In the Galaxy.',
    imgSrc: 'https://i.pinimg.com/236x/16/96/71/169671343ef815d20808e6c9e43c5c19.jpg',
  },
  {
    name: 'Beatrice A. Ramsey',
    specialty: 'Cardiologist',
    description: 'Dr Beatrice A. Ramsey one of the best Cardiologists in Bangladesh, In the world, In the Galaxy. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. Dr Beatrice A. Ramsey is one of the best Cardiologists in Bangladesh, In the world, In the Galaxy.',
    imgSrc: 'https://i.pinimg.com/236x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg',
  },
];

const CustomArrow = ({ className, style, onClick, icon }) => (
  <div
    className={className}
    style={{ ...style, display: 'block', zIndex: 2 }}
    onClick={onClick}
  >
    {icon}
  </div>
);

const OurDoctors = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);

  const fadeIn = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(-20px)' : 'translateY(0)',
    config: { duration: 500 },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time between slides in milliseconds
    nextArrow: <CustomArrow icon={<FaArrowRight />} />,
    prevArrow: <CustomArrow icon={<FaArrowLeft />} />,
  };

  return (

    <>
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <h5 className="text-center text-2xl font-bold mb-6">Our Doctors</h5>
      <section>
        {loading ? (
          <Skeleton height={400} />
        ) : (
          <Slider {...settings}>
            {doctors.map((doctor, index) => (
              <animated.div key={index} style={fadeIn}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <span className="text-blue-600 text-lg font-semibold mb-4 block">{doctor.specialty}</span>
                    <p className="text-gray-700 text-md">{doctor.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 p-4">
                    <img src={doctor.imgSrc} alt={doctor.specialty} className="w-full rounded-lg shadow-lg" />
                  </div>
                </div>
              </animated.div>
            ))}
          </Slider>
        )}
      </section>
    </div>
    <WhyPatients />
    </>
  );
};

export default OurDoctors;
