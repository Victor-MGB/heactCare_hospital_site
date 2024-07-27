import React, { useState } from 'react';
import ThemeSwitcher from '../comonents/ThemeSwitcher';
import {FaBars, FaTimes, FaHospital } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdAttachEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-blue-700 flex shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center">
            <FaHospital className="h-10 w-10 text-yellow-900 mr-3" />
            <span className="text-[1.2rem] font-bold text-yellow-900">Hospital Name</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/home" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               Home
            </NavLink>
            <NavLink to="/about" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               About Us
            </NavLink>
            <NavLink to="/services" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               Services
            </NavLink>
            <NavLink to="/departments" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               Departments
            </NavLink>
            <NavLink to="/doctors" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               Doctors
            </NavLink>
            <NavLink to="/patient-info" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
             Patient Info
            </NavLink>
            <NavLink to="/contact" className="flex items-center text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
               Contact Us
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <div className="flex items-center space-x-1">
              <IoIosCall className="text-blue-900 font-bold text-2xl" />
              <span className="text-gray-700">123-456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdAttachEmail  className="text-blue-900 text-2xl font-bold" />
              <span className="text-gray-700">info@hospital.com</span>
            </div>

            <ThemeSwitcher className="bg-blue-600 text-2xl" />

          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed mt-[4.6rem] left-0 w-64 h-full bg-blue-400 shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="px-4 py-6">
          <NavLink to="/home" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
             Home
          </NavLink>
          <NavLink to="/about" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
            About Us
          </NavLink>
          <NavLink to="/services" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
             Services
          </NavLink>
          <NavLink to="/departments" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
             Departments
          </NavLink>
          <NavLink to="/doctors" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
             Doctors
          </NavLink>
          <NavLink to="/patient-info" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
           Patient Info
          </NavLink>
          <NavLink to="/contact" className="flex items-center py-2 text-white capitalize text-1xl font-bold hover:text-2xl hover:text-blue-600">
           Contact Us
          </NavLink>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center space-x-1">
              <IoIosCall className="text-blue-900" />
              <span className="text-gray-700">123-456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdAttachEmail className="text-blue-900" />
              <span className="text-gray-700">info@hospital.com</span>
            </div>
          </div>
        </nav>

        <div className="flex items-center">
            <FaHospital className="h-10 w-10 text-blue-900 mr-3" />
            <span className="text-xl font-bold text-blue-600">Hospital Name</span>
          </div>

          <ThemeSwitcher className="bg-blue-600 center" />
          
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Header;
