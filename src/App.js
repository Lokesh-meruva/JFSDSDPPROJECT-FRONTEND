import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Scholarships from './pages/Scholarships';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ApplicationForm from './pages/ApplicationForm';
import ManageApplications from './pages/ManageApplications';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminRegister from './pages/AdminRegister';
import UserRegister from './pages/UserRegister';
import UserDashboard from './pages/UserDashboard';
import ScholarshipDetails from './pages/ScholarshipDetails';

function App() {
    const [role, setRole] = useState(null); // State to manage user role (admin/user)

    return (
        <>
            <Navbar /> {/* Single Navbar for all users */}
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/profile" element={<Profile userId={1} />} />
                <Route path="/login" element={<Login setRole={setRole} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/application" element={<ApplicationForm />} />
                <Route path="/applications" element={<ManageApplications />} />
                
                {/* Admin Routes */}
                <Route
                    path="/adminlogin"
                    element={<AdminLogin setRole={() => setRole('admin')} />}
                />
                <Route path="/adminregister" element={<AdminRegister />} />
                
                {/* User Routes */}
                <Route
                    path="/userlogin"
                    element={<UserLogin setRole={() => setRole('user')} />}
                />
                <Route path="/userregister" element={<UserRegister />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/scholarship-details" element={<ScholarshipDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
