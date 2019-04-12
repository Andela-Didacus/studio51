import React, { Component } from "react";
import "./mainSection.scss";
import Dropdown from "../dropdown";

class MainSection extends Component {
    render() {
        return (
            <div className="main-section">
                Main Section
                <Dropdown
                    name="location"
                    items={["Kisumu", "Mombasa", "Nairobi"]}
                />
            </div>
        )
    }
}

export default MainSection;