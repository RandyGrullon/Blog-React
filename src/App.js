import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="container">
                
                <Routes>
                    <Route path="/home">
                        
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}