import React from "react";
import "./catalogoStyles.css";
import { CardsContainer } from "../../components/cardsContainer/cardsContainer.jsx";
import listaProductos from "../../assets/listaProductos.jsx";
import { HeaderNav } from "../../components/header/header.jsx";
import * as bootstrap from 'bootstrap'

export function Catalogo () {
    return (
        <div className="page-container">
            <HeaderNav loggedIn={false} userName={""} rightSlot={null} />
            <main className="container catalogoContainer">
                <div className="line"></div>
                <h1 className="title">Catalogo</h1>
                <div className="line"></div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <CardsContainer productos={listaProductos}/>
                    </div>
                    <div className="col-2"></div>
                </div>
                
            </main>


            
        </div>
    );
}