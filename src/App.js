import React from "react"
import Navbar from "./components/Navbar"
import Home from './Pages/Home'
import DiarioRef from './Pages/DiarioRef'
import Calculadora from './Pages/Calculadora'
import Presidente from './Pages/Presidente'
import NotFound from './Pages/NotFound'

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/DiarioRef" element={<DiarioRef />} /> 
                    <Route path="/Calculadora" element={<Calculadora />} />  
                    <Route path="/Presidente" element={<Presidente />} /> 
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
        </Router>
    );
}