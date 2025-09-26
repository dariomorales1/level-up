import React from "react";
import "./catalogoStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "../components/card/card.jsx";

export function Catalogo () {
    return (
        <div class="page">
        <div id="headerPpal"></div>
        <main>
            <div id="navbarProductos"></div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div id="carrousel"></div>
                    <hr/>
                    <h1 class="titulo">Productos</h1>
                    <hr/>
                    <div class="productosContainer" id="productosContainer"></div>
                    
                </div>
                <div class="col-2"></div>
            </div>

        </main>


        
        <div id="app-footer"></div>
    </div>
    );
}