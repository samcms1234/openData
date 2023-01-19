import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.png'

const Body = () => {
  return (
    <div class="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: `url(${bg})`}}>
        <div class="container mx-auto p-8 flex flex-col items-center justify-center h-full">
            <div class="container text-white text-center">
                <h1 class="text-5xl font-medium">Welcome to the Consent App</h1>
                <p class="text-xl">Easily manage and track your consents</p>
            </div>
        </div>
    </div>
  );
};

export default Body;
