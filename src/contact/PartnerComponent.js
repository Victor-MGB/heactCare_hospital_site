import React from 'react';
import Skeleton from 'react-loading-skeleton';
import MapContainer from './MapContainer';

const PartnerComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Simulate loading delay
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <section className="p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto my-8">
      {loading ? (
        <div>
          <Skeleton height={200} />
          <Skeleton count={3} />
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Our Partners</h2>
            <p className="text-gray-700 mb-4">
              {isExpanded
                ? 'Our hospital partners include leading healthcare institutions, specialized medical centers, and prominent health professionals. We collaborate with these partners to provide the best care and services to our patients. Our partners include hospitals, clinics, and medical professionals who are dedicated to enhancing patient outcomes and advancing medical science.'
                : 'We are proud to partner with various esteemed healthcare organizations. Click to learn more.'}
            </p>
            <div className="flex flex-wrap mb-4">
              <div className="flex items-center mr-6 mb-4">
                <span className="text-blue-500 text-3xl mr-2">🏥</span>
                <span className="text-gray-700">General Hospitals</span>
              </div>
              <div className="flex items-center mr-6 mb-4">
                <span className="text-green-500 text-3xl mr-2">👨‍⚕️</span>
                <span className="text-gray-700">Specialists</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 text-3xl mr-2">🏢</span>
                <span className="text-gray-700">Medical Centers</span>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          </div>
        </>
      )}
    </section>
    <MapContainer />
    </>
  );
};

export default PartnerComponent;
