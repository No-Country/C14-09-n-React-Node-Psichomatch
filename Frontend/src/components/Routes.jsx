import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecoverPassword from './RecoverPassword';

const RoutesApp = () => {
  return (
    <Router>
        <Link to="/RecuperarContraseña">¿Olvidaste tu contraseña?</Link>
        <Routes>
          <Route exact path="/RecuperarContraseña" element={<RecoverPassword />} />
        </Routes>
    </Router>
  );
}

export default RoutesApp;
