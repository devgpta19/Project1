import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const TotalStudents = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const adminID = "Admin123";

  const students = [
    {
      id: 1,
      name: "John Doe",
      enrollment: "S123456",
      degree: "B.Tech",
      department: "Computer Science",
      email: "john.doe@example.com",
      phone: "+123456789",
      address: "123 Main St, City",
      registrationDate: "2024-01-01",
    },
    {
      id: 2,
      name: "Sarah Lee",
      enrollment: "S654321",
      degree: "B.Tech",
      department: "Information Technology",
      email: "sarah.lee@example.com",
      phone: "+987654321",
      address: "456 Elm St, City",
      registrationDate: "2024-01-05",
    },
  ];

  const handleDetails = (student) => {
    setSelectedStudent(student);
    setShowDetails(true);
  };

  const closeDetails = () => setShowDetails(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <button
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          onClick={() => window.history.back()}
        >
          <IoMdArrowBack className="text-2xl mr-2" />
          Back
        </button>
        <span className="font-semibold text-gray-800 text-lg">
          Admin ID: {adminID}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Total Students</h1>

      {/* Students Table */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Enrollment No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Degree</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2">{student.enrollment}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.degree}</td>
                <td className="px-4 py-2">{student.department}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDetails(student)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Window */}
      {showDetails && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Student Details
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Name:</strong> {selectedStudent.name}
              </li>
              <li>
                <strong>Enrollment No.:</strong> {selectedStudent.enrollment}
              </li>
              <li>
                <strong>Degree:</strong> {selectedStudent.degree}
              </li>
              <li>
                <strong>Department:</strong> {selectedStudent.department}
              </li>
              <li>
                <strong>Email:</strong> {selectedStudent.email}
              </li>
              <li>
                <strong>Phone:</strong> {selectedStudent.phone}
              </li>
              <li>
                <strong>Address:</strong> {selectedStudent.address}
              </li>
              <li>
                <strong>Registration Date:</strong>{" "}
                {selectedStudent.registrationDate}
              </li>
            </ul>

            <button
              onClick={closeDetails}
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
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
