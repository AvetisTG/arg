import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header'
import Subheader from './components/subHeader'

class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Subheader/>
            </div>
        );
    }
}

export default App;