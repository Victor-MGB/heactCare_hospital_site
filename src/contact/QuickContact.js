// components/QuickContact.js
import React from 'react';
import PartnerComponent from '../contact/PartnerComponent'

const QuickContact = () => {
  return (
    <section className="p-8 bg-gray-200">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-700">+123-456-7890</p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-700">info@example.com</p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-700">123 Main St, City, Country</p>
        </div>
      </div>

      <PartnerComponent />
    </section>
  );
};

export default QuickContact;
