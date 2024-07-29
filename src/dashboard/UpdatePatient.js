import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UpdatePatient = () => {
  const [medicalRecordNumber, setMedicalRecordNumber] = useState('');
  const [updateData, setUpdateData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`https://hospital-website-backend.onrender.com/api/patients/${medicalRecordNumber}`, updateData);
      toast.success(<div><FaCheckCircle /> Patient details updated successfully!</div>);
    } catch (error) {
      console.error('Error updating patient details:', error);
      toast.error(<div><FaTimesCircle /> Error updating patient details.</div>);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <h2 className="text-xl font-bold mb-4">Update Patient Details</h2>
      <div className="mb-4">
        <label className="block mb-1">Medical Record Number:</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={medicalRecordNumber}
          onChange={(e) => setMedicalRecordNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Update Data:</label>
        <textarea
          className="w-full px-3 py-2 border rounded"
          value={JSON.stringify(updateData, null, 2)}
          onChange={(e) => setUpdateData(JSON.parse(e.target.value))}
        />
      </div>
      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={isLoading}
      >
        {isLoading ? <Skeleton height={24} width={100} /> : 'Update Patient'}
      </button>
    </div>
  );
};

export default UpdatePatient;
