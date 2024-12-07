import React, { useState, useEffect } from "react";
import { IoIosCard } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Footer from "../Footer";

const FeePayment = ({ selectedCourses = ["mern_stack", "devops"] }) => {
  // Course fees definition
  const courseFees = {
    "full_stack": 18000,
    "java_full_stack": 17000,
    "mern_stack": 20000,
    "mean_stack": 20000,
    "python_full_stack": 15000,
    "devops": 10000,
  };

  // Calculate total course fee based on selected courses
  const courseFee = selectedCourses.reduce((total, course) => {
    return total + (courseFees[course] || 0);
  }, 0);

  // Additional fees
  const tuitionFee = 10000;
  const examFee = 5000;
  const lateFee = 0.0;

  // Calculate total fee and GST
  const totalFee = courseFee + tuitionFee + examFee + lateFee;
  const gst = totalFee * 0.18; // 18% GST
  const finalAmount = totalFee + gst;

  const [formData, setFormData] = useState({
    studentName: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission and trigger Razorpay payment
  const handlePayment = (e) => {
    e.preventDefault();

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: finalAmount * 100, // Razorpay expects the amount in paise (1 INR = 100 paise)
      currency: "INR",
      name: formData.studentName,
      description: "Fee Payment",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        console.log("Payment Response:", response);
      },
      prefill: {
        name: formData.studentName,
        email: "student@example.com", // You can dynamically add the email if available
        contact: "9999999999", // You can dynamically add the contact number if available
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
          <span className="flex gap-3 items-center">
            <a href="/student-home" className="mr-8">
              <IoChevronBackCircleOutline />
            </a>
            <IoIosCard className="text-5xl" />
            Fee Payment
          </span>
          <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
            <h1>
              <IoMdLogOut />
            </h1>
          </a>
        </h1>
      </div>

      {/* Fee Payment Form Card */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <form className="space-y-6" onSubmit={handlePayment}>
          {/* Student Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="studentName">
              Student Name
            </label>
            <input
              required
              type="text"
              id="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Student Name"
            />
          </div>

          {/* Payment Breakdown */}
          <div className="space-y-4">
            {/* Display selected course fees */}
            <div>
              <h3 className="font-semibold">Selected Courses</h3>
              {selectedCourses.length > 0 ? (
                selectedCourses.map((course, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{course.replace('_', ' ').toUpperCase()} Fee</span>
                    <span>₹{courseFees[course]}</span>
                  </div>
                ))
              ) : (
                <div>No courses selected</div>
              )}
            </div>

            {/* Fixed Fees */}
            <div className="flex justify-between">
              <span className="font-medium">Tuition Fee</span>
              <span>₹{tuitionFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Exam Fee</span>
              <span>₹{examFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Late Fee</span>
              <span>₹{lateFee}</span>
            </div>

            {/* Total Fee Calculation */}
            <div className="flex justify-between font-bold">
              <span>Total Fee</span>
              <span>₹{totalFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">18% GST</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Final Amount (Including GST)</span>
              <span>₹{finalAmount}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              required
              id="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>

          {/* Card Details */}
          {formData.paymentMethod === "Credit Card" || formData.paymentMethod === "Debit Card" ? (
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Card Number"
              />

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <input
                    type="month"
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter CVV"
                  />
                </div>
              </div>
            </div>
          ) : null}

          {/* Pay Now Button */}
          <div className="flex justify-end">
            <a href="print-receipt" className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring focus:ring-blue-300"
            >
              Pay <span className="text-lg font-bold">₹{finalAmount}</span> Now
            </a>
            {/* <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring focus:ring-blue-300"
            >
              Pay <span className="text-lg font-bold">₹{finalAmount}</span> Now
            </button> */}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FeePayment;
