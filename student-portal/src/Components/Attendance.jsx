import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Footer from "./Footer";

const AttendancePage = () => {
    // Mock data for the student
    const student = {
        enrollmentNumber: "S123456789",
        name: "John Doe",
        courses: [
            { name: "MERN Stack", totalDays: 105, presents: 90, absents: 15 },
            { name: "DevOps", totalDays: 110, presents: 95, absents: 15 },
        ],
    };

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8">
                <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
                    <span className="flex gap-3 items-center float-start">
                        <a href="/academic" className="lg:mr-8">
                            <IoChevronBackCircleOutline />
                        </a>
                        Attendance Page
                    </span>

                    <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
                        <h1>
                            <IoMdLogOut />
                        </h1>
                    </a>
                </h1>
            </div>

            {/* Attendance Card */}
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <div className="space-y-6">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Student Information</h2>
                        <ul className="space-y-2 mt-4">
                            <li><strong>Enrollment No:</strong> {student.enrollmentNumber}</li>
                            <li><strong>Student Name:</strong> {student.name}</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Enrolled Courses</h2>
                        {student.courses.map((course, index) => (
                            <div key={index} className="border-b pb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex justify-between">
                                        <span className="text-gray-700">Total Days</span>
                                        <span className="text-gray-500">{course.totalDays} days</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-700">Presents</span>
                                        <span className="text-gray-500">{course.presents} days</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-700">Absents</span>
                                        <span className="text-gray-500">{course.absents} days</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AttendancePage;
