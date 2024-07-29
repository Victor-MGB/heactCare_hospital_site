import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Department.css';
import LatestBlog from './LatestBlog';
import Header from '../navbar/Header';
import Footer from '../comonents/Footer';

const departments = [
  { name: "Cardiology", img: "https://i.pinimg.com/236x/5c/49/33/5c49337c9863e9a665c52d8d5bc5fcb6.jpg", description: "Heart care and surgery." },
  { name: "Neurology", img: "https://i.pinimg.com/474x/0e/66/8c/0e668c44e9c4f060ce6fea566165db71.jpg", description: "Brain and nervous system care." },
  { name: "Pediatrics", img: "https://i.pinimg.com/236x/16/f6/72/16f67298dd7c13c2050174d402e5ea88.jpg", description: "Child healthcare and treatment." },
  { name: "Orthopedics", img: "https://i.pinimg.com/236x/9f/2b/6e/9f2b6ee2fa5ec261dd0a4157959480ad.jpg", description: "Bone and joint care." }
];

const department = [
    { name: "Cardiology", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-1.jpg", brief: "Specializing in heart care and surgery.", comprehensive: "Cardiology focuses on diagnosing and treating heart diseases, including congenital heart defects, coronary artery disease, heart failure, and valvular heart disease." },
    { name: "Pulmonology", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-2.jpg", brief: "Specializing in lung care and respiratory disorders.", comprehensive: "Pulmonology deals with diseases involving the respiratory tract. It involves the study and treatment of conditions like asthma, COPD, lung cancer, and pulmonary fibrosis." },
    { name: "Gynecology", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-3.jpg", brief: "Specializing in women's health.", comprehensive: "Gynecology focuses on the health of the female reproductive systems and the breasts. It includes diagnosis and treatment of disorders like ovarian cysts, fibroids, and pelvic pain." },
    { name: "Neurology", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-4.jpg", brief: "Specializing in brain and nervous system care.", comprehensive: "Neurology involves the study and treatment of disorders of the nervous system. It includes conditions such as epilepsy, Alzheimer's disease, stroke, and multiple sclerosis." },
    { name: "Urology", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-5.jpg", brief: "Specializing in urinary tract care.", comprehensive: "Urology focuses on diseases of the urinary tract and the male reproductive organs. It includes treatment of conditions like kidney stones, urinary tract infections, and prostate issues." },
    { name: "Dental", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/department-6.jpg", brief: "Specializing in oral health.", comprehensive: "Dentistry involves the diagnosis, prevention, and treatment of diseases of the oral cavity. It includes dental hygiene, fillings, root canals, and oral surgery." }
  ];
function Department() {
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(Array(departments.length).fill(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const toggleText = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
    <Header />
    <section className="department-section">
      <div className="department-header mt-[4rem]">
        <h2 className='text-blue-700 font-bold uppercase'>Our Departments</h2>
        <p>Discover the various departments in our hospital, each dedicated to providing specialized care and treatment.</p>
      </div>
      <Slider {...settings} className="department-slider">
        {departments.map((dept, index) => (
          <div key={index} className="department-slide">
            {isLoading ? (
              <Skeleton className="skeleton-image" />
            ) : (
              <div className="department-image-wrapper">
                <img src={dept.img} alt={dept.name} />
                <div className="department-text">
                  <h3>{dept.name}</h3>
                  <p>{dept.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </section>

    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {department.map((dept, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            {isLoading ? (
              <Skeleton className="h-64 w-full" />
            ) : (
              <img src={dept.img} alt={dept.name} className="w-full h-64 object-cover" />
            )}
            <div className="p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-2">{dept.name}</h4>
              <p className="text-gray-700 mb-4">
                {expanded[index] ? dept.comprehensive : dept.brief}
              </p>
              <button
                onClick={() => toggleText(index)}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                {expanded[index] ? 'Show Less' : 'View More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <LatestBlog />
    <Footer />
    </>
  );
}

export default Department;
