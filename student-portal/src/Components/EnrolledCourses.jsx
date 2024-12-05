import React from 'react';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const EnrolledCourses = () => {
    // Course modules data with durations in hours
    const courses = {
        mern_stack: {
            name: "MERN Stack",
            chapters: [
                { chapter: "Introduction to HTML", duration: 5 }, // duration in hours
                { chapter: "Introduction to CSS", duration: 6 },
                { chapter: "Introduction to JavaScript", duration: 8 },
                { chapter: "React.js Basics", duration: 10 },
                { chapter: "Node.js Basics", duration: 8 },
                { chapter: "Express.js Framework", duration: 6 },
                { chapter: "MongoDB Basics", duration: 7 },
            ]
        },
        devops: {
            name: "DevOps",
            chapters: [
                { chapter: "Introduction to DevOps", duration: 6 },
                { chapter: "Git Basics", duration: 5 },
                { chapter: "Jenkins CI/CD", duration: 8 },
                { chapter: "Kubernetes Fundamentals", duration: 10 },
                { chapter: "Docker Basics", duration: 7 },
                { chapter: "Cloud Computing with AWS", duration: 12 },
            ]
        }
    };

    // Function to calculate total duration in days
    const calculateTotalDuration = (course) => {
        const totalHours = course.chapters.reduce((total, chapter) => total + chapter.duration, 0);
        const totalDays = Math.ceil(totalHours / 8); // Assuming 8 hours per day of study
        return totalDays < 100 ? 100 : totalDays; // Ensure at least 100 days
    };

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 p-5 flex flex-col items-center">
            <div className="w-full max-w-4xl mb-8">
                <h1 className="flex flex-row items-center text-3xl font-bold lg:justify-between text-gray-800">
                    <span className="flex gap-3 items-center float-start">
                        <a href="/academic" className="lg:mr-8">
                            <IoChevronBackCircleOutline />
                        </a>
                        Enrolled Course(s)
                    </span>

                    <a href="/" className="float-end flex justify-end text-3xl w-full h-full font-bold">
                        <h1>
                            <IoMdLogOut />
                        </h1>
                    </a>
                </h1>
            </div>

            {/* Enrolled Courses Card */}
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <div className="space-y-6">
                    {/* MERN Stack Course */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{courses.mern_stack.name}</h2>
                        <ul className="space-y-3 mt-4">
                            {courses.mern_stack.chapters.map((chapter, index) => (
                                <li key={index} className="flex justify-between">
                                    <span className="text-gray-700">{chapter.chapter}</span>
                                    <span className="text-gray-500">{chapter.duration} hours</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 font-semibold text-gray-700">
                            Total Duration: {calculateTotalDuration(courses.mern_stack)} days
                        </div>
                    </div>

                    {/* DevOps Course */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{courses.devops.name}</h2>
                        <ul className="space-y-3 mt-4">
                            {courses.devops.chapters.map((chapter, index) => (
                                <li key={index} className="flex justify-between">
                                    <span className="text-gray-700">{chapter.chapter}</span>
                                    <span className="text-gray-500">{chapter.duration} hours</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 font-semibold text-gray-700">
                            Total Duration: {calculateTotalDuration(courses.devops)} days
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledCourses;
