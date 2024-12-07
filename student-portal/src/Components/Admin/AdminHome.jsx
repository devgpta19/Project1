import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom"; // if you are using react-router

const AdminHomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Admin Dashboard
                </h1>
                {/* Admin Info on Top-right */}
                <div className="flex items-center space-x-4 text-gray-700">
                    <span className="font-semibold">UserID: Admin123</span>
                    <a href="/" className="text-3xl">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Dashboard Overview */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Students Card */}
                    <a href="/total-students" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Total Students</p>
                                <p className="text-3xl font-bold">1024</p>
                            </div>
                            <IoIosStats className="text-4xl" />
                        </div>
                    </a>

                    {/* Total Courses Card */}
                    <a href="/total-courses" className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Total Courses</p>
                                <p className="text-3xl font-bold">15</p>
                            </div>
                            <FaUserCog className="text-4xl" />
                        </div>
                    </a>

                    {/* Pending Approvals Card */}
                    <a href="/pending-requests" className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl font-semibold">Pending Approvals</p>
                                <p className="text-3xl font-bold">5</p>
                            </div>
                            <IoPersonAdd className="text-4xl" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Recent Activity */}
            {/* <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                        <span className="text-gray-700">Student John Doe registered for MERN Stack Course</span>
                        <span className="text-gray-600">5 mins ago</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="text-gray-700">Payment received for Course DevOps</span>
                        <span className="text-gray-600">1 hour ago</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="text-gray-700">New Course "React Native" added</span>
                        <span className="text-gray-600">2 hours ago</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="text-gray-700">Student Sarah Lee enrolled for DevOps</span>
                        <span className="text-gray-600">4 hours ago</span>
                    </li>
                </ul>
            </div> */}

            {/* Admin Actions */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Manage Students */}
                    <Link to="/manage-students" className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <p className="text-xl font-semibold">Manage Students</p>
                    </Link>

                    {/* Manage Courses */}
                    <Link to="/manage-courses" className="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <p className="text-xl font-semibold">Manage Courses</p>
                    </Link>

                    {/* Approve Payments */}
                    <Link to="/approve-payments" className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <p className="text-xl font-semibold">Approve Payments</p>
                    </Link>

                    {/* Generate Reports */}
                    <Link to="/generate-reports" className="bg-red-600 text-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <p className="text-xl font-semibold">Generate Reports</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;
