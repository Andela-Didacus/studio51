import React, { Component } from "react";
import "./sideBar.scss";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    renderSideBar = (items) => {
        const dropdownItems = items.map((item, index) => (
            <li key={ index } onClick={ this.props.itemClick }>
                { item }
            </li>
        ))

        return dropdownItems;
    }

    render() {
        const { items=["home", "profile", "logout"], name, sideBarStyle } = this.props;
        return (
            <div class="sidebar" style={ sideBarStyle }> 
                <span className="dropdown-trigger"><i className="material-icons">menu</i></span>
                <div className="sidebar-dropdown-content"> 
                    <ul>
                        { this.renderSideBar(items) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;