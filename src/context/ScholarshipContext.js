// src/context/ScholarshipContext.js
import React, { createContext, useState } from 'react';

export const ScholarshipContext = createContext();

export const ScholarshipProvider = ({ children }) => {
  const [scholarships, setScholarships] = useState([]);

  return (
    <ScholarshipContext.Provider value={{ scholarships, setScholarships }}>
      {children}
    </ScholarshipContext.Provider>
  );
};
