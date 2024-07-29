import React, { useState } from 'react';
import ThemeSwitcher from '../comonents/ThemeSwitcher';
import { FaBars, FaTimes, FaHospital, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdAttachEmail } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-blue-800 flex shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center">
            <FaHospital className="h-10 w-10 text-white mr-3" />
            <span className="text-[1.2rem] font-bold text-white">Hospital Name</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300">
              Home
            </NavLink>
            <NavLink to="/about" className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300">
              About
            </NavLink>
            <NavLink to="/departments" className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300">
              Departments
            </NavLink>
            <NavLink to="/doctors" className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300">
              Doctors
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300"
              >
                Patient
                {isDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                  <NavLink to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sign Up
                  </NavLink>
                  <NavLink to="/pricelist" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Price List
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/contact" className="flex items-center text-white capitalize text-lg font-semibold hover:text-gray-300">
              Contact
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <div className="flex items-center space-x-1">
              <IoIosCall className="text-white text-2xl" />
              <span className="text-gray-300">123-456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdAttachEmail className="text-white text-2xl" />
              <span className="text-gray-300">info@hospital.com</span>
            </div>
            <ThemeSwitcher className="bg-blue-700 text-2xl" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed mt-[4.6rem] left-0 w-64 h-full bg-blue-600 shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="px-4 py-6">
          <NavLink to="/home" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            About Us
          </NavLink>
          <NavLink to="/services" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            Services
          </NavLink>
          <NavLink to="/departments" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            Departments
          </NavLink>
          <NavLink to="/doctors" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            Doctors
          </NavLink>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300 w-full text-left"
            >
              Patient Info
              {isDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-20">
                <NavLink to="/patient-info" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Patient Info
                </NavLink>
                <NavLink to="/pricelist" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Price List
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/contact" className="flex items-center py-2 text-white capitalize text-lg font-semibold hover:text-gray-300">
            Contact Us
          </NavLink>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center space-x-1">
              <IoIosCall className="text-white text-xl" />
              <span className="text-gray-300">123-456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdAttachEmail className="text-white text-xl" />
              <span className="text-gray-300">info@hospital.com</span>
            </div>
          </div>
        </nav>

        <div className="flex items-center px-4 py-4">
          <FaHospital className="h-10 w-10 text-white mr-3" />
          <span className="text-xl font-bold text-white">Hospital Name</span>
        </div>

        <ThemeSwitcher className="bg-blue-700 text-white center" />
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
