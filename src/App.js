import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Repair from './pages/Repair';
import Location from './pages/Location';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import TirePage from './pages/TirePage';
import MaintenancePage from './pages/MaintenancePage';
import MechanicsPage from './pages/MechanicsPage';
import TruckPage from './pages/TruckPage';


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reparation" element={<Repair />}/>
            <Route path="/location" element={<Location />}/>
            <Route path="/camion" element={<TruckPage />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/mentions_legales" element={<LegalNotice />}/>
            <Route path="/politique_de_confidentialite" element={<PrivacyPolicy />}/>
            <Route path="/tire" element={<TirePage />}/>
            <Route path="/maintenance" element={<MaintenancePage />}/>
            <Route path="/mechanics" element={<MechanicsPage />}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default App;