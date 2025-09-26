import React from "react";
import "./cardStyles.css";

export function Card ({nombre, imgLink, descripcionCorta, precio} = {}) {
    return (
        <div className="card">
            <div className="linkCard">
                <img className="cardImg" src={imgLink}
                    alt={nombre}/>
                <div className="card-body cardContainer">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcionCorta}</p>
                    <p className="precio"><strong>Precio: $</strong>{precio}</p>
                </div>
            </div>
            <div class="cardFooter">
                <a className="btnAgregar">Añadir al carrito</a>
            </div>
        </div>
        
    );
}