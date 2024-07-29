import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideNavbar from '../comonents/SideNavbar';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

const Profile = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Get user details from state
  const [userData, setUserData] = useState(user);
  const [loading, setLoading] = useState(!user); // Set loading to false if user is provided

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://hospital-website-backend.onrender.com/api/user/${user._id}`); // Assuming user._id is available
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [user]);

  const links = [
    { name: 'Dashboard', path: '/patient-dashboard' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Prescriptions', path: '/prescriptions' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <SideNavbar links={links} user={userData || {}} />

      <div className="flex flex-col flex-grow items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
          <div className="bg-blue-600 p-6 flex items-center justify-center">
            {loading ? (
              <Skeleton circle={true} height={128} width={128} />
            ) : (
              <img
                src={userData?.profilePicture || "https://via.placeholder.com/150"}
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-white"
              />
            )}
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-4">User Profile</h2>
            {loading ? (
              <Skeleton count={8} />
            ) : userData ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Name:</p>
                  <p>{userData.firstName} {userData.middleName} {userData.surname}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Email:</p>
                  <p>{userData.email}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Contact Number:</p>
                  <p>{userData.contactNumber}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Date of Birth:</p>
                  <p>{userData.dateOfBirth ? new Date(userData.dateOfBirth).toLocaleDateString() : 'N/A'}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Gender:</p>
                  <p>{userData.gender || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Emergency Contact Number:</p>
                  <p>{userData.emergencyContactNumber || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Medical Record Number:</p>
                  <p>{userData.medicalRecordNumber || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Profile Picture:</p>
                  <img
                    src={userData.profilePicture || 'https://via.placeholder.com/150'}
                    alt="Profile_Picture"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
              </div>
            ) : (
              <p className="text-center">No user data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
