// components/ContactForm.js
import React from 'react';
import QuickContact from '../contact/QuickContact';

const ContactForm = () => {
  return (
    <>
    <section className="p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <form className="bg-white p-6 rounded shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded mb-4"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <QuickContact />

    </>
  );
};

export default ContactForm;
