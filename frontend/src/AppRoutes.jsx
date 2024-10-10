import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Character from './components/character/Character.jsx';
import Weapon from './components/weapon/Weapon.jsx';
import Planet from './components/planet/Planet.jsx';
import SupportForm from './components/help-page/SupportForm.jsx';
import Requirements from './components/help-page/Requirements.jsx';
import Info from './components/info/Info.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/info' element={<Info />} />
    <Route path='/characters' element={<Character />} />
    <Route path="/planets" element={<Planet />} />
    <Route path='/weapons' element={<Weapon />} />
    <Route path='/support-form' element={<SupportForm />} />
    <Route path='/requirements' element={<Requirements />} />
  </Routes>
);

export default AppRoutes;
