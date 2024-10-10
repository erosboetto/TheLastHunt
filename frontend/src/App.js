import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import AppRoutes from "./AppRoutes";
import ModalContext from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';
import Character from './components/character/Character.jsx';
import Weapon from './components/weapon/Weapon.jsx';
import Planet from './components/planet/Planet.jsx';
import SupportForm from './components/help-page/SupportForm.jsx';
import Requirements from './components/help-page/Requirements.jsx';
import Info from './components/info/Info.jsx';

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
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/info' element={<Info />} />
                <Route path='/characters' element={<Character />} />
                <Route path="/planets" element={<Planet />} />
                <Route path='/weapons' element={<Weapon />} />
                <Route path='/support-form' element={<SupportForm />} />
                <Route path='/requirements' element={<Requirements />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ModalContext.Provider>
    </AuthProvider>
  );
};

export default App;
