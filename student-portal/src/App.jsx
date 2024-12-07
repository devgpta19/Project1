import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Student/Studenthome';
import FeePayment from './Components/Student/FeePayment';
import Registration from './Components/Student/Registration';
import CheckResult from './Components/Student/CheckResult';
import Academic from './Components/Student/Academic';
import LandingPage from './Components/Student/Landingpage';
import EnrolledCourses from './Components/Student/EnrolledCourses';
import AttendancePage from './Components/Student/Attendance';
import RegistrationDone from './Components/Student/RegistrationDone';
import PrintReceipt from './Components/Student/PrintReceipt';
import AdminHomePage from './Components/Admin/AdminHome';
import StudentHomePage from './Components/Student/StudentPortal';
import AssignmentsPage from './Components/Student/Assignments';
import TotalStudents from './Components/Admin/TotalStudents';
import ManageStudents from './Components/Admin/ManageStudent';


const App = () => {
  return (
    <>
      <div className='min-h-screen w-screen overflow-hidden p-1 bg-slate-700'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/student-home" element={<Home />} /> */}
            <Route path="/student-home" element={<StudentHomePage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration-done" element={<RegistrationDone />} />
            <Route path="/fee-payment" element={<FeePayment />} />
            <Route path="/print-receipt" element={<PrintReceipt />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/academic-check-result" element={<CheckResult />} />
            <Route path="/academic-enrolled-courses" element={<EnrolledCourses />} />
            <Route path="/academic-attendance" element={<AttendancePage />} />
            <Route path="/assignment" element={<AssignmentsPage />} />


            <Route path="/admin-home" element={<AdminHomePage />} />
            <Route path="/total-students" element={<TotalStudents />} />
            <Route path="/manage-students" element={<ManageStudents />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
