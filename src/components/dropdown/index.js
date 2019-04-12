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

        return dropdownItems;
    }

    render() {
        const { items, name, dropdownStyle, listStyle, itemClick } = this.props;
        return (
            <div className="dropdown" style={ dropdownStyle }>
                <div className="dropdown-button">
                    <a>{ name }</a>
                </div>
                <ul>
                    { this.renderDropdown(items) }
                </ul>
            </div>
        )
    }
};

export default Dropdown;