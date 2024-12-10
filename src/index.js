// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScholarshipProvider } from './context/ScholarshipContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router> {/* Single Router here */}
        <AuthProvider>
            <ScholarshipProvider>
                <App />
            </ScholarshipProvider>
        </AuthProvider>
    </Router>
);
