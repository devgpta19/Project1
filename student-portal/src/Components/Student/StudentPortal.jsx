import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi"; // For Fee Status
import { MdCheckCircle } from "react-icons/md"; // For Registration Status
import { Link } from "react-router-dom"; // if you're using react-router

const StudentHomePage = () => {
    // State to manage the status of registration, fee payment, and the student's profile image
    const [registrationStatus, setRegistrationStatus] = useState("Done"); // Options: "Done", "Pending"
    const [feeStatus, setFeeStatus] = useState("Pending"); // Options: "Done", "Pending"
    const [image, setImage] = useState(null); // To store the uploaded image

    // Handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set the uploaded image to state
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                {/* Student Info on Top-right */}
                <div className="flex items-center space-x-4 text-gray-700">
                    <span className="font-semibold">UserID: Student123</span>
                    <span className="px-4 py-2 bg-gray-800 text-white rounded-full">Student</span>
                    <a href="/" className="text-3xl">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Student Info */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src={image || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover cursor-pointer border-4 border-zinc-700 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                            onClick={() => document.getElementById("fileInput").click()} // Open file input when image is clicked
                        />
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Student Info */}
                    <div className="space-y-4 w-auto">
                        <div className="flex justify-between lg:gap-96 gap-5">
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="text-gray-600">John Doe</span>
                        </div>
                        <div className="flex justify-between lg:gap-96 gap-5">
                            <span className="font-semibold text-gray-700">Degree:</span>
                            <span className="text-gray-600">Bachelor of Technology (B.Tech)</span>
                        </div>
                        <div className="flex justify-between lg:gap-96 gap-5">
                            <span className="font-semibold text-gray-700">Department:</span>
                            <span className="text-gray-600">Computer Science</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Overview */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Courses Enrolled */}
                    <a href="/academic-enrolled-courses" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Total Courses Enrolled</p>
                                <p className="text-3xl font-bold">5</p>
                            </div>
                            <FaBook className="text-4xl" />
                        </div>
                    </a>

                    {/* View Grades */}
                    <a href="/academic-check-result" className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">View Grades</p>
                                <p className="text-3xl font-bold"></p>
                            </div>
                            <IoIosStats className="text-4xl" />
                        </div>
                    </a>

                    {/* Assignments */}
                    <a href="/assignment" className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Assignments</p>
                                <p className="text-3xl font-bold">3</p>
                            </div>
                            <IoIosPeople className="text-4xl" />
                        </div>
                    </a>

                    {/* Registration Status */}
                    <a href="/registration-done" className={`bg-teal-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${registrationStatus === "Done" ? "bg-teal-500" : "bg-yellow-500"}`}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Registration Status</p>
                                <p className="text-3xl font-bold">{registrationStatus}</p>
                            </div>
                            <MdCheckCircle className="text-4xl" />
                        </div>
                    </a>

                    {/* Fee Status */}
                    <a href="fee-payment" className={`bg-orange-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${feeStatus === "Done" ? "bg-green-500" : "bg-red-500"}`}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Fee Status</p>
                                <p className="text-3xl font-bold">{feeStatus}</p>
                            </div>
                            <GiReceiveMoney className="text-4xl" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StudentHomePage;
