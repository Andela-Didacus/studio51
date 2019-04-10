import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import Logo from "../logo";
import auth from "../auth/auth";
import "./login.css";

class Login extends Component {
    loginSuccess = (response) => {
        console.log(response);
        auth.login(()=> {
            this.props.history.push("/")
        })
    }

    loginFailure = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div className="login-main">
             <div className="login-sections-container">
                <div className="login-logo-section"><Logo /></div>
                <div className="login-welcome-section flex-column">
                    <span>𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗦𝘁𝘂𝗱𝗶𝗼𝟱𝟭</span>
                </div>
                <div className="login-desc-section flex-column">
                    <span>
                        𝗣𝗿𝗼𝘃𝗶𝗱𝗶𝗻𝗴 𝗮 𝘀𝗮𝗳𝗲 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝘁𝗼 𝗦𝗵𝗮𝗿𝗲 𝗽𝗵𝗼𝘁𝗼𝗴𝗿𝗮𝗽𝗵𝘆 𝘀𝘁𝘂𝗱𝗶𝗼 𝗲𝗾𝘂𝗶𝗽𝗺𝗲𝗻𝘁
                        𝗮𝗻𝗱 𝗻𝘂𝗿𝘁𝘂𝗿𝗶𝗻𝗴 𝗳𝘂𝘁𝘂𝗿𝗲 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗽𝗵𝗼𝘁𝗼𝗴𝗿𝗮𝗽𝗵𝗲𝗿𝘀.
                    </span>
                </div>
                <div className="login-button-section flex-column">
                    <span style={{ fontSize: "1.3rem" }}>𝗣𝗹𝗲𝗮𝘀𝗲 𝗟𝗼𝗴 𝗶𝗻 𝘄𝗶𝘁𝗵 𝘆𝗼𝘂𝗿 𝗲𝗺𝗮𝗶𝗹 𝘁𝗼 𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗲</span>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <GoogleLogin
                            clientId="954845521802-bas3vs2n9bndvot8cr84hvsarppco0m4.apps.googleusercontent.com"
                            render={renderProps => (
                                <div className="login-button" onClick={renderProps.onClick}>
                                    <span className="google-logo flex-column"></span>
                                    <span className="google-sign-in flex-column">𝗦𝗶𝗴𝗻 𝗶𝗻 𝘄𝗶𝘁𝗵 𝗚𝗼𝗼𝗴𝗹𝗲</span>
                                </div>
                            )}
                            buttonText="Login"
                            onSuccess={this.loginSuccess}
                            onFailure={this.loginFailure}
                            cookiePolicy={'single_host_origin'}
                        />  
                    </div>
                </div>
             </div>
            </div>
        )
    }
}

export default Login;