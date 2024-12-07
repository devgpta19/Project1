import React, { useState } from "react";
import { IoMdArrowBack, IoMdLogOut } from "react-icons/io";

const TotalStudents = () => {
    const [students] = useState([
        {
            id: 1,
            name: "John Doe",
            enrollment: "S123456",
            degree: "B.Tech",
            department: "Computer Science",
            course: "Data Structures",
            email: "john.doe@example.com",
            phone: "+123456789",
        },
        {
            id: 2,
            name: "Sarah Lee",
            enrollment: "S654321",
            degree: "B.Tech",
            department: "Information Technology",
            course: "Web Development",
            email: "sarah.lee@example.com",
            phone: "+987654321",
        },
    ]);

    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-6xl mb-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <a href="/admin-home" className="text-3xl">
                        <IoMdArrowBack />
                    </a>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Total Students
                    </h1>
                </div>

                <div className="flex items-center space-x-4 text-gray-700">
                    <span className="font-semibold">Admin ID: Admin123</span>
                    <a href="/" className="text-3xl">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Student Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            {student.name}
                        </h2>
                        <p className="text-gray-600 mb-1">
                            <span className="font-semibold">Enrollment:</span> {student.enrollment}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Course:</span> {student.course}
                        </p>
                        <button
                            onClick={() => setSelectedStudent(student)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Student Details
                        </h2>
                        <p className="mb-2">
                            <span className="font-semibold">Name:</span>{" "}
                            {selectedStudent.name}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Enrollment:</span>{" "}
                            {selectedStudent.enrollment}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Course:</span>{" "}
                            {selectedStudent.course}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Degree:</span>{" "}
                            {selectedStudent.degree}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Department:</span>{" "}
                            {selectedStudent.department}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Email:</span>{" "}
                            {selectedStudent.email}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Phone:</span>{" "}
                            {selectedStudent.phone}
                        </p>
                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TotalStudents;
