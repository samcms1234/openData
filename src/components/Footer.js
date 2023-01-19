import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto flex flex-wrap items-center" height='200px'>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="text-gray-800 font-medium mb-4">About</h5>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="text-gray-800 font-medium mb-4">Links</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="text-gray-800 font-medium mb-4">Follow Us</h5>
          <div className="flex justify-center">
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="text-gray-800 font-medium mb-4">Contact Us</h5>
          <p className="text-gray-600 mb-4">
            123 Main St.<br />
            Suite 200<br />
            Anytown, USA 12345
          </p>
          <p className="text-gray-600">
            info@example.com<br />
            555-555-5555
          </p>
        </div>
    </div>
    <div className="bg-gray-800 text-gray-500 py-4">
    <div className="container mx-auto text-center">
    Copyright © {new Date().getFullYear()} My App
    </div>
    </div>
    </footer>
   );
}

export default Footer;
