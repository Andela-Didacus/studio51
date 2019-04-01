import React, { Component } from "react";
// import auth from "../auth/auth";
import NavBar from "../navBar";

class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {/* <button
                    onClick={() => {
                        auth.logout(() => {
                            this.props.history.push("/login");
                        })
                    }}
                >Logout</button> */}
            </div>
        )
    }
}

export default Homepage;