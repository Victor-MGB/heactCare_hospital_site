import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import PlanModal from './PlanModal'; // Import the modal component
import ServiceRequestForm from './ServiceRequestForm';
import Footer from '../comonents/Footer';
import Header from '../navbar/Header';

const services = [
  { 
    name: "Consultation", 
    brief: "General consultation with a healthcare provider.", 
    comprehensive: "General consultation with a healthcare provider to discuss health concerns, perform a physical examination, and provide recommendations for further testing or treatment if needed.", 
    price: "$50" 
  },
  { 
    name: "Blood Test", 
    brief: "Comprehensive blood testing and analysis.", 
    comprehensive: "Comprehensive blood testing and analysis to check for various health conditions, including complete blood count, cholesterol levels, and blood sugar levels.", 
    price: "$75" 
  },
  { 
    name: "X-Ray", 
    brief: "Radiographic imaging for diagnostic purposes.", 
    comprehensive: "Radiographic imaging to provide detailed views of bones and internal organs, aiding in the diagnosis of fractures, infections, and other medical conditions.", 
    price: "$100" 
  },
  { 
    name: "MRI Scan", 
    brief: "Magnetic Resonance Imaging for detailed internal views.", 
    comprehensive: "Magnetic Resonance Imaging (MRI) uses strong magnetic fields and radio waves to create detailed images of the organs and tissues within the body, useful for diagnosing a variety of conditions.", 
    price: "$500" 
  },
  { 
    name: "Surgery", 
    brief: "Cost varies based on the type and complexity of the surgery.", 
    comprehensive: "Surgical procedures ranging from minor outpatient surgeries to complex operations. Costs vary depending on the procedure, duration, and resources required.", 
    price: "Starting at $2000" 
  },
  { 
    name: "Ultrasound", 
    brief: "Diagnostic ultrasound imaging.", 
    comprehensive: "Diagnostic ultrasound imaging to examine internal organs, monitor pregnancies, and diagnose various conditions. Uses high-frequency sound waves to create images.", 
    price: "$150" 
  },
  { 
    name: "Physical Therapy", 
    brief: "Rehabilitative services to improve mobility.", 
    comprehensive: "Rehabilitative services designed to help patients improve mobility, strength, and overall physical function. Includes exercises, manual therapy, and other treatments.", 
    price: "$100 per session" 
  },
  { 
    name: "Vaccination", 
    brief: "Immunization services to protect against diseases.", 
    comprehensive: "Immunization services to protect individuals from various infectious diseases. Includes administration of vaccines and post-vaccination care.", 
    price: "$30 per vaccine" 
  },
  { 
    name: "Dental Cleaning", 
    brief: "Routine dental cleaning and examination.", 
    comprehensive: "Routine dental cleaning and examination to maintain oral health, remove plaque and tartar, and prevent dental diseases. Includes professional cleaning and oral examination.", 
    price: "$80" 
  },
  { 
    name: "Eye Examination", 
    brief: "Comprehensive eye check-up.", 
    comprehensive: "Comprehensive eye examination to assess vision, diagnose eye conditions, and prescribe corrective lenses if needed. Includes various tests and evaluations.", 
    price: "$60" 
  },
  { 
    name: "Cardiac Screening", 
    brief: "Heart health assessment and testing.", 
    comprehensive: "Heart health assessment and testing, including ECG, echocardiogram, and other diagnostic procedures to evaluate cardiovascular health and detect potential issues.", 
    price: "$250" 
  }
];

function Pricelist() {
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(Array(services.length).fill(false));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [requestFormIsOpen, setRequestFormIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Adjust the time as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    const toggleText = (index) => {
      setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
    };
  
    const openModal = (service) => {
      setSelectedService(service);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedService(null);
    };
  
    const openRequestForm = () => {
      setRequestFormIsOpen(true);
    };
  
    const closeRequestForm = () => {
      setRequestFormIsOpen(false);
    };
  return (
    <>
    <Header />
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">Pricelist</h2>
          <p className="text-gray-700 mt-2">Explore our range of services and their prices.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{service.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {expanded[index] ? service.comprehensive : service.brief}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">{service.price}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => toggleText(index)}
                      className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                    >
                      {expanded[index] ? 'Show Less' : 'View More'}
                    </button>
                    <button
                      onClick={() => openModal(service)}
                      className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                    >
                      Get a Plan
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={openRequestForm}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Request a New Service
          </button>
        </div>
      </div>
      {selectedService && (
        <PlanModal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          service={selectedService} 
        />
      )}
      {requestFormIsOpen && (
        <ServiceRequestForm onClose={closeRequestForm} />
      )}
    </section>

    <Footer />
    </>
  );
}

export default Pricelist;