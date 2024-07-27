import React, { useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Covid() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this URL with your backend URL
      const response = await axios.post('https://your-backend-url.com/api/register', formData);
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error); // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Let's register you for a treatment plan</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-lg"
      >
        {loading ? (
          <Skeleton count={3} height={40} />
        ) : (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register Now
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default Covid;
