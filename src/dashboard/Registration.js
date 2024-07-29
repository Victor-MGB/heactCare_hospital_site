import React, { useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    middleName: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    emergencyContactNumber: '',
    address: {
      country: '',
      state: '',
      city: '',
      street: '',
      house_number: ''
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      setFormData(prevData => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name.split('.')[1]]: value
        }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('https://hospital-website-backend.onrender.com/api/register', formData);
      setSuccess(response.data.message);
      navigate('/login');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Register Your Account</h1>
<p className="text-gray-700 mb-6 text-center">
  Welcome to [Hospital Name]! Please fill in the form below to create your account and gain access to our comprehensive healthcare management system. Your privacy and security are our top priorities.
</p>

      {loading ? (
        <Skeleton count={10} height={30} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of Birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="emergencyContactNumber"
              placeholder="Emergency Contact Number"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address.country"
              placeholder="Country"
              value={formData.address.country}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address.state"
              placeholder="State"
              value={formData.address.state}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={formData.address.street}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address.house_number"
              placeholder="House Number"
              value={formData.address.house_number}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Register
          </button>

          {error && (
            <div className="flex items-center text-red-500 mt-4">
              <XCircleIcon className="h-6 w-6 mr-2" />
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-center text-green-500 mt-4">
              <CheckCircleIcon className="h-6 w-6 mr-2" />
              <p>{success}</p>
            </div>
          )}
        </form>
      )}
      <div className="text-center mt-6">
        <NavLink to="/" className="text-blue-500 hover:underline">
          Back to Home
        </NavLink>
      </div>
      <div className="text-center mt-2">
        <NavLink to="/login" className="text-blue-500 hover:underline">
          Already have an account? Login here.
        </NavLink>
      </div>
    </div>
  );
};

export default Registration;
