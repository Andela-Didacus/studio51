import React, { Component } from "react";
import "./homeContainer.scss";
import MainSection from "../mainSection";
import StudioContainer from "../studioContainer";
import FooterSection from "../footerSection";

class HomeContainer extends Component {
    render() {
        return (
            <div className="home-container">
                <MainSection />
                <StudioContainer />
                <FooterSection />
            </div>
        )}
};

export default HomeContainer;