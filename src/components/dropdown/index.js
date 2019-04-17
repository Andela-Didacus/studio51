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
            <li key={ index } onClick={ this.props.itemClick }>
                { item }
            </li>
        ))

        return dropdownItems;
    }

    render() {
        const { items, name, dropdownStyle } = this.props;
        return (
            <div class="dropdown" style={ dropdownStyle }> 
                <span className="dropdown-button">{ name }</span>
                <div className="dropdown-content"> 
                    <ul>
                        { this.renderDropdown(items) }
                    </ul>
                </div>
            </div>
        )
    }
};

export default Dropdown;
