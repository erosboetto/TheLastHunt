import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/Navbar/MyNav'
import MyFooter from './components/Footer/MyFooter'
import Home from './components/Home/Home'
import Character from './components/character/Character';
import Weapon from './components/weapon/Weapon';
import Planet from './components/planet/Planet';
import SupportForm from './components/help-page/SupportForm';
import Requirements from './components/help-page/Requirements';
import Info from './components/info/Info';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ModalContext from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './helpers/scrollToTop';

function App() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const toggleAuthModal = () => {
    setAuthModalOpen(!isAuthModalOpen);
  };
  return (
    <main>
      <AuthProvider>
        <ModalContext.Provider
          value={{
            isAuthModalOpen,
            toggleAuthModal,
          }}
        >
          <BrowserRouter>
            <MyNav />
            <div className='app-bg'>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/info' element={<Info />} />
                <Route path="/planets" element={<Planet />} />
                <Route path="/characters" element={<Character />} />
                <Route path="/weapons" element={<Weapon />} />
                <Route path="/support-form" element={<SupportForm />} />
                <Route path="/requirements" element={<Requirements />} />
              </Routes>
            </div>
            <MyFooter />
          </BrowserRouter>
        </ModalContext.Provider>
      </AuthProvider>
    </main>
  )
}

export default App