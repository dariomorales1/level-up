import "./cardsContainerStyles.css"
import { listaProductos } from "assets/listaProductos.jsx";
import React from "react";
import { Card } from "../card/card.jsx";



export function CardsContainer () {
    return (

        {listaProductos.length === 0 ? (
            <p>No hay productos.</p>
        ) : (
            productos.map((p) => (
            <Card
                key={p.id}
                nombre={p.nombre}
                imgLink={p.imgLink}              // si usas /imagenes/... deben estar en /public
                descripcionCorta={p.descripcionCorta}
                precio={p.precio}
            />
            ))
        )}

    );
}