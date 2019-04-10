import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { ProtectedRoute } from "../auth/protectedRoute";
import NavBar from "../navBar";
import "./homepage.scss"
import HomePageContainer from "../homePageContainer";

class Homepage extends Component {
    render() {
        return (
            <div className="home-page">
                <NavBar />
                <HomePageContainer />
            </div>
        )
    }
}

export default Homepage;