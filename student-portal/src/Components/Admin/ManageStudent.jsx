import React, { useState } from "react";
import { IoMdArrowBack, IoMdLogOut } from "react-icons/io";

const ManageStudents = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "John Doe",
            enrollment: "S123456",
            degree: "B.Tech",
            department: "Computer Science",
            email: "john.doe@example.com",
            phone: "+123456789",
        },
        {
            id: 2,
            name: "Sarah Lee",
            enrollment: "S654321",
            degree: "B.Tech",
            department: "Information Technology",
            email: "sarah.lee@example.com",
            phone: "+987654321",
        },
    ]);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedStudent((prev) => ({
            ...prev, 
            [name]: value 
        }));
    };

    const handleUpdate = () => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === selectedStudent.id ? selectedStudent : student
            )
        );
        setSelectedStudent(null);
    };

    const handleRemove = (id) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <div className="w-full max-w-6xl flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <a href="/admin" className="text-3xl text-gray-800">
                        <IoMdArrowBack />
                    </a>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Manage Students
                    </h1>
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                    <span className="font-semibold">UserID: Admin123</span>
                    <span className="px-4 py-2 bg-gray-800 text-white rounded-full">
                        Admin
                    </span>
                    <a href="/" className="text-3xl">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Students Table */}
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Student List
                </h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-800 text-white text-left">
                            <th className="p-4">Enrollment No.</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Degree</th>
                            <th className="p-4">Department</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b last:border-0 hover:bg-gray-100">
                                <td className="p-4">{student.enrollment}</td>
                                <td className="p-4">{student.name}</td>
                                <td className="p-4">{student.degree}</td>
                                <td className="p-4">{student.department}</td>
                                <td className="p-4 space-x-4">
                                    <button
                                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                        onClick={() => setSelectedStudent(student)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                                        onClick={() => handleRemove(student.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Form Popup */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Update Student Info
                        </h2>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdate();
                            }}
                        >
                            <div>
                                <label className="block text-gray-600">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedStudent.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={selectedStudent.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={selectedStudent.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
                                    onClick={() => setSelectedStudent(null)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageStudents;
