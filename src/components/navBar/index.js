import React, { Component } from "react";
import "./navBar.scss";

class NavBar extends Component {

    renderNavigationLinks = (links) => {
        const mappedLinks = links.map((link, index) => (
            <div key={index} className="nav-link">
                <span>{ link }</span>
            </div>
        ));
        return mappedLinks;
    }

    render() {
        const navigationLinks = ["Location", "Favourites", "About Us", "Search"];

        return (
            <div className="navbar-main">
                <div className="logo">
                    <span className="logo-text">𝔖𝔱𝔲𝔡𝔦𝔬51</span>
                </div>
                <div className="nav-links">
                    { this.renderNavigationLinks(navigationLinks) }
                    <div className="nav-link">
                        <i className="material-icons">menu</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;