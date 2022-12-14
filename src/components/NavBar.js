import React from "react";
import "./css/NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return(
        <div className="navbar">
            <i className="fab fa-spotify"></i>
            <div className="app-header">{metadata.appName}</div>
            <div className="nav-links">
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >

                </a>
            </div>
        </div>
    );
};

export default NavBar;