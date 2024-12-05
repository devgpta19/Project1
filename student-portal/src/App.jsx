import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Studenthome';
import FeePayment from './Components/FeePayment';
import Registration from './Components/Registration';
import CheckResult from './Components/CheckResult';
import Academic from './Components/Academic';
import LandingPage from './Components/Landingpage';
import EnrolledCourses from './Components/EnrolledCourses';
import AttendancePage from './Components/Attendance';


const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-slate-700'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student-home" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/fee-payment" element={<FeePayment />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/academic-check-result" element={<CheckResult />} />
            <Route path="/academic-enrolled-courses" element={<EnrolledCourses />} />
            <Route path="/academic-attendance" element={<AttendancePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
