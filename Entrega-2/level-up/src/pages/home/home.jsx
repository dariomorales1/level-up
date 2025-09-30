import React from "react";
import "./homeStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderNav } from "../../components/header/header.jsx";

export function Home() {
    

    return (
        <div className="home-container">

            <HeaderNav loggedIn={false} userName={""} rightSlot={null} />

            <h1>Welcome to Level Up!</h1>
            <p>Your journey to mastering coding starts here.</p>


        </div>
    );
}