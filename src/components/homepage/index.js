import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "../auth/protectedRoute";
import NavBar from "../navBar";

class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Homepage;