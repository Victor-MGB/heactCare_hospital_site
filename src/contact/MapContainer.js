// components/MapContainer.js
import React from 'react';
import Footer from '../comonents/Footer';

const MapContainer = () => {
  return (
    <>
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3947817877266!2d-73.97956838459144!3d40.76405667932741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585158d7d1c1%3A0x28b0c5e26b32a4f6!2sCentral%20Park%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1634487602517!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default MapContainer;
