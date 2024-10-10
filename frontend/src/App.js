import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./AppRoutes";
import ModalContext from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const toggleAuthModal = () => {
    setAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <AuthProvider>
      <ModalContext.Provider
        value={{
          isAuthModalOpen,
          toggleAuthModal,
        }}
      >
        <Router>
          <div className="app-container">
            <NavbarComponent />
            <main className="app-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ModalContext.Provider>
    </AuthProvider>
  );
};

export default App;
