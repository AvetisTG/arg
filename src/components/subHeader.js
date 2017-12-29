import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/index.css';

@connect((store) => {
    return {
        subHeaderItems: store.subHeaderItems.subHeaderItems
    }
})
class Header extends Component {
    render() {
        let items = this.props.subHeaderItems;
        return (
            <header id="subheader">
                <ul>
                    {items.map((item, index) => {
                        return <li key>
                            <a href="#" className="subheader-list">
                                <img src={require("../img/subheader-icons/" + (index + 1) + ".png")} alt="icon"
                                     className="list-icon"/>
                                <p>{item}</p>
                            </a>
                        </li>
                    })}
                </ul>
            </header>
        );
    }
}

export default Header;