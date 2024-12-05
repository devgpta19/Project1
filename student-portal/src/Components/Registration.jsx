import React, { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Footer from "./Footer";

const Registration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    { id: "full_stack", name: "Full Stack Course", price: 18000 },
    { id: "java_full_stack", name: "Java Full Stack", price: 17000 },
    { id: "mern_stack", name: "MERN Stack", price: 20000 },
    { id: "mean_stack", name: "MEAN Stack", price: 20000 },
    { id: "python_full_stack", name: "Python Full Stack", price: 15000 },
    { id: "devops", name: "DevOps", price: 10000 },
  ];

  // Handle course checkbox selection
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(value)) {
        return prevSelectedCourses.filter((course) => course !== value);
      } else {
        return [...prevSelectedCourses, value];
      }
    });
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
          <span className="flex gap-3 items-center">
            <a href="/student-home" className="mr-8">
              <IoChevronBackCircleOutline />
            </a>
            <IoIosPersonAdd />
            Registration
          </span>

          <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
            <h1>
              <IoMdLogOut />
            </h1>
          </a>
        </h1>
        <p className="text-gray-600 mt-10">Fill out the form below to complete your registration.</p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <form className="space-y-6">
          {/* Student Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Full Name"
            />
          </div>

          {/* Parent Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherName">
                Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Father's Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="motherName">
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Mother's Name"
              />
            </div>
          </div>

          {/* Contact Number and Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Contact Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Email Address"
              />
            </div>
          </div>

          {/* Degree and College */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="degree">
                Degree
              </label>
              <select
                id="degree"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Degree</option>
                <option value="10th">10th</option>
                <option value="12th">12th/Diploma</option>
                <option value="graduation">Graduation</option>
                <option value="postGraduation">Post Graduation</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="collegeName">
                College Name
              </label>
              <input
                type="text"
                id="collegeName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter College Name"
              />
            </div>
          </div>

          {/* Course Selection with Checkboxes */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Select Courses</label>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={course.id}
                    value={course.id}
                    checked={selectedCourses.includes(course.id)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor={course.id} className="text-gray-700">
                    {course.name} - ₹{course.price}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
