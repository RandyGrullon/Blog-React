import React from "react"

export default function Navbar() {
    return (
        <nav className="nav--container">
            <ul className="nav--list">
                <a className="nav--text" href="">
                    <li className="nav--items">Home</li>
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