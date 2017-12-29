import React, { Component } from 'react';

class Header extends Component {


    render() {
        return (
            <header id="main">
                <div className="logo">
                    <img src={require("../img/logo-1.png")} alt="MANUFACTURING"/>
                        <div className="vl"></div>
                </div>
                <div className="analytic">
                    <p>Analytic Engine</p>
                    <a href="#" className="btn">Dashboard</a>
                </div>
                <div className="locate">
                    <img src={require("../img/location-pin.png")} alt="location pointer"/>
                        <a href="#">Locate Plant</a>
                </div>
                <div className="search">
                    <img src={require("../img/search-icon.png")} alt="search"/>
                </div>
                <div className="user-info">
                    <p className="fullname">Barde Ridel</p>
                    <p className="position">Plant Manager</p>
                    <img src={require("../img/Avo2.jpg")} alt="user image" className="avatar"/>
                        <img src={require("../img/dropdown-icon.png")} alt="dropdown" className="dropdown"/>
                </div>
            </header>
        );
    }
}

export default Header;