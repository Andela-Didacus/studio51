import React, { Component } from "react";
import "./navBar.scss";
import Dropdown from "../dropdown";

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
        const navigationLinks = ["Favourites", "About Us", "Search"];

        return (
            <div className="navbar-main">
                <div className="logo">
                    <span className="logo-text">𝔖𝔱𝔲𝔡𝔦𝔬51</span>
                </div>
                <div className="nav-links">
                    <Dropdown
                        name="Location"
                        items={["Kisumu", "Nairobi", "Mombasa", "Nakuru"]}
                        dropdownStyle={{ width: "9rem", color: "white", zIndex: "2", marginTop: "1rem"}}
                    />
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