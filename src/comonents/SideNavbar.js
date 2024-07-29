import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const SideNavbar = ({ links, user }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex">
      <Transition
        show={true}
        enter="transition ease-out duration-300"
        enterFrom="transform -translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform -translate-x-full opacity-0"
        className="w-64 bg-gray-800 text-white"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="p-4">
            {loading ? (
              <Skeleton circle={true} height={50} width={50} />
            ) : (
              <div className="flex items-center">
                <img
                  src={user.profilePicture || 'https://via.placeholder.com/50'}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
            )}
            <nav className="mt-8">
              <ul>
                {links.map((link) => (
                  <li key={link.path} className="mb-2">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-2 px-4 rounded-lg transition duration-300 ${
                          isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`
                      }
                    >
                      {loading ? <Skeleton width={100} /> : link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <button className="w-full py-2 px-4 bg-red-500 hover:bg-red-700 rounded-lg transition duration-300">
              {loading ? <Skeleton width={50} /> : 'Logout'}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default SideNavbar;
