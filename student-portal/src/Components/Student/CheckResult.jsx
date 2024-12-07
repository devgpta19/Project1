import React from 'react';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Footer from '../Footer';

const CheckResult = () => {
  // Sample data for enrolled courses and marks
  const results = {
    student: {
      enrollmentNumber: "12345",
      name: "John Doe",
    },
    courses: [
      { course: "MERN Stack", marks: 85 },
      { course: "DevOps", marks: 92 },
    ],
  };

  // Calculate GPA (average marks of all enrolled courses)
  const totalMarks = results.courses.reduce((sum, course) => sum + course.marks, 0);
  const totalCourses = results.courses.length;
  const gpa = totalMarks / totalCourses;

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-8">
        <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
          <span className="flex gap-3 items-center">
            <a href="/student-home" className="mr-8">
              <IoChevronBackCircleOutline />
            </a>
            Result
          </span>

          <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
            <h1>
              <IoMdLogOut />
            </h1>
          </a>
        </h1>
      </div>

      {/* Result Card */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="space-y-6">
          {/* Student Information */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">Student Information</h2>
            <ul className="space-y-3 mt-4">
              <li className="flex justify-between">
                <span className="text-gray-700">Enrollment Number</span>
                <span className="text-gray-500">{results.student.enrollmentNumber}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Student Name</span>
                <span className="text-gray-500">{results.student.name}</span>
              </li>
            </ul>
          </div>

          {/* Course Results */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">Course Results</h2>
            <ul className="space-y-3 mt-4">
              {results.courses.map((course, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-700">{course.course}</span>
                  <span className="text-gray-500">{course.marks} Marks</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GPA Calculation */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-800">GPA</h2>
            <ul className="space-y-3 mt-4">
              <li className="flex justify-between">
                <span className="text-gray-700">Total Marks</span>
                <span className="text-gray-500">{totalMarks}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Total Courses</span>
                <span className="text-gray-500">{totalCourses}</span>
              </li>
              <li className="flex justify-between font-bold">
                <span className="text-gray-700">GPA</span>
                <span className="text-gray-500">{gpa.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckResult;
