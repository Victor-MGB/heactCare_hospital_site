import React, { useState } from 'react';

const ServiceRequestForm = ({ onClose }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [requestedPlan, setRequestedPlan] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    setMessage('Thank you for your request. We will get back to you shortly.');
    // Clear the form fields
    setFullname('');
    setEmail('');
    setPhonenumber('');
    setRequestedPlan('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Request a New Service</h3>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Requested Plan</label>
            <textarea
              value={requestedPlan}
              onChange={(e) => setRequestedPlan(e.target.value)}
              required
              className="w-full border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
