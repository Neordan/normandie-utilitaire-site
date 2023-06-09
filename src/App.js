import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Repair from './pages/Repair';
import Location from './pages/Location';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reparation" element={<Repair />}/>
            <Route path="/location" element={<Location />}/>
            <Route path="/mentions_legales" element={<LegalNotice />}/>
            <Route path="/politique_de_confidentialite" element={<PrivacyPolicy />}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default App;