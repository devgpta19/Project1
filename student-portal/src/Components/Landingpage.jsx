import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white text-center p-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Welcome to the Student Portal
    </h1>
    <p className="text-lg md:text-xl text-blue-200 max-w-lg mb-16 -mt-5 lg:-mt-5">
      Your one-stop solution for managing student activities and admin controls.
    </p>
    <div className="flex space-x-4">
      <Link
        to="/student-home"
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
      >
        Student Section
      </Link>
      <Link
        to="/admin-home"
        className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
      >
        Admin Page
      </Link>
    </div>
  </div>
);

export default LandingPage;
