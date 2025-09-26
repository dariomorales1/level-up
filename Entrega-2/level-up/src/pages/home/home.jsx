import React from "react";
import "./homeStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Home ({valorInicial=0} = {}) {
    const [count, setCount] = useState(valorInicial);
    return (
        <div className="home-container">
            <h1>Welcome to Level Up!</h1>
            <p>Your journey to mastering coding starts here.</p>
            <button onClick={() => setCount(count + 1)}>
                Count is {count}
            </button>
            <Link to="/catalogo" className="catalog-link">
                Go to Catalog
            </Link>
            <Link to="/about" className="about-link">
                Learn more about us
            </Link>
        </div>
    );
}