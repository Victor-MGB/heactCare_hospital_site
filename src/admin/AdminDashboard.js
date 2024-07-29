// src/dashboard/AdminDashboard.js
import React from 'react';
import SideNavbar from '../comonents/SideNavbar';

const AdminDashboard = () => {
  const user = { name: 'Admin User', role: 'Admin' };
  const links = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    {name:'ApprovePayment', path: '/approve-payment'},
    { name: 'Manage Users', path: '/manage-users' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex">
      <SideNavbar links={links} user={user} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <p className="mt-4">Here are your latest administrative tasks:</p>
        <ul className="mt-4">
          <li>New User Registrations: <strong>5</strong></li>
          <li>Pending Approvals: <strong>3</strong></li>
          <li>System Alerts: <strong>2</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
