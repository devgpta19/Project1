import React, { useState } from "react";
import { IoMdArrowBack, IoMdLogOut } from "react-icons/io";

const ManageStudent = () => {
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
    const [formData, setFormData] = useState(null);

    // Handle opening modal with student data
    const handleUpdate = (student) => {
        setSelectedStudent(student);
        setFormData({ ...student }); // Pre-fill form with current student data
    };

    // Handle deleting a student
    const handleDelete = (id) => {
        const filteredStudents = students.filter((student) => student.id !== id);
        setStudents(filteredStudents);
    };

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submit (update student)
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStudents = students.map((student) =>
            student.id === formData.id ? formData : student
        );
        setStudents(updatedStudents);
        setSelectedStudent(null); // Close modal after update
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <div className="w-full max-w-6xl flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <a href="/admin-home" className="text-3xl text-gray-800">
                        <IoMdArrowBack />
                    </a>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Students</h1>
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                    <span className="font-semibold">UserID: Admin123</span>
                    <span className="px-4 py-2 bg-gray-800 text-white rounded-full">Admin</span>
                    <a href="/" className="text-3xl">
                        <IoMdLogOut />
                    </a>
                </div>
            </div>

            {/* Students List */}
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Student List</h2>

                {/* Student Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer"
                        >
                            <div className="flex flex-col space-y-4">
                                <div className="text-xl font-semibold">{student.name}</div>
                                <div className="text-gray-600">{student.enrollment}</div>
                                <div className="text-gray-600">{student.degree} - {student.department}</div>
                                <div className="text-gray-600">{student.email}</div>
                                <div className="text-gray-600">{student.phone}</div>
                                
                                {/* Update and Delete Buttons */}
                                <div className="flex gap-4">
                                    <button
                                        className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                                        onClick={() => handleUpdate(student)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student Update Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Student Details</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="enrollment">Enrollment No</label>
                                <input
                                    type="text"
                                    id="enrollment"
                                    name="enrollment"
                                    value={formData.enrollment}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="degree">Degree</label>
                                <input
                                    type="text"
                                    id="degree"
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="department">Department</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-between">
                                <label className="font-semibold text-gray-700" htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
                                    onClick={() => setSelectedStudent(null)} // Close modal
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageStudent;
