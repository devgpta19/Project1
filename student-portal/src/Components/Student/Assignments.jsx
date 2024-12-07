import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import { IoChevronBackCircleOutline } from "react-icons/io5";


const AssignmentsPage = () => {
    // Example assignment data
    const assignments = [
        {
            title: "React Basics Assignment",
            status: "Completed",
            dueDate: "2024-12-10",
        },
        {
            title: "Data Structures Quiz",
            status: "Pending",
            dueDate: "2024-12-15",
        },
        {
            title: "JavaScript Project",
            status: "Pending",
            dueDate: "2024-12-20",
        },
        {
            title: "UI Design Assignment",
            status: "Completed",
            dueDate: "2024-12-05",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <div className="max-w-5xl mx-auto flex justify-between items-center mb-10">
                <div className="flex items-center gap-2 justify-center">
                    <a href="/student-home" className=" text-2xl"><IoChevronBackCircleOutline/></a>
                    <h1 className="text-4xl font-bold text-gray-800">My Assignments</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">UserID: Student123</span>
                    <span className="px-4 py-2 bg-gray-800 text-white rounded-full">
                        Student
                    </span>
                    <a href="/" className="text-3xl text-gray-600 hover:text-gray-800">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Assignments Section */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments.map((assignment, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                        {/* Assignment Icon */}
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-md">
                            <MdAssignment className="text-2xl" />
                        </div>

                        <div className="mt-8">
                            {/* Assignment Title */}
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                                {assignment.title}
                            </h2>
                            {/* Due Date */}
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-medium">Due:</span> {assignment.dueDate}
                            </p>
                            {/* Status Badge */}
                            <div
                                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${assignment.status === "Completed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                            >
                                {assignment.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssignmentsPage;
