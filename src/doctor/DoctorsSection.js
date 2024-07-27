import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/DoctorsSection.css'; // Import custom CSS for animations and styles

const doctors = [
  { name: "Dr John", specialty: "Dentist", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-01.png" },
  { name: "Dr Amelia", specialty: "Gynecologist", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-02.png" },
  { name: "Dr Jack", specialty: "Audiologist", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-03.png" },
  { name: "Dr Charlie", specialty: "Dentist", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-04.png" },
  { name: "Dr Joseph", specialty: "Dermatologist", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-05.png" },
  { name: "Dr Sophie", specialty: "Radiographer", img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-06.png" },
];

const DoctorsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <h2>Meet Our Specialist Team</h2>
        <p>Our dedicated medical professionals are here to provide you with the best care. Each of our specialists is highly skilled in their field, ensuring you receive top-notch treatment and support.</p>
      </div>
      <div className="doc-section-container">
        {doctors.map((doctor, index) => (
          <div key={index} className={`doc-section-flip-card ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
              <Skeleton className="doc-section-skeleton-image" />
            ) : (
              <div className="doc-section-flip-card-inner">
                <div className="doc-section-flip-card-front">
                  <img src={doctor.img} alt={doctor.name} />
                </div>
                <div className="doc-section-flip-card-back">
                  <h3>{doctor.name}</h3>
                  <span>{doctor.specialty}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;
