import React, { useState, useEffect } from 'react';
import SideNavbar from '../comonents/SideNavbar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Transition } from '@headlessui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const PatientDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  const user = { name: '', role: 'Patient' };
  const links = [
    { name: 'Dashboard', path: '/patient-dashboard' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Prescriptions', path: '/prescriptions' },
    { name: 'Profile', path: '/profile' },
  ];

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // Set the chart data after a delay
      setChartData({
        registrationData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Registrations',
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.8)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: [65, 59, 80, 81, 56, 55, 40],
            },
          ],
        },
        loginData: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Logins',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81],
            },
          ],
        },
        profileUpdateData: {
          labels: ['Complete', 'Incomplete'],
          datasets: [
            {
              data: [300, 50],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        },
      });
      setLoading(false);
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="flex">
      <SideNavbar links={links} user={user} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Transition
            show={!loading}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Registrations</h2>
              {loading ? (
                <Skeleton height={300} />
              ) : (
                <Bar data={chartData.registrationData} />
              )}
            </div>
          </Transition>
          <Transition
            show={!loading}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Logins</h2>
              {loading ? (
                <Skeleton height={300} />
              ) : (
                <Line data={chartData.loginData} />
              )}
            </div>
          </Transition>
          <Transition
            show={!loading}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Profile Updates</h2>
              {loading ? (
                <Skeleton height={300} />
              ) : (
                <Pie data={chartData.profileUpdateData} />
              )}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
