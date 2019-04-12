import React, { Component } from "react";
import "./dropdown.scss";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
        console.log(this.state);
    };

    renderDropdown = (items) => {
        const dropdownItems = items.map((item, index) => (
            <li key={ index }>
                { item }
            </li>
        ))
    }

    render() {
        const { items, name, headerStyle, listStyle, itemClick } = this.props;
        return (
            // <div className="dropdown-wrapper">
            //     <div className="dropdown-header" style={ headerStyle }>
            //         <a className="dropdown-header-title" onClick={ this.toggleDropdown }>
            //             { name }
            //         </a>
            //     </div>
            //     <ul className="dropdown-list" style={ listStyle } onClick={ itemClick }>
            //         {this.renderDropdown(items)}
            //     </ul>
            // </div>
            <div className="dropdown">
                <div className="dropdown-button">
                    <a>{ name }</a>
                </div>
                <ul>
                    <li>Kisumu</li>
                    <li>Nairobi</li>
                    <li>Mombasa</li>
                </ul>
            </div>
        )
    }
};

export default Dropdown;