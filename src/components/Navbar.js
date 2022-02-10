import React from "react"
import {BrowserRouter as Router, Routes, Route, NavLink, Link  } from "react-router-dom";

const nelson = () =>{
    
}


export default function Navbar() {
    return (
        
        <nav className="nav--container">
            <ul className="nav--list">
                
                <Link className="nav--text" 
                to="/">
                    <li className="nav--items">Home</li>
                    </Link>

                <Link className="nav--text" 
                to="/Calculadora">
                    <li className="nav--items">Calculadora</li>
                    </Link>

                <Link className="nav--text" 
                to="/Presidente">
                    <li className="nav--items">Presidente</li>
                    </Link>

                <Link className="nav--text" 
                to="/DiarioRef">
                    <li className="nav--items">Diario</li>
                    </Link>
               
            </ul>
        </nav>
    )
} 