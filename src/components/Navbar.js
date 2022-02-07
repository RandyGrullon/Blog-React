import React from "react"
import logo from "../images/logo-3.png"

export default function Navbar() {
    return (
        <nav className="nav--container">
            <ul className="nav--list">
                <a className="nav--text" href="#">
                    <li className="nav--items">Inicio</li>
                </a>
                <a className="nav--text" href="#">
                    <li className="nav--items">Calculadora</li>
                </a>
                <a className="nav--text" href="#">
                    <li className="nav--items">Presidente</li>
                </a>
                <a className="nav--text" href="#">
                    <li className="nav--items">Diario</li>
                </a>
            </ul>
        </nav>
    )
}