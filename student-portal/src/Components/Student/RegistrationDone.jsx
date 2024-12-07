import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const RegistrationDone = () => {
    // Mock student details
    const studentDetails = {
        enrollmentNumber: "S123456789",
        name: "John Doe",
        fatherName: "Michael Doe",
        motherName: "Sarah Doe",
        email: "john.doe@example.com",
        currentAddress: "123 Main Street, Springfield, USA",
        collegeName: "Springfield Institute of Technology",
        degree: "B.Tech", // Default degree
        enrolledCourses: [
            { name: "MERN Stack Development", duration: "105 days" },
            { name: "DevOps", duration: "110 days" },
        ],
    };

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8">
                <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
                    <span className="flex gap-3 items-center float-start">
                        <a href="/student-home" className="lg:mr-8">
                            <IoChevronBackCircleOutline />
                        </a>
                        Registration Done
                    </span>

                    <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
                        <h1>
                            <IoMdLogOut />
                        </h1>
                    </a>
                </h1>
            </div>

            <div className="p-2 bg-zinc-800 rounded-md mb-5 text-end">
                <a href="/registration" className="uppercase font-semibold text-white"><h1>New Registration</h1></a>
            </div>

            <br />

            {/* Registration Details Card */}
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <div className="space-y-6">
                    {/* Student Information */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Information</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Student Name:</span>
                                <span className="text-gray-500">{studentDetails.name}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Enrollment Number:</span>
                                <span className="text-gray-500">{studentDetails.enrollmentNumber}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Father's Name:</span>
                                <span className="text-gray-500">{studentDetails.fatherName}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Mother's Name:</span>
                                <span className="text-gray-500">{studentDetails.motherName}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Email Address:</span>
                                <span className="text-gray-500">{studentDetails.email}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Current Address:</span>
                                <span className="text-gray-500">{studentDetails.currentAddress}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Academic Details */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Academic Details</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">College Name:</span>
                                <span className="text-gray-500">{studentDetails.collegeName}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-700 font-medium">Degree:</span>
                                <span className="text-gray-500">{studentDetails.degree}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Enrolled Courses */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Enrolled Courses</h2>
                        <ul className="space-y-4">
                            {studentDetails.enrolledCourses.map((course, index) => (
                                <li key={index} className="flex justify-between">
                                    <span className="text-gray-700 font-medium">{course.name}</span>
                                    <span className="text-gray-500">{course.duration}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationDone;
