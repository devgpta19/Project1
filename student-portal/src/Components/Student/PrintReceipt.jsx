import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const PrintReceipt = () => {
    const receiptDetails = {
        invoiceNumber: "INV202412060001",
        institutionName: "XYZ Institute",
        logo: "https://via.placeholder.com/150", // Replace with actual logo URL
        tagline: "Empowering Future Leaders",
        studentName: "John Doe",
        enrollmentNumber: "S123456789",
        email: "john.doe@example.com",
        date: new Date().toLocaleDateString(),
        courses: [
            { name: "MERN Stack Development", fee: 20000 },
            { name: "DevOps", fee: 15000 },
        ],
        totalFee: 35000,
        gst: 6300, // 18% GST
        finalAmount: 41300, // Total fee + GST
        paymentMethod: "Credit Card",
    };

    const handleDownload = () => {
        const receipt = document.getElementById("receipt");
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
            <html>
            <head>
                <title>Receipt</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        color: #333;
                        background: #fff;
                    }
                    .receipt-container {
                        max-width: 700px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #ddd;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        font-size: 14px;
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .header img {
                        max-width: 100px;
                        margin-bottom: 10px;
                    }
                    .header h1 {
                        font-size: 1.5rem;
                        margin: 0;
                    }
                    .header p {
                        font-size: 0.9rem;
                        color: gray;
                    }
                    .details, .payment-summary {
                        margin-bottom: 20px;
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 15px;
                    }
                    .details div, .payment-summary div {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                    }
                    .details div span, .payment-summary div span {
                        flex: 1;
                    }
                    .bold {
                        font-weight: bold;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        font-size: 0.85rem;
                        color: gray;
                    }
                </style>
            </head>
            <body>
                <div class="receipt-container">
                    ${receipt.innerHTML}
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8">
                <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
                    <span className="flex gap-3 items-center float-start">
                        <a href="/student-home" className="lg:mr-8">
                            <IoChevronBackCircleOutline />
                        </a>
                        Print Receipt
                    </span>

                    <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
                        <h1>
                            <IoMdLogOut />
                        </h1>
                    </a>
                </h1>
            </div>

            {/* Receipt Card */}
            <div
                id="receipt"
                className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 w-full max-w-4xl"
            >
                {/* Header */}
                <div className="header">
                    <img src={receiptDetails.logo} alt="Institution Logo" />
                    <h1 className="text-2xl font-bold text-gray-800">{receiptDetails.institutionName}</h1>
                    <p className="text-gray-600">{receiptDetails.tagline}</p>
                </div>

                {/* Invoice Details */}
                <div className="details">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Student Details</h2>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-700 w-1/3">Invoice Number:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.invoiceNumber}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700 w-1/3">Date:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.date}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700 w-1/3">Student Name:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.studentName}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700 w-1/3">Enrollment Number:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.enrollmentNumber}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700 w-1/3">Email:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.email}</span>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="payment-summary">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Summary</h2>
                    {receiptDetails.courses.map((course, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-700 w-1/3">{course.name}</span>
                            <span className="text-gray-600 w-2/3 text-right">₹{course.fee}</span>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-medium text-gray-700 w-1/3">Total Fee:</span>
                        <span className="text-gray-600 w-2/3 text-right">₹{receiptDetails.totalFee}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-medium text-gray-700 w-1/3">GST (18%):</span>
                        <span className="text-gray-600 w-2/3 text-right">₹{receiptDetails.gst}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-gray-800 w-1/3">Final Amount:</span>
                        <span className="font-bold text-gray-800 w-2/3 text-right">₹{receiptDetails.finalAmount}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-medium text-gray-700 w-1/3">Payment Method:</span>
                        <span className="text-gray-600 w-2/3 text-right">{receiptDetails.paymentMethod}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <p>Thank you for choosing XYZ Institute!</p>
                    <p>Please retain this receipt for your records.</p>
                </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleDownload}
                    className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Download Receipt
                </button>
            </div>
        </div>
    );
};

export default PrintReceipt;
