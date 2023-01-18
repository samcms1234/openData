import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav class="bg-white fixed top-0 left-0 right-0 z-10 py-2 px-6 flex justify-between items-center">
    <a href="#" class="text-lg font-medium text-gray-900">
      <img src={logo} width='150px' height='250px'/>
    </a>
  <div class="flex justify-center md:justify-start">
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-3">
      Give Consent
    </a>
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
      Check Consent
    </a>
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
      View my Permission
    </a>
  </div>
  <div class="flex items-center justify-center md:justify-end">
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-3">
        Connect
    </a>
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      Login
    </a>
  </div>
</nav>

  );
};

export default Navbar;
