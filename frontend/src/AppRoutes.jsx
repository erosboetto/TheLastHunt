import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Character from './components/character/Character';
import Weapon from './components/weapon/Weapon';
import Planet from './components/planet/Planet';
import SupportForm from './components/help-page/SupportForm';
import Requirements from './components/help-page/Requirements';
import Info from './components/info/Info';

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
