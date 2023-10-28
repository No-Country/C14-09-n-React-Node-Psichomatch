import { createContext, useContext, useState } from 'react';

const PatientContext = createContext();

export const usePatient = () => {
  return useContext(PatientContext);
};

export const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);

  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
