import React from "react";
import { IoIosBook } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Academic = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
          <span className="flex gap-3 items-center">
            <a href="/student-home" className="mr-8">
              <IoChevronBackCircleOutline />
            </a>
            <IoIosBook className="text-5xl" />
            Academic Info
          </span>

          <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
            <h1>
              <IoMdLogOut />
            </h1>
          </a>
        </h1>
      </div>

      {/* Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Enrolled Course Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <IoMdListBox className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-4">Enrolled Courses</h2>
          <p className="text-gray-600 mb-4">View all the courses you are enrolled in.</p>
          <a
            href="/academic-enrolled-courses"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            View Courses
          </a>
        </div>

        {/* View Result Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <IoMdPeople className="text-5xl text-green-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-4">View Results</h2>
          <p className="text-gray-600 mb-4">Check your academic results here.</p>
          <a
            href="/academic-check-result"
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
          >
            View Results
          </a>
        </div>

        {/* Attendance Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <IoMdPeople className="text-5xl text-orange-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-4">Attendance</h2>
          <p className="text-gray-600 mb-4">View your attendance record for all subjects.</p>
          <a
            href="/academic-attendance"
            className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
          >
            View Attendance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Academic;
