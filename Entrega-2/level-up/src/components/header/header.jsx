import React from "react";
import "./headerStyles.css";
import {NavButton} from "../button/navButton.jsx"

export function HeaderNav({ loggedIn = false, userName = "" , rightSlot }) {
return (
    <header className="headerPpal">
        <nav className="navbarPpal">
            <div className="navbarFirstContainer">
                <a className="navbar-brand logoName" href="#" id="logo" onClick={(e)=>e.preventDefault()}>
                    <img src="assets/icons/icono.png" alt="icono" width="60" height="auto" className="d-inline-block align-text-center" />
                    Level-Up
                </a>
            </div>


            <div className="navBarButtons">
                <div className="navBarButtonsContainer">
                    <NavButton text="Inicio" to="/"/>
                    <NavButton text="Catalogo" to="/catalogo"/>
                </div>


                <div className="navBarButtonsContainer">
                    {rightSlot}
                    {loggedIn ? (
                        <>
                            <a className="nav-link active btnAgregarHeader" href="#" onClick={(e)=>e.preventDefault()}>
                                {userName ? `Hola, ${userName}` : "Cuenta"}
                            </a>
                            <a className="nav-link active btnAgregarHeader" href="#" onClick={(e)=>e.preventDefault()}>
                                Cerrar sesión
                            </a>
                        </>
                    ) : (
                        <>
                            <a className="nav-link active btnAgregarHeader" href="#" onClick={(e)=>e.preventDefault()}>Ingresar</a>
                            <a className="nav-link active btnAgregarHeader" href="#" onClick={(e)=>e.preventDefault()}>Registrarse</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    </header>
    );
}