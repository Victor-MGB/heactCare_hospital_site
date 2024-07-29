import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is to avoid accessibility issues

const PlanModal = ({ isOpen, onRequestClose, service }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Plan requested for:', service.name);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Get a Plan"
      className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto my-20"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-4">Get a Plan for {service.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input type="tel" className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default PlanModal;
