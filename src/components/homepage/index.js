import React, { Component } from "react";
import auth from "../auth/auth";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Homepage</h1>
                <button
                    onClick={() => {
                        auth.logout(() => {
                            this.props.history.push("/login");
                        })
                    }}
                >Logout</button>
            </div>
        )
    }
}

export default Homepage;