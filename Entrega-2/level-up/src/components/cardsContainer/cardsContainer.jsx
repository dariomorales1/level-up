import "./cardsContainerStyles.css"
import  listaProductos  from "../../assets/listaProductos.jsx";
import React from "react";
import { Card } from "../card/card.jsx";



export function CardsContainer ({ productos = [] }) {
    return (
        <div className="cardsContainer">
            {listaProductos.length === 0 ? (
                <p>No hay productos.</p>
            ) : (
                listaProductos.map((p) => (
                <Card
                    key={p["Código"] || p.id}
                    nombre={p.Nombre}
                    imgLink={p.imgLink}
                    descripcionCorta={p["Descripción Corta"]}
                    precio={p.Precio}
                />
                ))
            )}

        </div>
        
    );
}