import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.png'

const Body = () => {
  return (
    <div class="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: `url(${bg})`}}>
        <div class="container mx-auto p-8 flex flex-col items-center justify-center h-full">
            <div class="container text-white text-center">
                <h1 class="text-5xl font-medium">Consent Management made easy</h1>
                <p class="text-xl mt-6">Easily manage and track your consents</p>
            </div>

            <div class="mt-40 container text-white text-center w-2/5">
                <p className="text-gray-800 text-xl leading-relaxed">
                  OpenData is a platform that allows users to take control of their personal data. With OpenData, users can easily give and manage their consent for data sharing with complete transparency and security.
                </p>
              <div className="mt-8">
               <button className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600">Get started</button>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Body;
